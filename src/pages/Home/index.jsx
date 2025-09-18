import React, { useState } from "react";
import * as S from "./styles";

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

const LogoSvg = () => (
  <img
    src="https://placehold.co/48x48/10b981/white?text=R+%2B"
    alt="Logo Resolve Plus mostrando as letras R e um símbolo de mais em verde"
  />
);

/* Componente da Landing Page */
export default function Home() {
  // Estado para a aba ativa
  const [activeTab, setActiveTab] = useState("home");

  return (
    <S.Container>
      <S.Header>
        <S.LogoGroup>
          <LogoSvg />
          <S.LogoText>Resolve +</S.LogoText>
        </S.LogoGroup>

        <S.NavMenu>
          <S.NavItem
            active={activeTab === "config"}
            onClick={() => setActiveTab("config")}
            aria-label="Configurações"
          >
            Configurações
          </S.NavItem>
          <S.NavItem
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
            aria-label="Home"
          >
            Home
          </S.NavItem>
          <S.NavItem
            active={activeTab === "atend"}
            onClick={() => setActiveTab("atend")}
            aria-label="Atendimentos"
          >
            Atendimentos
          </S.NavItem>
        </S.NavMenu>

        <S.UserSection>
          <S.UserName>Nome Cliente</S.UserName>
          <S.AvatarImg src="https://placehold.co/40x40/ffdca8/6b4226?text=J" />
        </S.UserSection>
      </S.Header>

      <S.Main>
        {activeTab === "home" && (
          <>
            <S.WelcomeTitle>Bem-vindo, João!</S.WelcomeTitle>
            <S.WelcomeSubtitle>Como podemos ajudar você hoje?</S.WelcomeSubtitle>

            <S.ActionsGrid>
              <S.ActionCard aria-label="Abrir novo ticket">
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
          </>
        )}

        {activeTab === "config" && (
          <p>Configurações (conteúdo a ser implementado conforme necessidade)</p>
        )}

        {activeTab === "atend" && (
          <p>Atendimentos (conteúdo a ser implementado conforme necessidade)</p>
        )}
      </S.Main>
    </S.Container>
  );
}