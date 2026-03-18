import { useEffect, useMemo, useRef, useState } from "react";
import LoggedHeader from "../../components/LoggedHeader";
import { useSnack } from "../../contexts/SnackContext";
import { chatbotService } from "../../services/chatbotService";
import * as S from "./styles";

const buildLocalMessage = ({ role, content }) => ({
  id: `local-${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  role,
  content,
});

export default function ChatbotPage() {
  const { showSnack } = useSnack();

  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [agentInfo, setAgentInfo] = useState({
    name: "Resolve Assist",
    description:
      "Assistente virtual para apoio em tickets e atendimento na plataforma.",
  });
  const [inputText, setInputText] = useState("");
  const [isLoadingConversation, setIsLoadingConversation] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);

  const messagesEndRef = useRef(null);

  const canSend = useMemo(
    () => inputText.trim().length > 0 && !isStreaming,
    [inputText, isStreaming]
  );

  useEffect(() => {
    const loadConversation = async () => {
      try {
        setIsLoadingConversation(true);
        const response = await chatbotService.getConversation();

        if (response?.agent) {
          setAgentInfo({
            name: response.agent.name,
            description: response.agent.description,
          });
        }

        setConversationId(response?.conversation?.id || null);
        setMessages(response?.messages || []);
      } catch (error) {
        showSnack({
          variant: "error",
          message: "Nao foi possivel carregar a conversa do chatbot.",
        });
      } finally {
        setIsLoadingConversation(false);
      }
    };

    loadConversation();
  }, [showSnack]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const cleanMessage = inputText.trim();
    if (!cleanMessage || isStreaming) return;

    const localUserMessage = buildLocalMessage({
      role: "user",
      content: cleanMessage,
    });

    const localAssistantMessage = buildLocalMessage({
      role: "assistant",
      content: "",
    });

    setMessages((prevMessages) => [
      ...prevMessages,
      localUserMessage,
      localAssistantMessage,
    ]);
    setInputText("");
    setIsStreaming(true);

    try {
      await chatbotService.streamMessage({
        message: cleanMessage,
        conversationId,
        onStart: (payload) => {
          if (payload?.conversationId) {
            setConversationId(payload.conversationId);
          }
          if (payload?.agent) {
            setAgentInfo({
              name: payload.agent.name,
              description: payload.agent.description,
            });
          }
        },
        onToken: (nextToken) => {
          setMessages((prevMessages) =>
            prevMessages.map((message) =>
              message.id === localAssistantMessage.id
                ? {
                    ...message,
                    content: `${message.content}${nextToken}`,
                  }
                : message
            )
          );
        },
        onDone: (payload) => {
          if (payload?.conversationId) {
            setConversationId(payload.conversationId);
          }
          if (payload?.messageId) {
            setMessages((prevMessages) =>
              prevMessages.map((message) =>
                message.id === localAssistantMessage.id
                  ? { ...message, id: payload.messageId }
                  : message
              )
            );
          }
        },
      });
    } catch (error) {
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== localAssistantMessage.id)
      );
      showSnack({
        variant: "error",
        message:
          error.message || "Nao foi possivel gerar resposta agora. Tente novamente.",
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleClearConversation = async () => {
    if (isStreaming) return;

    try {
      await chatbotService.clearConversation(conversationId);
      setMessages([]);
      setConversationId(null);
      showSnack({
        variant: "success",
        message: "Conversa limpa com sucesso.",
      });
    } catch (error) {
      showSnack({
        variant: "error",
        message: "Nao foi possivel limpar a conversa.",
      });
    }
  };

  const handleComposerKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage(event);
    }
  };

  return (
    <S.Wrapper>
      <LoggedHeader />

      <S.Content>
        <S.HeaderCard>
          <S.HeaderText>
            <S.Title>{agentInfo.name}</S.Title>
            <S.Subtitle>{agentInfo.description}</S.Subtitle>
          </S.HeaderText>

          <S.ClearButton
            type="button"
            disabled={isStreaming}
            onClick={handleClearConversation}
          >
            Limpar conversa
          </S.ClearButton>
        </S.HeaderCard>

        <S.ChatCard>
          <S.MessagesArea>
            {isLoadingConversation ? (
              <S.EmptyState>Carregando conversa...</S.EmptyState>
            ) : null}

            {!isLoadingConversation && messages.length === 0 ? (
              <S.EmptyState>
                Envie uma mensagem para iniciar o atendimento com o assistente.
              </S.EmptyState>
            ) : null}

            {!isLoadingConversation &&
              messages.map((message) => (
                <S.MessageRow key={message.id} $role={message.role}>
                  <S.MessageBubble $role={message.role}>
                    {message.content}
                  </S.MessageBubble>
                </S.MessageRow>
              ))}

            <div ref={messagesEndRef} />
          </S.MessagesArea>

          <S.Composer onSubmit={handleSendMessage}>
            <S.Textarea
              value={inputText}
              onChange={(event) => setInputText(event.target.value)}
              onKeyDown={handleComposerKeyDown}
              placeholder="Digite sua mensagem..."
              disabled={isStreaming}
            />
            <S.SendButton type="submit" disabled={!canSend}>
              {isStreaming ? "Gerando..." : "Enviar"}
            </S.SendButton>
          </S.Composer>
        </S.ChatCard>

        {isStreaming ? (
          <S.StreamingIndicator>A IA esta respondendo em tempo real...</S.StreamingIndicator>
        ) : null}
      </S.Content>
    </S.Wrapper>
  );
}
