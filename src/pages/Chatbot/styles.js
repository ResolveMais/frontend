import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  background: #f9fafb;
  padding-top: 70px;
  font-family: "Inter", sans-serif;
  color: #111827;
`;

export const Content = styled.main`
  max-width: 1040px;
  margin: 0 auto;
  padding: 28px 20px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderCard = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #0f172a;
  font-size: 1.4rem;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 0.95rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const TicketSelector = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 260px;

  @media (max-width: 720px) {
    width: 100%;
    min-width: 0;
  }
`;

export const TicketLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const TicketSelect = styled.select`
  border: 1px solid #d1d5db;
  background: #ffffff;
  color: #111827;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 0.92rem;
  outline: none;

  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
  }

  &:disabled {
    background: #f3f4f6;
    color: #9ca3af;
    cursor: not-allowed;
  }
`;

export const ClearButton = styled.button`
  border: 1px solid #10b981;
  background: #ecfdf5;
  color: #065f46;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover:not(:disabled) {
    background: #d1fae5;
    border-color: #059669;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const TicketMetaCard = styled.section`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  padding: 14px 18px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
`;

export const TicketMetaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MetaLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const MetaValue = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
`;

export const StatusPill = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({ $status }) => {
    switch ($status) {
      case "aberto":
        return "#b45309";
      case "pendente":
        return "#b91c1c";
      case "finalizado":
        return "#6b7280";
      case "resolvido":
        return "#065f46";
      default:
        return "#065f46";
    }
  }};
  background-color: ${({ $status }) => {
    switch ($status) {
      case "aberto":
        return "#fef3c7";
      case "pendente":
        return "#fee2e2";
      case "finalizado":
        return "#f3f4f6";
      case "resolvido":
        return "#d1fae5";
      default:
        return "#d1fae5";
    }
  }};
  border: 1px solid ${({ $status }) => {
    switch ($status) {
      case "aberto":
        return "#f59e0b";
      case "pendente":
        return "#ef4444";
      case "finalizado":
        return "#d1d5db";
      case "resolvido":
        return "#10b981";
      default:
        return "#10b981";
    }
  }};
`;

export const ChatCard = styled.section`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
`;

export const MessagesArea = styled.div`
  min-height: 420px;
  max-height: 60vh;
  overflow-y: auto;
  padding: 20px;
  background: #f9fafb;
`;

export const EmptyState = styled.div`
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #6b7280;
  font-size: 0.95rem;
  padding: 0 16px;
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.$role === "user" ? "flex-end" : "flex-start"};
  margin-bottom: 12px;
  animation: ${fadeInUp} 0.2s ease;
`;

export const MessageBubble = styled.div`
  max-width: min(76%, 700px);
  border-radius: 14px;
  padding: 11px 14px;
  line-height: 1.45;
  white-space: pre-wrap;
  word-break: break-word;
  background: ${(props) => (props.$role === "user" ? "#10b981" : "#ecfdf5")};
  color: ${(props) => (props.$role === "user" ? "#ffffff" : "#064e3b")};
  border: 1px solid ${(props) =>
    props.$role === "user" ? "#059669" : "#a7f3d0"};
`;

export const Composer = styled.form`
  display: flex;
  gap: 10px;
  padding: 14px;
  border-top: 1px solid #e5e7eb;
  background: #ffffff;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const Textarea = styled.textarea`
  flex: 1;
  min-height: 54px;
  max-height: 160px;
  resize: vertical;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 12px;
  font-size: 0.95rem;
  outline: none;
  background: #ffffff;

  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
  }

  &:disabled {
    background: #f3f4f6;
    color: #9ca3af;
  }
`;

export const SendButton = styled.button`
  min-width: 140px;
  border: none;
  border-radius: 10px;
  background: #10b981;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
  padding: 0 16px;

  &:hover:not(:disabled) {
    background: #059669;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 720px) {
    width: 100%;
    min-height: 44px;
  }
`;

export const StreamingIndicator = styled.div`
  margin-top: 8px;
  color: #6b7280;
  font-size: 0.85rem;
`;
