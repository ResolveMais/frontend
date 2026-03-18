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
  background: linear-gradient(180deg, #f7faf9 0%, #f2f7f5 100%);
  padding-top: 70px;
`;

export const Content = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding: 28px 20px 32px;
`;

export const HeaderCard = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #d9ece3;
  border-radius: 14px;
  padding: 20px;
  margin-bottom: 18px;
`;

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #0f5132;
  font-size: 1.35rem;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #4b6357;
  font-size: 0.95rem;
`;

export const ClearButton = styled.button`
  border: 1px solid #b6d9c9;
  background: #f5fbf8;
  color: #0f5132;
  font-weight: 600;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover:not(:disabled) {
    background: #e7f5ee;
    border-color: #92c8af;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

export const ChatCard = styled.section`
  background: #ffffff;
  border: 1px solid #d9ece3;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 14px 28px rgba(19, 64, 46, 0.06);
`;

export const MessagesArea = styled.div`
  min-height: 420px;
  max-height: 58vh;
  overflow-y: auto;
  padding: 18px;
  background: #fbfefc;
`;

export const EmptyState = styled.div`
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #5f776a;
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
  max-width: min(78%, 700px);
  border-radius: 12px;
  padding: 11px 13px;
  line-height: 1.45;
  white-space: pre-wrap;
  word-break: break-word;
  background: ${(props) => (props.$role === "user" ? "#10b981" : "#edf6f1")};
  color: ${(props) => (props.$role === "user" ? "#ffffff" : "#173d2c")};
  border: 1px solid ${(props) => (props.$role === "user" ? "#0d9f70" : "#d8eade")};
`;

export const Composer = styled.form`
  display: flex;
  gap: 10px;
  padding: 14px;
  border-top: 1px solid #d9ece3;
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
  border: 1px solid #c9e3d6;
  border-radius: 10px;
  padding: 12px;
  font-size: 0.95rem;
  outline: none;

  &:focus {
    border-color: #10b981;
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.12);
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
    background: #0f9f71;
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
  color: #3f6654;
  font-size: 0.85rem;
`;
