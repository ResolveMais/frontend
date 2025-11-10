import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ticketService } from '../../services/ticketService';
import LoggedHeader from "../../components/LoggedHeader";
import * as S from './styles';

const TicketList = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      // ✅ CORREÇÃO: Remove .data do response
      const response = await ticketService.getUserPendingTickets();

      // ✅ CORREÇÃO: Acessa response diretamente, não response.data
      if (response.status === 200) {
        setTickets(response.tickets || []);
      }
    } catch (err) {
      console.error('Erro ao carregar tickets:', err);
      
      // ✅ CORREÇÃO: Verificação mais robusta do erro
      if (err.response?.status === 401 || err.message?.includes('Não autorizado')) {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const openDetails = (ticket) => setSelectedTicket(ticket);
  const closeModal = () => setSelectedTicket(null);

  const formatDate = (dateString) => {
    if (!dateString) return 'Data não disponível';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <S.Container>
        <S.Loading>Carregando tickets...</S.Loading>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <LoggedHeader />

      <S.Header>
        <S.BackButton onClick={() => navigate(-1)}>←</S.BackButton>
        <S.PageTitle>Tickets Pendentes</S.PageTitle>
      </S.Header>

      {tickets.length === 0 ? (
        <S.EmptyState>Nenhum ticket pendente encontrado.</S.EmptyState>
      ) : (
        <S.TicketsList>
          {tickets.map((ticket) => (
            <S.TicketCard key={ticket.id}>
              <S.TicketHeader>
                <S.TicketInfo>
                  <S.TicketTitle>
                    Chamado {ticket.empresa || 'Empresa X'}
                  </S.TicketTitle>
                  <S.TicketStatus status={ticket.status}>
                    – {ticket.status === 'aberto' ? 'Pendente' : 'Finalizado'}
                  </S.TicketStatus>
                </S.TicketInfo>

                <S.VerDetalhesButton onClick={() => openDetails(ticket)}>
                  Ver detalhes
                </S.VerDetalhesButton>
              </S.TicketHeader>

              <S.TicketProtocol>
                Protocolo: {`3330${ticket.id.toString().padStart(4, '0')}`}
              </S.TicketProtocol>
            </S.TicketCard>
          ))}
        </S.TicketsList>
      )}

      {/* Modal de Detalhes */}
      {selectedTicket && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            <S.ModalTitle>Detalhes do Chamado</S.ModalTitle>

            <S.ModalInfo>
              <strong>Empresa:</strong> {selectedTicket.empresa || 'Não informada'}
            </S.ModalInfo>

            {selectedTicket.tituloReclamacao && (
              <S.ModalInfo>
                <strong>Título:</strong> {selectedTicket.tituloReclamacao}
              </S.ModalInfo>
            )}

            <S.ModalInfo>
              <strong>Status:</strong>{' '}
              {selectedTicket.status === 'aberto' ? 'Pendente' : 'Finalizado'}
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Protocolo:</strong> {`2024${selectedTicket.id.toString().padStart(4, '0')}`}
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Criado em:</strong> {formatDate(selectedTicket.criadoEm || selectedTicket.createdAt)}
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Descrição:</strong>
              <br />
              {selectedTicket.descricao || selectedTicket.description || 'Sem descrição disponível.'}
            </S.ModalInfo>

            <S.CloseButton onClick={closeModal}>Fechar</S.CloseButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default TicketList;