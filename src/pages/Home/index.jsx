import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f9fafb;
  min-height: 100vh;
  padding: 24px 32px;
  font-family: "Inter", sans-serif;
  color: #111827;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 8px;
`;

const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const LogoText = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #10b981; /* Verde (Tailwind emerald-500) */
`;

const NavMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => (p.active ? "#10b981" : "#111827")};
  border-bottom: ${(p) =>
    p.active ? "3px solid #10b981" : "3px solid transparent"};
  padding-bottom: 6px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #10b981;
  }
`;

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  color: #111827;
`;

const UserName = styled.span`
  white-space: nowrap;
`;

const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  object-fit: cover;
  border: 2px solid #10b981;
`;

const Main = styled.main`
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
`;

/* Welcome Section */
const WelcomeTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const WelcomeSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #6b7280; /* tailwind gray-500 */
  margin-bottom: 24px;
`;

/* Action Buttons */
const ActionsGrid = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 36px;
  flex-wrap: wrap;
  justify-content: center;
`;

const ActionCard = styled.button`
  background-color: #10b981;
  border-radius: 12px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 22px 28px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.35);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #059669;
  }
`;

const ActionIcon = styled.div`
  width: 34px;
  height: 34px;
  svg, img {
    width: 100%;
    height: 100%;
    fill: white;
  }
`;

/* Updates Section */
const UpdatesTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const UpdatesGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const UpdateCard = styled.div`
  background: white;
  border-radius: 14px;
  border: 1px solid #d1d5db; /* gray-300 */
  padding: 16px 20px;
  min-width: 220px;
  max-width: 280px;
  box-sizing: border-box;
  cursor: default;
`;

const UpdateDot = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #10b981;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
`;

const UpdateTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #111827;
  margin: 0 0 6px 0;
  display: flex;
  align-items: center;
`;

const UpdateDescription = styled.p`
  margin: 0 0 6px 22px;
  font-size: 14px;
  color: #6b7280;
`;

const UpdateTime = styled.p`
  margin: 0 0 0 22px;
  font-size: 12px;
  color: #9ca3af;
`;

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

const Avatar = () => (
  <img
    src="https://placehold.co/40x40/ffdca8/6b4226?text=J"
    alt="Avatar do usuário com cabelo ruivo e fundo amarelo claro"
  />
);

/* Componente da Landing Page */
export default function Home() {
  // Estado para a aba ativa
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Container>
      <Header>
        <LogoGroup>
          <LogoSvg />
          <LogoText>Resolve +</LogoText>
        </LogoGroup>

        <NavMenu>
          <NavItem
            active={activeTab === "config"}
            onClick={() => setActiveTab("config")}
            aria-label="Configurações"
          >
            Configurações
          </NavItem>
          <NavItem
            active={activeTab === "home"}
            onClick={() => setActiveTab("home")}
            aria-label="Home"
          >
            Home
          </NavItem>
          <NavItem
            active={activeTab === "atend"}
            onClick={() => setActiveTab("atend")}
            aria-label="Atendimentos"
          >
            Atendimentos
          </NavItem>
        </NavMenu>

        <UserSection>
          <UserName>Nome Cliente</UserName>
          <Avatar />
        </UserSection>
      </Header>

      <Main>
        {activeTab === "home" && (
          <>
            <WelcomeTitle>Bem-vindo, João!</WelcomeTitle>
            <WelcomeSubtitle>Como podemos ajudar você hoje?</WelcomeSubtitle>

            <ActionsGrid>
              <ActionCard aria-label="Abrir novo ticket">
                <ActionIcon>
                  <IconPlus />
                </ActionIcon>
                Abrir Novo Ticket
              </ActionCard>

              <ActionCard aria-label="Tickets pendentes">
                <ActionIcon>
                  <IconList />
                </ActionIcon>
                Tickets Pendentes
              </ActionCard>

              <ActionCard aria-label="Tickets resolvidos">
                <ActionIcon>
                  <IconCheck />
                </ActionIcon>
                Tickets Resolvidos
              </ActionCard>
            </ActionsGrid>

            <UpdatesTitle>Últimas atualizações</UpdatesTitle>
            <UpdatesGrid>
              <UpdateCard>
                <UpdateTitle>
                  <UpdateDot />
                  Sua solicitação foi atualizada!
                </UpdateTitle>
                <UpdateDescription>Uma resposta foi enviada</UpdateDescription>
                <UpdateTime>há 2 horas</UpdateTime>
              </UpdateCard>

              <UpdateCard>
                <UpdateTitle>
                  <UpdateDot />
                  Novo ticket criado
                </UpdateTitle>
                <UpdateDescription>Problemas com pagamento</UpdateDescription>
                <UpdateTime>há 5 horas</UpdateTime>
              </UpdateCard>

              <UpdateCard>
                <UpdateTitle>
                  <UpdateDot />
                  Ticket finalizado
                </UpdateTitle>
                <UpdateDescription>Seu ticket foi finalizado!</UpdateDescription>
                <UpdateTime>há 2 meses</UpdateTime>
              </UpdateCard>
            </UpdatesGrid>
          </>
        )}

        {activeTab === "config" && (
          <p>Configurações (conteúdo a ser implementado conforme necessidade)</p>
        )}

        {activeTab === "atend" && (
          <p>Atendimentos (conteúdo a ser implementado conforme necessidade)</p>
        )}
      </Main>
    </Container>
  );
}