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
  padding: 14px 20px;
  border-radius: 8px;
  color: white;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  z-index: 9999;

  background: ${({ type }) => type === "success" ? "#4caf50" : type === "error" ? "#f44336" : "#2196f3"};

  animation: ${({ closing }) => closing ? css`${fadeOutDown} 0.3s forwards` : css`${fadeInUp} 0.3s forwards`};
`;