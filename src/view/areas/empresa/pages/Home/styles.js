import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(920px 420px at 8% 4%, #dff7ec 0%, transparent 58%),
    linear-gradient(165deg, #f5fbf8 0%, #eef5f2 100%);
  padding-top: 90px;
`;

export const Container = styled.main`
  width: min(1100px, 94%);
  margin: 0 auto;
  display: grid;
  gap: 24px;
  padding-bottom: 40px;
`;

export const HeroSection = styled.section`
  display: grid;
`;

export const HeroContent = styled.article`
  display: grid;
  gap: 18px;
  width: 100%;
  justify-items: center;
  padding: 32px;
  border-radius: 22px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 251, 246, 0.98) 100%);
  box-shadow: 0 16px 34px rgba(15, 46, 47, 0.08);
  text-align: center;
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

export const Title = styled.h1`
  margin: 0;
  max-width: 22ch;
  color: #123134;
  font-size: clamp(1.9rem, 3vw, 2.65rem);
  line-height: 1.12;
  text-wrap: balance;
`;

export const Description = styled.p`
  margin: 0;
  max-width: 520px;
  color: #456263;
  font-size: 1rem;
  line-height: 1.65;
  text-align: center;
`;

export const Actions = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  padding-top: 6px;
  justify-content: center;
`;

export const HeroActionCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-width: 190px;
  padding: 22px 28px;
  border-radius: 18px;
  border: 1px solid
    ${({ $secondary }) =>
      $secondary ? "rgba(15, 46, 47, 0.14)" : "rgba(13, 107, 60, 0.18)"};
  background: ${({ $secondary }) =>
    $secondary
      ? "linear-gradient(145deg, #1d474a 0%, #123134 100%)"
      : "linear-gradient(145deg, #18bf6f 0%, #0d9e5a 100%)"};
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  box-shadow: ${({ $secondary }) =>
    $secondary
      ? "0 8px 24px rgba(18, 49, 52, 0.22)"
      : "0 8px 24px rgba(13, 107, 60, 0.28)"};
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ $secondary }) =>
      $secondary
        ? "0 14px 32px rgba(18, 49, 52, 0.32)"
        : "0 14px 32px rgba(13, 107, 60, 0.36)"};
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const HeroActionIcon = styled.div`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.92;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;

export const MetricsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const MetricCard = styled.article`
  display: grid;
  gap: 8px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: ${({ $tone }) =>
    $tone === "warning"
      ? "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(255,248,235,0.98) 100%)"
      : "rgba(255, 255, 255, 0.96)"};
  box-shadow: 0 10px 24px rgba(15, 46, 47, 0.06);
  text-align: center;
`;

export const MetricValue = styled.strong`
  color: ${({ $tone }) => {
    if ($tone === "success") return "#0d6b3c";
    if ($tone === "warning") return "#b45309";
    return "#123134";
  }};
  font-size: clamp(2.1rem, 3vw, 2.6rem);
  line-height: 1;
`;

export const MetricLabel = styled.span`
  color: #6f8d8f;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: end;
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

export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ActionCard = styled.article`
  display: grid;
  gap: 16px;
  min-height: 240px;
  padding: 22px;
  border-radius: 22px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: ${({ $featured }) =>
    $featured
      ? "linear-gradient(140deg, rgba(231, 251, 240, 0.98) 0%, rgba(255, 255, 255, 0.98) 62%)"
      : "rgba(255, 255, 255, 0.96)"};
  box-shadow: ${({ $featured }) =>
    $featured
      ? "0 18px 36px rgba(13, 107, 60, 0.12)"
      : "0 14px 28px rgba(15, 46, 47, 0.06)"};
  position: relative;
  overflow: hidden;
  transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;

  ${({ $featured }) =>
    $featured
      ? `
        grid-column: span 2;
      `
      : ""}

  &::before {
    content: "";
    position: absolute;
    top: -52px;
    right: -40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: ${({ $featured }) =>
      $featured
        ? "radial-gradient(circle, rgba(24, 191, 111, 0.18) 0%, rgba(24, 191, 111, 0) 72%)"
        : "radial-gradient(circle, rgba(18, 49, 52, 0.07) 0%, rgba(18, 49, 52, 0) 72%)"};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(13, 107, 60, 0.18);
    box-shadow: ${({ $featured }) =>
      $featured
        ? "0 22px 42px rgba(13, 107, 60, 0.16)"
        : "0 18px 34px rgba(15, 46, 47, 0.1)"};
  }

  @media (max-width: 980px) {
    ${({ $featured }) =>
      $featured
        ? `
          grid-column: span 2;
        `
        : ""}
  }

  @media (max-width: 700px) {
    min-height: auto;
    grid-column: span 1;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  position: relative;
  z-index: 1;
`;

export const CardLabel = styled.span`
  display: inline-flex;
  width: fit-content;
  color: #0d6b3c;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const CardMeta = styled.p`
  margin: 8px 0 0;
  color: #5b7779;
  font-size: 0.86rem;
  font-weight: 600;
`;

export const CardBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 42px;
  padding: 0 12px;
  border-radius: 999px;
  background: ${({ $featured }) =>
    $featured ? "rgba(13, 107, 60, 0.12)" : "rgba(18, 49, 52, 0.08)"};
  color: ${({ $featured }) => ($featured ? "#0d6b3c" : "#36575b")};
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
`;

export const CardBody = styled.div`
  display: grid;
  align-content: start;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

export const CardHeading = styled.h3`
  margin: 0;
  color: #123134;
  font-size: clamp(1.16rem, 1.8vw, 1.38rem);
  line-height: 1.28;
  max-width: 22ch;
`;

export const CardText = styled.p`
  margin: 0;
  color: #4d6a6b;
  line-height: 1.6;
  max-width: 34ch;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  margin-top: auto;
  padding-top: 2px;
  position: relative;
  z-index: 1;
`;

export const SupportCard = styled.section`
  display: grid;
  gap: 14px;
  padding: 22px;
  border-radius: 18px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: rgba(255, 255, 255, 0.92);
`;

export const SupportList = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #4d6a6b;
  display: grid;
  gap: 10px;
  line-height: 1.6;
`;

export const SupportItem = styled.li`
  padding-left: 4px;
`;
