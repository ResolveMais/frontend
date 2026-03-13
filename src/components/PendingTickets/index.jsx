import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ticketService } from '../../services/ticketService';
import LoggedHeader from "../LoggedHeader";
import * as S from './styles';

const PendingTickets= () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    loadTickets();
  }, []);

  const loadTickets = async () => {
    try {
      const response = await ticketService.getUserOpenAndPendingTickets();

      if (response.status === 200) {
        setTickets(response.tickets || []);
      }
    } catch (err) {
      console.error('Erro ao carregar tickets:', err);
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

  const getStatusText = (status) => {
    switch (status) {
      case 'aberto': return 'Aberto';
      case 'pendente': return 'Pendente';
      case 'fechado': return 'Finalizado';
      case 'resolvido': return 'Resolvido';
      default: return status;
    }
  };

  if (loading) {
    return <S.Loading>Carregando tickets...</S.Loading>;
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
                  <S.TicketTitle>Chamado {ticket.empresa || 'Resolve +'}</S.TicketTitle>
                  <S.TicketStatus status={ticket.status}>
                    {getStatusText(ticket.status)}
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
              <strong>Status:</strong>
              <S.ModalStatus status={selectedTicket.status}>
                {getStatusText(selectedTicket.status)}
              </S.ModalStatus>
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Protocolo:</strong> {`3330${selectedTicket.id.toString().padStart(4, '0')}`}
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Criado em:</strong> {formatDate(selectedTicket.criadoEm || selectedTicket.createdAt)}
            </S.ModalInfo>

            <S.ModalInfo>
              <strong>Descrição:</strong>
              <div style={{ 
                marginTop: '0.5rem',
                padding: '1rem',
                backgroundColor: '#f9fafb',
                borderRadius: '6px',
                border: '1px solid #e5e7eb'
              }}>
                {selectedTicket.descricao || selectedTicket.description || 'Sem descrição disponível.'}
              </div>
            </S.ModalInfo>

            <S.CloseButton onClick={closeModal}>
              Fechar
            </S.CloseButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
};

export default PendingTickets;