import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(920px 420px at 8% 4%, #dff7ec 0%, transparent 58%),
    linear-gradient(165deg, #f5fbf8 0%, #eef5f2 100%);
  padding-top: 90px;
`;

export const Container = styled.main`
  width: min(760px, 94%);
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

  span {
    color: #0d6b3c;
  }
`;

export const WelcomeSubtitle = styled.p`
  margin: 0;
  max-width: 600px;
  color: #456263;
  font-size: 1rem;
  line-height: 1.65;
`;

export const ActionsGrid = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  padding-top: 6px;
  justify-content: center;
`;

export const ActionCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 24px 28px;
  min-width: 190px;
  border-radius: 18px;
  border: 1px solid rgba(13, 107, 60, 0.18);
  background: linear-gradient(145deg, #18bf6f 0%, #0d9e5a 100%);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(13, 107, 60, 0.28);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 32px rgba(13, 107, 60, 0.36);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const ActionIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.92;

  svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
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

export const UpdatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const UpdateCard = styled.div`
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 14px 28px rgba(15, 46, 47, 0.06);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 34px rgba(15, 46, 47, 0.1);
  }
`;

export const UpdateTitle = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 0.98rem;
  color: #123134;
  line-height: 1.3;
`;

export const UpdateDot = styled.span`
  display: inline-block;
  flex-shrink: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #77f2af 0%, #18bf6f 55%, #0d6b3c 100%);
  box-shadow: 0 0 0 3px rgba(13, 107, 60, 0.12);
`;

export const UpdateDescription = styled.p`
  margin: 0 0 0 20px;
  font-size: 0.9rem;
  color: #4d6a6b;
  line-height: 1.6;
`;

export const UpdateTime = styled.p`
  margin: 0 0 0 20px;
  font-size: 0.8rem;
  color: #7a9a9b;
  font-weight: 500;
`;

export const EmptyState = styled.p`
  margin: 0;
  color: #7a9a9b;
  font-size: 0.95rem;
`;

export const Main = styled.main``;