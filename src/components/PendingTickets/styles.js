import styled from "styled-components";

const statusStyles = {
  aberto: {
    color: "#f59e0b",
    background: "#fef3c7",
    border: "#f59e0b",
  },
  pendente: {
    color: "#ef4444",
    background: "#fee2e2",
    border: "#ef4444",
  },
  fechado: {
    color: "#6b7280",
    background: "#f3f4f6",
    border: "#6b7280",
  },
  finalizado: {
    color: "#6b7280",
    background: "#f3f4f6",
    border: "#6b7280",
  },
  resolvido: {
    color: "#10b981",
    background: "#d1fae5",
    border: "#10b981",
  },
  default: {
    color: "#6b7280",
    background: "#f3f4f6",
    border: "#6b7280",
  },
};

const getStatusStyle = ($status, prop) =>
  (statusStyles[$status] || statusStyles.default)[prop];

const actionButtonStyles = `
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s ease, transform 0.1s ease;
  white-space: nowrap;
`;

export const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const Loading = styled.div`
  margin-top: 120px;
  font-size: 18px;
  color: #555;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
  padding: 0 20px;
`;

export const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

export const EmptyState = styled.div`
  margin-top: 50px;
  font-size: 16px;
  color: #777;
  text-align: center;
`;

export const TicketCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  width: 100%;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);
  }
`;

export const TicketsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 60px;
  padding: 0 20px;
`;

export const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const TicketInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TicketActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const TicketTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
`;

export const TicketStatus = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $status }) => getStatusStyle($status, "color")};
  background-color: ${({ $status }) => getStatusStyle($status, "background")};
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid ${({ $status }) => getStatusStyle($status, "border")};
`;

export const VerDetalhesButton = styled.button`
  ${actionButtonStyles}
  background-color: #00c853;
  color: #fff;

  &:hover {
    background-color: #00b84d;
    transform: scale(1.03);
  }

  &:active {
    background-color: #009d42;
    transform: scale(0.98);
  }
`;

export const SecondaryButton = styled.button`
  ${actionButtonStyles}
  width: ${({ $full }) => ($full ? "100%" : "auto")};
  margin-top: ${({ $withTopSpacing }) => ($withTopSpacing ? "12px" : "0")};
  align-self: ${({ $alignSelf }) => $alignSelf || "auto"};
  background-color: #eef2f7;
  color: #1f2937;

  &:hover {
    background-color: #e1e7ef;
    transform: scale(1.03);
  }

  &:active {
    background-color: #d3dbe6;
    transform: scale(0.98);
  }
`;

export const TicketProtocol = styled.p`
  margin: 8px 0 4px 0;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const TicketDate = styled.p`
  margin: 0;
  font-size: 13px;
  color: #888;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 14px;
  width: 100%;
  max-width: 460px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: #222;
  font-weight: 600;
  text-align: center;
`;

export const ModalInfo = styled.p`
  font-size: 15px;
  margin: 12px 0;
  color: #444;
  line-height: 1.5;

  strong {
    color: #222;
    font-weight: 600;
  }
`;

export const ModalStatus = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $status }) => getStatusStyle($status, "color")};
  background-color: ${({ $status }) => getStatusStyle($status, "background")};
  padding: 4px 10px;
  border-radius: 20px;
  border: 1px solid ${({ $status }) => getStatusStyle($status, "border")};
  margin-left: 8px;
`;

export const DescriptionBox = styled.div`
  margin-top: 0.5rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
`;

export const ModalActions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;

  @media (max-width: 520px) {
    flex-direction: column;
  }
`;

export const CloseButton = styled.button`
  ${actionButtonStyles}
  width: 100%;
  background-color: #00c853;
  color: #fff;

  &:hover {
    background-color: #00b84d;
  }
`;

export const ChatButton = styled(CloseButton)`
  background-color: #0f766e;

  &:hover {
    background-color: #0d5f59;
  }
`;
