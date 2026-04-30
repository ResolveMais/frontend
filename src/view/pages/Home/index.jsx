import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { useAuth } from "../../../contexts/AuthContext";
import LoggedHeader from "../../../components/LoggedHeader";
import { ticketService } from "../../../services/ticketService";

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

const formatTimeAgo = (dateString) => {
  if (!dateString) return "Data não disponível";

  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  if (diffInSeconds < 60) return "há poucos segundos";
  if (diffInSeconds < 3600)
    return `há ${Math.floor(diffInSeconds / 60)} minutos`;
  if (diffInSeconds < 86400)
    return `há ${Math.floor(diffInSeconds / 3600)} horas`;
  if (diffInSeconds < 2592000)
    return `há ${Math.floor(diffInSeconds / 86400)} dias`;
  if (diffInSeconds < 31536000)
    return `há ${Math.floor(diffInSeconds / 2592000)} meses`;

  return `há ${Math.floor(diffInSeconds / 31536000)} anos`;
};

const UpdateCard = ({ update }) => {
  const getUpdateTitle = (type) => {
    switch (type) {
      case "response":
        return "Sua solicitação foi atualizada!";
      case "creation":
        return "Novo ticket criado";
      case "closure":
        return "Ticket finalizado";
      case "status_change":
        return "Status alterado";
      default:
        return "Atualização";
    }
  };

  const getUpdateDescription = (currentUpdate) => {
    if (currentUpdate.type === "creation") {
      return currentUpdate.ticket?.description || "Novo ticket";
    }
    return currentUpdate.message || "Atualização do ticket";
  };

  return (
    <S.UpdateCard>
      <S.UpdateTitle>
        <S.UpdateDot />
        {getUpdateTitle(update.type)}
      </S.UpdateTitle>
      <S.UpdateDescription>{getUpdateDescription(update)}</S.UpdateDescription>
      <S.UpdateTime>{formatTimeAgo(update.createdAt)}</S.UpdateTime>
    </S.UpdateCard>
  );
};

export default function Home() {
  const { userData } = useAuth();
  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isFetching = useRef(false);

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
          setError("Erro ao carregar atualizações");
        }
      } catch (err) {
        if (!updates.length) {
          setError(err.message || "Não foi possível carregar as atualizações");
        }
      } finally {
        setLoading(false);
        isFetching.current = false;
      }
    };

    const token = localStorage.getItem("token");

    if (token && !isFetching.current) {
      fetchRecentUpdates();
    } else if (!token) {
      setLoading(false);
      setError("Faça login para ver as atualizações");
    }
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <S.Page>
      <LoggedHeader />

      <S.Container>
        <S.HeroSection>
          <S.Eyebrow>
            <S.EyebrowDot />
            <span>Área do cliente</span>
          </S.Eyebrow>

          <S.WelcomeTitle>
            Bem-vindo, <span>{userData?.name || ""}</span>
          </S.WelcomeTitle>

          <S.WelcomeSubtitle>Como podemos ajudar você hoje?</S.WelcomeSubtitle>

          <S.ActionsGrid>
            <S.ActionCard as={Link} to="/cliente/open-ticket" aria-label="Abrir novo ticket">
              <S.ActionIcon>
                <IconPlus />
              </S.ActionIcon>
              Abrir Novo Ticket
            </S.ActionCard>

            <S.ActionCard as={Link} to="/cliente/pending-tickets" aria-label="Tickets pendentes">
              <S.ActionIcon>
                <IconList />
              </S.ActionIcon>
              Tickets Pendentes
            </S.ActionCard>

            <S.ActionCard as={Link} to="/cliente/closed-tickets" aria-label="Tickets finalizados">
              <S.ActionIcon>
                <IconCheck />
              </S.ActionIcon>
              Tickets Finalizados
            </S.ActionCard>
          </S.ActionsGrid>
        </S.HeroSection>

        <S.SectionHeader>
          <div>
            <S.SectionTitle>Últimas atualizações</S.SectionTitle>
            <S.SectionText>Acompanhe o histórico recente dos seus tickets.</S.SectionText>
          </div>
        </S.SectionHeader>

        {loading && <S.EmptyState>Carregando atualizações...</S.EmptyState>}

        {error && updates.length === 0 && (
          <S.EmptyState>
            {error}
            <button
              onClick={handleRetry}
              style={{
                marginLeft: "1rem",
                backgroundColor: "#18bf6f",
                color: "white",
                border: "none",
                padding: "0.4rem 1rem",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Tentar novamente
            </button>
          </S.EmptyState>
        )}

        <S.UpdatesGrid>
          {updates.length === 0 && !loading && !error && (
            <S.EmptyState>Nenhuma atualização recente.</S.EmptyState>
          )}

          {updates.map((update) => (
            <UpdateCard key={update.id} update={update} />
          ))}
        </S.UpdatesGrid>
      </S.Container>
    </S.Page>
  );
}
