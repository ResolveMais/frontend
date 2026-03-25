import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --forgot-bg: #f3fbf8;
    --forgot-ink: #173839;
    --forgot-soft: #426566;
    --forgot-accent: #13855d;
    --forgot-border: rgba(18, 50, 51, 0.12);
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
    radial-gradient(900px 420px at 8% 6%, #def7ea 0%, transparent 60%),
    radial-gradient(900px 520px at 100% 0%, #d9edff 0%, transparent 62%),
    linear-gradient(145deg, #f6fcf9 0%, #eff7f4 100%);
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
  border: 1px solid var(--forgot-border);
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 18px 45px rgba(15, 46, 47, 0.16);
  display: grid;
  gap: 14px;
`;

export const Title = styled.h1`
  font-size: clamp(24px, 4vw, 30px);
  color: var(--forgot-ink);
`;

export const Subtitle = styled.p`
  color: var(--forgot-soft);
  line-height: 1.5;
  font-size: 14px;
`;

export const Form = styled.form`
  display: grid;
  gap: 14px;
`;

export const Feedback = styled.p`
  background: #eef8f4;
  border: 1px solid rgba(19, 133, 93, 0.2);
  color: #21544a;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 13px;
  line-height: 1.4;
`;

export const FooterActions = styled.div`
  margin-top: 2px;
`;

export const TimerText = styled.p`
  font-size: 12px;
  color: #426566;
  text-align: center;
`;
