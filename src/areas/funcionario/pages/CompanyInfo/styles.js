import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(920px 420px at 8% 4%, #dff7ec 0%, transparent 58%),
    linear-gradient(165deg, #f5fbf8 0%, #eef5f2 100%);
  padding-top: 90px;
`;

export const Container = styled.main`
  width: min(860px, 94%);
  margin: 0 auto;
  display: grid;
  gap: 24px;
  padding-bottom: 40px;
`;

export const HeroSection = styled.section`
  display: grid;
  gap: 14px;
  padding: 32px;
  border-radius: 22px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 251, 246, 0.98) 100%);
  box-shadow: 0 16px 34px rgba(15, 46, 47, 0.08);
  text-align: center;
  justify-items: center;
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(13, 107, 60, 0.14);
  background: linear-gradient(135deg, rgba(226, 250, 236, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
  color: #0d6b3c;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.7), 0 10px 24px rgba(13, 107, 60, 0.08);
  backdrop-filter: blur(10px);
`;

export const EyebrowDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: radial-gradient(circle at 30% 30%, #77f2af 0%, #18bf6f 55%, #0d6b3c 100%);
  box-shadow: 0 0 0 4px rgba(13, 107, 60, 0.12);
`;

export const WelcomeTitle = styled.h1`
  margin: 0;
  color: #123134;
  font-size: clamp(1.9rem, 3vw, 2.65rem);
  line-height: 1.12;
`;

export const WelcomeSubtitle = styled.p`
  margin: 0;
  max-width: 520px;
  color: #456263;
  font-size: 1rem;
  line-height: 1.65;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #123134;
  font-size: 1.35rem;
`;

export const SectionText = styled.p`
  margin: 8px 0 0;
  color: #537071;
  line-height: 1.55;
`;

export const TitleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
`;

export const TitleCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 10px 24px rgba(15, 46, 47, 0.06);
`;

export const TitleLabel = styled.span`
  color: #0d6b3c;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const TitleHeading = styled.h3`
  margin: 0;
  color: #123134;
  font-size: 1.1rem;
  line-height: 1.3;
`;

export const TitleText = styled.p`
  margin: 0;
  color: #4d6a6b;
  font-size: 0.9rem;
  line-height: 1.6;
`;

export const EmptyState = styled.p`
  margin: 0;
  color: #7a9a9b;
  font-size: 0.95rem;
`;