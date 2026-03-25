import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --reset-bg: #f3fbf8;
    --reset-ink: #173839;
    --reset-soft: #426566;
    --reset-border: rgba(18, 50, 51, 0.12);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background:
    radial-gradient(900px 420px at 10% 6%, #d8f4e8 0%, transparent 60%),
    radial-gradient(900px 540px at 100% 0%, #dceeff 0%, transparent 62%),
    linear-gradient(145deg, #f4fbf8 0%, #edf6f3 100%);
`;

export const LogoContainer = styled.a`
  width: 44px;
  position: fixed;
  top: 20px;
  left: 20px;
`;

export const Logo = styled.img`
  width: 100%;
  filter: drop-shadow(0 8px 18px rgba(16, 54, 55, 0.2));
`;

export const Card = styled.div`
  width: min(520px, 100%);
  padding: 28px;
  border-radius: 18px;
  border: 1px solid var(--reset-border);
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 18px 45px rgba(15, 46, 47, 0.16);
  display: grid;
  gap: 14px;
`;

export const Title = styled.h1`
  font-size: clamp(24px, 4vw, 30px);
  color: var(--reset-ink);
`;

export const Subtitle = styled.p`
  color: var(--reset-soft);
  line-height: 1.5;
  font-size: 14px;
`;

export const Form = styled.form`
  display: grid;
  gap: 14px;
`;

export const Feedback = styled.p`
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1.4;
  color: ${({ $success }) => ($success ? "#205245" : "#7f2323")};
  background: ${({ $success }) => ($success ? "#eef8f4" : "#fff4f4")};
  border: 1px solid ${({ $success }) => ($success ? "rgba(19, 133, 93, 0.2)" : "rgba(166, 45, 45, 0.2)")};
`;

export const FooterActions = styled.div`
  margin-top: 2px;
`;

