import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoggedHeader from "../../../components/LoggedHeader";
import { useSnack } from "../../../contexts/SnackContext";
import { ticketService } from "../../../services/ticketService";
import * as S from "./styles";

const REOPENABLE_STATUSES = ["fechado", "finalizado", "resolvido"];

const ClosedTickets = () => {
  const navigate = useNavigate();
  const { showSnack } = useSnack();

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [reopeningTicketId, setReopeningTicketId] = useState(null);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      const response = await ticketService.getUserClosedTickets();

      if (response.status === 200) {
        setTickets(response.tickets || []);
      }
    } catch (error) {
      console.error("Erro ao carregar tickets:", error);

      if (
        error.response?.status === 401 ||
        error.message?.includes("Não autorizado") ||
        error.message?.includes("Nao autorizado")
      ) {
        navigate("/login");
        return;
      }

      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message ||
          "Não foi possível carregar os tickets finalizados.",
      });
    } finally {
      setLoading(false);
    }
  };

  const openDetails = (ticket) => {
    setSelectedTicket(ticket);
  };

  const closeModal = () => {
    setSelectedTicket(null);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Data não disponível";

    const date = new Date(dateString);

    if (Number.isNaN(date.getTime())) return "Data não disponível";

    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusText = (status) => {
    switch (status) {
      case "aberto":
        return "Aberto";
      case "pendente":
        return "Pendente";
      case "fechado":
      case "finalizado":
        return "Fechado";
      case "resolvido":
        return "Resolvido";
      default:
        return status;
    }
  };

  const canReopenTicket = (ticket) =>
    REOPENABLE_STATUSES.includes(String(ticket?.status || "").toLowerCase());

  const handleReopenTicket = async (ticket) => {
    if (!ticket?.id) return;

    try {
      setReopeningTicketId(ticket.id);

      const response = await ticketService.updateStatus(ticket.id, "reabrir");

      if (response?.status >= 400) {
        throw new Error(
          response.message || "Não foi possível reabrir o chamado.",
        );
      }

      setTickets((previous) =>
        previous.filter((item) => String(item.id) !== String(ticket.id)),
      );
      setSelectedTicket((current) =>
        String(current?.id) === String(ticket.id) ? null : current,
      );

      showSnack({
        variant: "success",
        message: "Chamado reaberto com sucesso.",
      });

      navigate(`/cliente/chatbot?ticketId=${ticket.id}`);
    } catch (error) {
      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Não foi possível reabrir o chamado.",
      });
    } finally {
      setReopeningTicketId(null);
    }
  };

  if (loading) {
    return (
      <S.Container>
        <LoggedHeader />
        <S.Loading>Carregando tickets...</S.Loading>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <LoggedHeader />

      <S.Header>
        <div>
          <S.PageTitle>Tickets Finalizados</S.PageTitle>
          <S.Subtitle>
            Se o problema voltar, você pode reabrir o chamado e continuar o
            atendimento.
          </S.Subtitle>
        </div>
      </S.Header>

      {tickets.length === 0 ? (
        <S.EmptyState>Nenhum ticket finalizado encontrado.</S.EmptyState>
      ) : (
        <S.TicketsList>
          {tickets.map((ticket) => {
            const isReopening = reopeningTicketId === ticket.id;
            const canReopen = canReopenTicket(ticket);

            return (
              <S.TicketCard key={ticket.id}>
                <S.TicketHeader>
                  <S.TicketInfo>
                    <S.TicketTitle>
                      Chamado {ticket.empresa || "Resolve +"}
                    </S.TicketTitle>

                    <S.TicketStatus $status={ticket.status}>
                      {getStatusText(ticket.status)}
                    </S.TicketStatus>
                  </S.TicketInfo>

                  <S.TicketActions>
                    <S.VerDetalhesButton onClick={() => openDetails(ticket)}>
                      Ver detalhes
                    </S.VerDetalhesButton>

                    {canReopen ? (
                      <S.ReopenButton
                        onClick={() => handleReopenTicket(ticket)}
                        disabled={isReopening}
                      >
                        {isReopening ? "Reabrindo..." : "Reabrir chamado"}
                      </S.ReopenButton>
                    ) : null}
                  </S.TicketActions>
                </S.TicketHeader>

                <S.TicketProtocol>
                  Protocolo: {`3330${ticket.id.toString().padStart(4, "0")}`}
                </S.TicketProtocol>

                <S.TicketDate>
                  Finalizado em: {formatDate(ticket.closed_at)}
                </S.TicketDate>
              </S.TicketCard>
            );
          })}
        </S.TicketsList>
      )}

      {selectedTicket ? (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(event) => event.stopPropagation()}>
            <S.ModalTitle>Detalhes do Chamado</S.ModalTitle>

            <S.ModalInfo>
              <strong>Empresa:</strong>{" "}
              {selectedTicket.empresa || "Não informada"}
            </S.ModalInfo>

            {selectedTicket.tituloReclamacao ? (
              <S.ModalInfo>
                <strong>Título:</strong> {selectedTicket.tituloReclamacao}
              </S.ModalInfo>
            ) : null}

            <S.ModalInfo>
              <strong>Status:</strong>
              <S.ModalStatus $status={selectedTicket.status}>
                {getStatusText(selectedTicket.status)}
              </S.ModalStatus>
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Protocolo:</strong>{" "}
              {`3330${selectedTicket.id.toString().padStart(4, "0")}`}
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Criado em:</strong> {formatDate(selectedTicket.criadoEm)}
            </S.ModalInfo>

            {(selectedTicket.status === "finalizado" ||
              selectedTicket.status === "fechado") && (
              <S.ModalInfo>
                <strong>Finalizado em:</strong>{" "}
                {formatDate(selectedTicket.closed_at)}
              </S.ModalInfo>
            )}

            <S.ModalInfo>
              <strong>Descrição:</strong>
              <S.DescriptionBox>
                {selectedTicket.descricao || "Sem descrição disponível."}
              </S.DescriptionBox>
            </S.ModalInfo>

            <S.ModalActions>
              <S.SecondaryButton onClick={closeModal}>Fechar</S.SecondaryButton>

              {canReopenTicket(selectedTicket) ? (
                <S.CloseButton
                  onClick={() => handleReopenTicket(selectedTicket)}
                  disabled={reopeningTicketId === selectedTicket.id}
                >
                  {reopeningTicketId === selectedTicket.id
                    ? "Reabrindo..."
                    : "Reabrir chamado"}
                </S.CloseButton>
              ) : null}
            </S.ModalActions>
          </S.ModalContent>
        </S.ModalOverlay>
      ) : null}
    </S.Container>
  );
};

export default ClosedTickets;
