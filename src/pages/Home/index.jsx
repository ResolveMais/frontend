import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LoggedHeader from "../../components/LoggedHeader";

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

export default function Home() {
  const { userData } = useAuth();

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <LoggedHeader />
      
      <S.Main style={{ marginTop: '70px', padding: '2rem' }}>
        <S.WelcomeTitle>Bem-vindo, João!</S.WelcomeTitle>
        <S.WelcomeSubtitle>Como podemos ajudar você hoje?</S.WelcomeSubtitle>

        <S.ActionsGrid>
          <S.ActionCard aria-label="Abrir novo ticket" as={Link} to="/OpenTicket">
            <S.ActionIcon>
              <IconPlus />
            </S.ActionIcon>
            Abrir Novo Ticket
          </S.ActionCard>

          <S.ActionCard aria-label="Tickets pendentes">
            <S.ActionIcon>
              <IconList />
            </S.ActionIcon>
            Tickets Pendentes
          </S.ActionCard>

          <S.ActionCard aria-label="Tickets resolvidos">
            <S.ActionIcon>
              <IconCheck />
            </S.ActionIcon>
            Tickets Resolvidos
          </S.ActionCard>
        </S.ActionsGrid>

        <S.UpdatesTitle>Últimas atualizações</S.UpdatesTitle>
        <S.UpdatesGrid>
          <S.UpdateCard>
            <S.UpdateTitle>
              <S.UpdateDot />
              Sua solicitação foi atualizada!
            </S.UpdateTitle>
            <S.UpdateDescription>Uma resposta foi enviada</S.UpdateDescription>
            <S.UpdateTime>há 2 horas</S.UpdateTime>
          </S.UpdateCard>

          <S.UpdateCard>
            <S.UpdateTitle>
              <S.UpdateDot />
              Novo ticket criado
            </S.UpdateTitle>
            <S.UpdateDescription>Problemas com pagamento</S.UpdateDescription>
            <S.UpdateTime>há 5 horas</S.UpdateTime>
          </S.UpdateCard>

          <S.UpdateCard>
            <S.UpdateTitle>
              <S.UpdateDot />
              Ticket finalizado
            </S.UpdateTitle>
            <S.UpdateDescription>Seu ticket foi finalizado!</S.UpdateDescription>
            <S.UpdateTime>há 2 meses</S.UpdateTime>
          </S.UpdateCard>
        </S.UpdatesGrid>
      </S.Main>
    </div>
  );
}