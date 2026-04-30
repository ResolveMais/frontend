import styled, { css } from "styled-components";

const cardSurface = css`
  border: 1px solid rgba(15, 46, 47, 0.12);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 14px 28px rgba(15, 46, 47, 0.06);
`;

const actionBase = css`
  min-height: 36px;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  width: fit-content;
  max-width: 100%;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease,
    transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-1px);
  }
`;

export const Page = styled.div`
  min-height: 100vh;
  padding-top: 90px;
  background: linear-gradient(165deg, #f5fbf8 0%, #eef5f2 100%);
  color: #123134;
`;

export const PrimaryAction = styled.button`
  ${actionBase}
  border: 1px solid #00c853;
  background: #00c853;
  color: #ffffff;
  box-shadow: 0 8px 18px rgba(0, 200, 83, 0.2);

  &:hover {
    border-color: #00b853;
    background: #00b853;
    box-shadow: 0 12px 24px rgba(0, 200, 83, 0.26);
  }
`;

export const SecondaryAction = styled.button`
  ${actionBase}
  border: 1px solid #00c853;
  background: #ffffff;
  color: #00a846;

  &:hover {
    background: #ecfff4;
    border-color: #00b853;
    color: #008f3d;
  }
`;

export const Content = styled.main`
  width: min(1180px, 94%);
  margin: 0 auto;
  display: grid;
  gap: 24px;
  padding-bottom: 48px;
`;

export const EmptyCard = styled.div`
  ${cardSurface}
  padding: 24px;
  color: #4d6a6b;
  font-size: 1rem;
  text-align: center;
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.45fr) minmax(300px, 0.85fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroCard = styled.div`
  ${cardSurface}
  display: grid;
  gap: 14px;
  padding: 32px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 251, 246, 0.98) 100%);

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

export const Kicker = styled.p`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin: 0;
  padding: 8px 14px;
  border: 1px solid rgba(13, 107, 60, 0.14);
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(226, 250, 236, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
  color: #0d6b3c;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const CompanyName = styled.h1`
  margin: 0;
  color: #123134;
  font-size: clamp(2rem, 4vw, 3.1rem);
  line-height: 1.1;
  overflow-wrap: anywhere;
`;

export const CompanyDescription = styled.p`
  max-width: 66ch;
  margin: 0;
  color: #456263;
  font-size: 1rem;
  line-height: 1.65;
`;

export const CompanyMeta = styled.p`
  width: fit-content;
  margin: 0;
  padding: 8px 12px;
  border-radius: 8px;
  background: #eef8f2;
  color: #0d6b3c;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const TrustCard = styled.aside`
  ${cardSurface}
  display: grid;
  align-content: center;
  gap: 10px;
  padding: 28px;
`;

export const TrustLabel = styled.p`
  margin: 0;
  color: #537071;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

export const TrustValue = styled.p`
  margin: 0;
  color: #123134;
  font-size: 4rem;
  font-weight: 800;
  line-height: 1;
`;

export const StarsText = styled.p`
  margin: 0;
  color: #d97706;
  font-size: 1rem;
  font-weight: 700;
`;

const trustToneStyles = {
  success: css`
    background: #e7f8ef;
    color: #0d6b3c;
  `,
  warning: css`
    background: #fff7df;
    color: #946200;
  `,
  danger: css`
    background: #fff0f0;
    color: #b42318;
  `,
  neutral: css`
    background: #eef5f2;
    color: #537071;
  `,
};

export const TrustBadge = styled.span`
  width: fit-content;
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 800;
  ${({ $tone }) => trustToneStyles[$tone] || trustToneStyles.neutral}
`;

export const TrustCaption = styled.p`
  margin: 0;
  color: #537071;
  line-height: 1.55;
`;

export const MetricsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.article`
  ${cardSurface}
  display: grid;
  gap: 8px;
  padding: 20px;
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 34px rgba(15, 46, 47, 0.1);
  }
`;

export const MetricValue = styled.p`
  margin: 0;
  color: #123134;
  font-size: 2.3rem;
  font-weight: 800;
  line-height: 1;
`;

export const MetricTitle = styled.h2`
  margin: 0;
  color: #123134;
  font-size: 1rem;
`;

export const MetricDescription = styled.p`
  margin: 0;
  color: #537071;
  font-size: 0.94rem;
  line-height: 1.55;
`;

export const MainGrid = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(300px, 0.85fr);
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionCard = styled.section`
  ${cardSurface}
  display: grid;
  gap: 20px;
  padding: 24px;
`;

export const TicketCtaCard = styled(SectionCard)`
  align-self: start;
`;

export const TicketCtaHeader = styled.div`
  display: grid;
  gap: 10px;
`;

export const ReviewsSection = styled.section`
  display: grid;
  gap: 20px;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: flex-start;
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
  line-height: 1.6;
`;

export const RatingOverview = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(15, 46, 47, 0.1);

  @media (max-width: 640px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const RatingValue = styled.p`
  margin: 0;
  color: #123134;
  font-size: 2.8rem;
  font-weight: 800;
  line-height: 1;
`;

export const RatingStars = styled.p`
  margin: 0;
  color: #d97706;
  font-size: 1.02rem;
  font-weight: 700;
`;

export const DistributionList = styled.div`
  display: grid;
  gap: 12px;
`;

export const DistributionRow = styled.div`
  display: grid;
  grid-template-columns: 108px minmax(0, 1fr) 32px;
  align-items: center;
  gap: 12px;

  @media (max-width: 640px) {
    grid-template-columns: 96px minmax(0, 1fr) 28px;
  }
`;

export const DistributionLabel = styled.span`
  color: #456263;
  font-size: 0.94rem;
  font-weight: 600;
`;

export const DistributionBarTrack = styled.div`
  height: 10px;
  border-radius: 999px;
  background: #e7efeb;
  overflow: hidden;
`;

export const DistributionBarFill = styled.div`
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #18bf6f 0%, #0d9e5a 100%);
`;

export const DistributionCount = styled.span`
  color: #123134;
  font-size: 0.94rem;
  font-weight: 700;
  text-align: right;
`;

export const ActionBlock = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const EmptyInline = styled.div`
  padding: 0;
  color: #537071;
  line-height: 1.6;
`;

export const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 1080px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 220px;
  padding: 18px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  border-radius: 8px;
  background: #ffffff;
`;

export const HighlightTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const HighlightRating = styled.span`
  color: #d97706;
  font-size: 0.94rem;
  font-weight: 800;
`;

export const HighlightDate = styled.span`
  color: #7a9a9b;
  font-size: 0.84rem;
  font-weight: 600;
`;

export const HighlightSubject = styled.h3`
  margin: 0;
  color: #123134;
  font-size: 1.02rem;
  line-height: 1.4;
`;

export const HighlightComment = styled.p`
  margin: 0;
  color: #456263;
  line-height: 1.65;
  flex: 1;
`;

export const HighlightMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 14px;
  color: #7a9a9b;
  font-size: 0.84rem;
  font-weight: 600;
`;
