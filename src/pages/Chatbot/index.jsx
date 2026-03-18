import { useEffect, useMemo, useRef, useState } from "react";
import LoggedHeader from "../../components/LoggedHeader";
import { useSnack } from "../../contexts/SnackContext";
import { chatbotService } from "../../services/chatbotService";
import { ticketService } from "../../services/ticketService";
import * as S from "./styles";

const buildLocalMessage = ({ role, content }) => ({
  id: `local-${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  role,
  content,
});

const getStatusText = (status) => {
  switch (status) {
    case "aberto":
      return "Aberto";
    case "pendente":
      return "Pendente";
    case "finalizado":
      return "Finalizado";
    case "resolvido":
      return "Resolvido";
    default:
      return "Em andamento";
  }
};

const buildProtocol = (ticketId) =>
  `3330${ticketId.toString().padStart(4, "0")}`;

export default function ChatbotPage() {
  const { showSnack } = useSnack();

  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState("");
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [agentInfo, setAgentInfo] = useState({
    name: "Resolve Assist",
    description:
      "Assistente virtual para apoio em tickets e atendimento na plataforma.",
  });
  const [inputText, setInputText] = useState("");
  const [isLoadingConversation, setIsLoadingConversation] = useState(true);
  const [isLoadingTickets, setIsLoadingTickets] = useState(true);
  const [isStreaming, setIsStreaming] = useState(false);

  const messagesEndRef = useRef(null);

  const selectedTicket = useMemo(
    () =>
      tickets.find(
        (ticket) => String(ticket.id) === String(selectedTicketId),
      ) || null,
    [tickets, selectedTicketId],
  );

  const canSend = useMemo(
    () =>
      inputText.trim().length > 0 &&
      !isStreaming &&
      !isLoadingConversation &&
      !!selectedTicketId &&
      !!selectedTicket,
    [
      inputText,
      isStreaming,
      isLoadingConversation,
      selectedTicketId,
      selectedTicket,
    ],
  );

  const emptyStateMessage = useMemo(() => {
    if (isLoadingTickets) return "Carregando tickets em aberto...";
    if (tickets.length === 0) {
      return "Nenhum ticket em aberto encontrado. Abra um ticket para conversar.";
    }
    if (!selectedTicketId)
      return "Selecione um ticket para iniciar a conversa.";
    if (selectedTicketId && !selectedTicket) {
      return "O ticket selecionado nao esta mais em aberto.";
    }
    if (isLoadingConversation) return "Carregando conversa do ticket...";
    if (messages.length === 0 && selectedTicket) {
      return `Conversa vinculada ao ticket ${buildProtocol(selectedTicket.id)}.`;
    }
    return null;
  }, [
    isLoadingTickets,
    tickets.length,
    selectedTicketId,
    isLoadingConversation,
    messages.length,
    selectedTicket,
  ]);

  useEffect(() => {
    const loadTickets = async () => {
      try {
        setIsLoadingTickets(true);
        const response = await ticketService.getUserOpenAndPendingTickets();
        setTickets(response?.tickets || []);
      } catch (error) {
        showSnack({
          variant: "error",
          message: "Nao foi possivel carregar os tickets em aberto.",
        });
      } finally {
        setIsLoadingTickets(false);
      }
    };

    loadTickets();
  }, [showSnack]);

  useEffect(() => {
    if (tickets.length === 0 && selectedTicketId) {
      setSelectedTicketId("");
      return;
    }

    if (!selectedTicketId && tickets.length > 0) {
      setSelectedTicketId(String(tickets[0].id));
    }
  }, [tickets, selectedTicketId]);

  useEffect(() => {
    const loadConversation = async () => {
      if (!selectedTicketId) {
        setMessages([]);
        setConversationId(null);
        setIsLoadingConversation(false);
        return;
      }

      try {
        setIsLoadingConversation(true);
        const response = await chatbotService.getConversation({
          ticketId: selectedTicketId,
        });

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
          message: "Nao foi possivel carregar a conversa do ticket.",
        });
      } finally {
        setIsLoadingConversation(false);
      }
    };

    loadConversation();
  }, [selectedTicketId, showSnack]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const cleanMessage = inputText.trim();
    if (!cleanMessage || isStreaming) return;

    if (!selectedTicketId || !selectedTicket) {
      showSnack({
        variant: "warning",
        message: "Selecione um ticket para iniciar o atendimento.",
      });
      return;
    }

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
        ticketId: selectedTicketId,
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
                : message,
            ),
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
                  : message,
              ),
            );
          }
        },
      });
    } catch (error) {
      setMessages((prevMessages) =>
        prevMessages.filter(
          (message) => message.id !== localAssistantMessage.id,
        ),
      );
      showSnack({
        variant: "error",
        message:
          error.message ||
          "Nao foi possivel gerar resposta agora. Tente novamente.",
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleClearConversation = async () => {
    if (isStreaming || !selectedTicketId) return;

    try {
      await chatbotService.clearConversation({
        conversationId,
        ticketId: selectedTicketId,
      });
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

  const handleTicketChange = (event) => {
    setSelectedTicketId(event.target.value);
    setMessages([]);
    setConversationId(null);
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

          <S.HeaderActions>
            <S.TicketSelector>
              <S.TicketLabel>Ticket em atendimento</S.TicketLabel>
              <S.TicketSelect
                value={selectedTicketId}
                onChange={handleTicketChange}
                disabled={
                  isLoadingTickets || tickets.length === 0 || isStreaming
                }
              >
                {isLoadingTickets ? (
                  <option value="">Carregando tickets...</option>
                ) : null}
                {!isLoadingTickets && tickets.length === 0 ? (
                  <option value="">Sem tickets abertos</option>
                ) : null}
                {!isLoadingTickets && tickets.length > 0
                  ? tickets.map((ticket) => (
                      <option key={ticket.id} value={ticket.id}>
                        #{buildProtocol(ticket.id)} -{" "}
                        {ticket.empresa || "Resolve +"} (
                        {getStatusText(ticket.status)})
                      </option>
                    ))
                  : null}
              </S.TicketSelect>
            </S.TicketSelector>

            <S.ClearButton
              type="button"
              disabled={
                isStreaming || !selectedTicketId || messages.length === 0
              }
              onClick={handleClearConversation}
            >
              Limpar conversa
            </S.ClearButton>
          </S.HeaderActions>
        </S.HeaderCard>

        {selectedTicket ? (
          <S.TicketMetaCard>
            <S.TicketMetaItem>
              <S.MetaLabel>Protocolo</S.MetaLabel>
              <S.MetaValue>{buildProtocol(selectedTicket.id)}</S.MetaValue>
            </S.TicketMetaItem>
            <S.TicketMetaItem>
              <S.MetaLabel>Status</S.MetaLabel>
              <S.StatusPill $status={selectedTicket.status}>
                {getStatusText(selectedTicket.status)}
              </S.StatusPill>
            </S.TicketMetaItem>
            <S.TicketMetaItem>
              <S.MetaLabel>Empresa</S.MetaLabel>
              <S.MetaValue>{selectedTicket.empresa || "Resolve +"}</S.MetaValue>
            </S.TicketMetaItem>
            <S.TicketMetaItem>
              <S.MetaLabel>Assunto</S.MetaLabel>
              <S.MetaValue>
                {selectedTicket.tituloReclamacao || "Sem titulo"}
              </S.MetaValue>
            </S.TicketMetaItem>
          </S.TicketMetaCard>
        ) : null}

        <S.ChatCard>
          <S.MessagesArea>
            {emptyStateMessage ? (
              <S.EmptyState>{emptyStateMessage}</S.EmptyState>
            ) : null}

            {!emptyStateMessage &&
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
              placeholder={
                selectedTicketId
                  ? "Digite sua mensagem..."
                  : "Selecione um ticket para conversar..."
              }
              disabled={
                isStreaming ||
                isLoadingConversation ||
                !selectedTicketId ||
                !selectedTicket
              }
            />
            <S.SendButton type="submit" disabled={!canSend}>
              {isStreaming ? "Gerando..." : "Enviar"}
            </S.SendButton>
          </S.Composer>
        </S.ChatCard>

        {isStreaming ? (
          <S.StreamingIndicator>
            Pensando, aguarde um momento...
          </S.StreamingIndicator>
        ) : null}
      </S.Content>
    </S.Wrapper>
  );
}
