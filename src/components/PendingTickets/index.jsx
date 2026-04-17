import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import LoggedHeader from "../LoggedHeader";
import { useSnack } from "../../contexts/SnackContext";
import { ticketService } from "../../services/ticketService";
import * as S from "./styles";

const PendingTickets = () => {
  const navigate = useNavigate();
  const { showSnack } = useSnack();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      const response = await ticketService.getUserOpenAndPendingTickets();
      setTickets(response?.tickets || []);
    } catch (error) {
      console.error("Erro ao carregar tickets:", error);

      if (
        error.response?.status === 401 ||
        error.message?.includes("Não autorizado")
      ) {
        navigate("/login");
        return;
      }

      showSnack({
        variant: "error",
        message:
          error?.response?.data?.message ||
          "Não foi possível carregar os tickets em andamento.",
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

  const openConversation = (ticketId) => {
    navigate(`/cliente/chatbot?ticketId=${ticketId}`);
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
          <S.PageTitle>Tickets em Andamento</S.PageTitle>
        </div>
      </S.Header>

      {tickets.length === 0 ? (
        <S.EmptyState>Nenhum ticket em andamento encontrado.</S.EmptyState>
      ) : (
        <S.TicketsList>
          {tickets.map((ticket) => (
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
                  <S.VerDetalhesButton
                    type="button"
                    onClick={() => openConversation(ticket.id)}
                  >
                    Abrir atendimento
                  </S.VerDetalhesButton>
                </S.TicketActions>
              </S.TicketHeader>

              <S.TicketDate>
                Última movimentação:{" "}
                {formatDate(ticket.updatedAt || ticket.createdAt)}
              </S.TicketDate>

              <S.SecondaryButton
                type="button"
                $withTopSpacing
                $alignSelf="flex-start"
                onClick={() => openDetails(ticket)}
              >
                Ver detalhes
              </S.SecondaryButton>

              <S.TicketProtocol>
                Protocolo: {`3330${ticket.id.toString().padStart(4, "0")}`}
              </S.TicketProtocol>
            </S.TicketCard>
          ))}
        </S.TicketsList>
      )}

      {selectedTicket && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(event) => event.stopPropagation()}>
            <S.ModalTitle>Detalhes do Chamado</S.ModalTitle>

            <S.ModalInfo>
              <strong>Empresa:</strong>{" "}
              {selectedTicket.empresa || "Não informada"}
            </S.ModalInfo>

            {selectedTicket.tituloReclamacao && (
              <S.ModalInfo>
                <strong>Título:</strong> {selectedTicket.tituloReclamacao}
              </S.ModalInfo>
            )}

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
              <strong>Criado em:</strong> {formatDate(selectedTicket.createdAt)}
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Descrição:</strong>
              <S.DescriptionBox>
                {selectedTicket.descricao ||
                  selectedTicket.description ||
                  "Sem descrição disponível."}
              </S.DescriptionBox>
            </S.ModalInfo>

            <S.ModalActions>
              <S.SecondaryButton type="button" $full onClick={closeModal}>
                Fechar
              </S.SecondaryButton>

              <S.ChatButton
                type="button"
                onClick={() => openConversation(selectedTicket.id)}
              >
                Ir para o chat
              </S.ChatButton>
            </S.ModalActions>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default PendingTickets;
