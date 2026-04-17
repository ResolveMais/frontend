import styled, { keyframes, css } from "styled-components";

const fadeInUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const fadeOutDown = keyframes`
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
`;

export const SnackWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;
  max-width: min(420px, calc(100vw - 32px));

  background: ${({ type }) => type === "success" ? "#4caf50" : type === "error" ? "#f44336" : "#2196f3"};

  animation: ${({ closing }) => closing ? css`${fadeOutDown} 0.3s forwards` : css`${fadeInUp} 0.3s forwards`};
`;

export const SnackMessage = styled.span`
  flex: 1;
  line-height: 1.4;
`;

export const SnackActionButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.18);
  color: inherit;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
`;
