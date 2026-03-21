import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LoggedHeader from "../../components/LoggedHeader";
import { ticketService } from '../../services/ticketService';

/* Icons as React Components */
const IconPlus = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="34"
    width="34"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </svg>
);

const IconList = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="34"
    width="34"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 7H21V9H3V7ZM3 11H21V13H3V11ZM3 15H14V17H3V15Z" />
  </svg>
);

const IconCheck = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="34"
    width="34"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" />
  </svg>
);

const IconChat = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="34"
    width="34"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 3H21V17H6L3 20V3ZM5 5V15.17L5.17 15H19V5H5ZM7 8H17V10H7V8ZM7 11H14V13H7V11Z" />
  </svg>
);

// ✅ FUNÇÃO AUXILIAR: Formatar tempo relativo
const formatTimeAgo = (dateString) => {
  if (!dateString) return 'Data não disponível';
  
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) return 'há poucos segundos';
  if (diffInSeconds < 3600) return `há ${Math.floor(diffInSeconds / 60)} minutos`;
  if (diffInSeconds < 86400) return `há ${Math.floor(diffInSeconds / 3600)} horas`;
  if (diffInSeconds < 2592000) return `há ${Math.floor(diffInSeconds / 86400)} dias`;
  if (diffInSeconds < 31536000) return `há ${Math.floor(diffInSeconds / 2592000)} meses`;
  return `há ${Math.floor(diffInSeconds / 31536000)} anos`;
};

// ✅ COMPONENTE: Card de atualização
const UpdateCard = ({ update }) => {
  const getUpdateTitle = (type) => {
    switch (type) {
      case 'response': return 'Sua solicitação foi atualizada!';
      case 'creation': return 'Novo ticket criado';
      case 'closure': return 'Ticket finalizado';
      case 'status_change': return 'Status alterado';
      default: return 'Atualização';
    }
  };

  const getUpdateDescription = (update) => {
    if (update.type === 'creation') {
      return update.ticket?.description || 'Novo ticket';
    }
    return update.message || 'Atualização do ticket';
  };

  return (
    <S.UpdateCard>
      <S.UpdateTitle>
        <S.UpdateDot />
        {getUpdateTitle(update.type)}
      </S.UpdateTitle>
      <S.UpdateDescription>
        {getUpdateDescription(update)}
      </S.UpdateDescription>
      <S.UpdateTime>
        {formatTimeAgo(update.createdAt)}
      </S.UpdateTime>
    </S.UpdateCard>
  );
};

export default function Home() {
  const { userData } = useAuth();
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFetching = useRef(false);

  // ✅ BUSCAR ATUALIZAÇÕES - UMA ÚNICA VEZ
  useEffect(() => {
    const fetchRecentUpdates = async () => {
      if (isFetching.current) return;

      try {
        isFetching.current = true;
        setLoading(true);
        setError(null);
        
        const response = await ticketService.getRecentUpdates();
        
        if (response.status === 200) {
          setUpdates(response.updates || []);
        } else {
          setError('Erro ao carregar atualizações');
        }
      } catch (err) {
        if (!updates.length) {
          setError(err.message || 'Não foi possível carregar as atualizações');
        }
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    };

    const token = localStorage.getItem('token');
    if (token && !isFetching.current) {
      fetchRecentUpdates();
    } else if (!token) {
      setLoading(false);
      setError('Faça login para ver as atualizações');
    }
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <LoggedHeader />
      
      <S.Main style={{ marginTop: '70px', padding: '2rem' }}>
        <S.WelcomeTitle>Bem-vindo, <span>{userData?.name || ""}</span> </S.WelcomeTitle>
        <S.WelcomeSubtitle>Como podemos ajudar você hoje?</S.WelcomeSubtitle>

        <S.ActionsGrid>
          <S.ActionCard aria-label="Abrir novo ticket" as={Link} to="/cliente/open-ticket">
            <S.ActionIcon>
              <IconPlus />
            </S.ActionIcon>
            Abrir Novo Ticket
          </S.ActionCard>

          <S.ActionCard aria-label="Tickets pendentes" as={Link} to="/cliente/pending-tickets">
            <S.ActionIcon>
              <IconList />
            </S.ActionIcon>
            Tickets Pendentes
          </S.ActionCard>

          <S.ActionCard aria-label="Tickets finalizados" as={Link} to="/cliente/closed-tickets">
            <S.ActionIcon>
              <IconCheck />
            </S.ActionIcon>
            Tickets Finalizados
          </S.ActionCard>

          <S.ActionCard aria-label="Chatbot de atendimento" as={Link} to="/cliente/chatbot">
            <S.ActionIcon>
              <IconChat />
            </S.ActionIcon>
            Chatbot IA
          </S.ActionCard>
        </S.ActionsGrid>

        <S.UpdatesTitle>Últimas atualizações</S.UpdatesTitle>
        
        {loading && <p>Carregando atualizações...</p>}
        
        {error && updates.length === 0 && (
          <div style={{ color: '#ef4444', marginBottom: '1rem' }}>
            {error}
            <button 
              onClick={handleRetry}
              style={{
                marginLeft: '1rem',
                backgroundColor: '#10b981',
                color: 'white',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Tentar Novamente
            </button>
          </div>
        )}
        
        <S.UpdatesGrid>
          {updates.length === 0 && !loading && !error && (
            <p>Nenhuma atualização recente</p>
          )}
          
          {updates.map(update => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </S.UpdatesGrid>
      </S.Main>
    </div>
  );
}
