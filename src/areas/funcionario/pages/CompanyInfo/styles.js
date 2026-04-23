import styled, { css } from "styled-components";

const getToneColors = (tone) => {
  switch (tone) {
    case "high":
      return {
        color: "#0d6b3c",
        background: "rgba(13, 107, 60, 0.12)",
      };
    case "medium":
      return {
        color: "#b45309",
        background: "rgba(180, 83, 9, 0.14)",
      };
    case "low":
      return {
        color: "#b42318",
        background: "rgba(180, 35, 24, 0.12)",
      };
    default:
      return {
        color: "#456263",
        background: "rgba(69, 98, 99, 0.1)",
      };
  }
};

const trustBadgeTone = (tone) => {
  const palette = getToneColors(tone);

  return css`
    color: ${palette.color};
    background: ${palette.background};
  `;
};

export const Page = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(920px 420px at 8% 4%, #dff7ec 0%, transparent 58%),
    linear-gradient(165deg, #f5fbf8 0%, #eef5f2 100%);
  padding-top: 90px;
`;

export const Container = styled.main`
  width: min(1080px, 94%);
  margin: 0 auto;
  display: grid;
  gap: 24px;
  padding-bottom: 40px;
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: 18px;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCard = styled.section`
  display: grid;
  gap: 16px;
  padding: 32px;
  border-radius: 22px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(241, 251, 246, 0.98) 100%
  );
  box-shadow: 0 16px 34px rgba(15, 46, 47, 0.08);
`;

export const TrustCard = styled.aside`
  display: grid;
  align-content: start;
  gap: 14px;
  padding: 28px 24px;
  border-radius: 22px;
  background: linear-gradient(180deg, #123134 0%, #1c4b4d 100%);
  color: #effcf7;
  box-shadow: 0 18px 36px rgba(18, 49, 52, 0.18);
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 999px;
  border: 1px solid rgba(13, 107, 60, 0.14);
  background: linear-gradient(
    135deg,
    rgba(226, 250, 236, 0.95) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );
  color: #0d6b3c;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.7),
    0 10px 24px rgba(13, 107, 60, 0.08);
  backdrop-filter: blur(10px);
`;

export const EyebrowDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  background: radial-gradient(
    circle at 30% 30%,
    #77f2af 0%,
    #18bf6f 55%,
    #0d6b3c 100%
  );
  box-shadow: 0 0 0 4px rgba(13, 107, 60, 0.12);
`;

export const WelcomeTitle = styled.h1`
  margin: 0;
  color: #123134;
  font-size: clamp(2rem, 3vw, 2.8rem);
  line-height: 1.08;
`;

export const WelcomeSubtitle = styled.p`
  margin: 0;
  max-width: 720px;
  color: #456263;
  font-size: 1rem;
  line-height: 1.7;
`;

export const HeroMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const MetaPill = styled.div`
  display: grid;
  gap: 4px;
  min-width: 170px;
  padding: 14px 16px;
  border-radius: 18px;
  background: rgba(18, 49, 52, 0.05);

  strong {
    color: #123134;
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  span {
    color: #476365;
    font-size: 0.95rem;
    line-height: 1.45;
  }
`;

export const TrustLabel = styled.span`
  color: rgba(239, 252, 247, 0.72);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const TrustValue = styled.strong`
  color: #ffffff;
  font-size: clamp(2.2rem, 4vw, 3rem);
  line-height: 1;
`;

export const TrustStars = styled.p`
  margin: 0;
  color: rgba(239, 252, 247, 0.88);
  line-height: 1.5;
`;

export const TrustBadge = styled.span`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 700;
  ${({ $tone }) => trustBadgeTone($tone)}
`;

export const TrustCaption = styled.p`
  margin: 0;
  color: rgba(239, 252, 247, 0.74);
  line-height: 1.6;
`;

export const InfoGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
`;

export const InfoCard = styled.article`
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(15, 46, 47, 0.1);
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 12px 26px rgba(15, 46, 47, 0.06);
`;

export const InfoLabel = styled.span`
  color: #0d6b3c;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const InfoValue = styled.strong`
  color: #123134;
  font-size: 1.08rem;
  line-height: 1.35;
`;

export const InfoHelper = styled.p`
  margin: 0;
  color: #5d787a;
  font-size: 0.9rem;
  line-height: 1.55;
`;

export const MetricsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
`;

export const MetricCard = styled.article`
  display: grid;
  gap: 10px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(15, 46, 47, 0.1);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 12px 26px rgba(15, 46, 47, 0.06);
`;

export const MetricValue = styled.strong`
  color: #123134;
  font-size: clamp(1.9rem, 3vw, 2.4rem);
  line-height: 1;
`;

export const MetricTitle = styled.h3`
  margin: 0;
  color: #123134;
  font-size: 1rem;
`;

export const MetricDescription = styled.p`
  margin: 0;
  color: #5b7678;
  line-height: 1.55;
  font-size: 0.92rem;
`;

export const SectionCard = styled.section`
  display: grid;
  gap: 18px;
  padding: 22px;
  border-radius: 22px;
  border: 1px solid rgba(15, 46, 47, 0.1);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 16px 32px rgba(15, 46, 47, 0.06);
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

export const TitleCard = styled.article`
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(15, 46, 47, 0.1);
  background: rgba(18, 49, 52, 0.035);
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
  font-size: 1.08rem;
  line-height: 1.35;
`;

export const TitleText = styled.p`
  margin: 0;
  color: #4d6a6b;
  font-size: 0.92rem;
  line-height: 1.6;
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`;

export const HighlightCard = styled.article`
  display: grid;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(18, 49, 52, 0.035);
`;

export const HighlightTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const HighlightRating = styled.span`
  color: #0d6b3c;
  font-size: 0.92rem;
  font-weight: 700;
`;

export const HighlightDate = styled.span`
  color: #70898b;
  font-size: 0.82rem;
  font-weight: 600;
`;

export const HighlightSubject = styled.h3`
  margin: 0;
  color: #123134;
  font-size: 1rem;
  line-height: 1.4;
`;

export const HighlightComment = styled.p`
  margin: 0;
  color: #4b6769;
  font-size: 0.92rem;
  line-height: 1.65;
`;

export const HighlightMeta = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  color: #688385;
  font-size: 0.82rem;
  font-weight: 600;
`;

export const EmptyState = styled.p`
  margin: 0;
  color: #7a9a9b;
  font-size: 0.95rem;
  line-height: 1.6;
`;
