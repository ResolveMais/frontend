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
  gap: 20px;
  padding-bottom: 32px;
`;

export const HeroSection = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.9fr);
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.article`
  display: grid;
  gap: 14px;
  padding: 28px;
  border-radius: 22px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(241, 251, 246, 0.98) 100%);
  box-shadow: 0 16px 34px rgba(15, 46, 47, 0.08);
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
  max-width: 620px;
  color: #123134;
  font-size: clamp(1.9rem, 3vw, 2.65rem);
  line-height: 1.12;
`;

export const Description = styled.p`
  margin: 0;
  max-width: 640px;
  color: #456263;
  font-size: 1rem;
  line-height: 1.65;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding-top: 6px;
`;

export const HighlightCard = styled.aside`
  display: grid;
  gap: 14px;
  padding: 24px;
  border-radius: 22px;
  background: linear-gradient(180deg, #123134 0%, #1d474a 100%);
  color: #f5fffb;
  box-shadow: 0 18px 34px rgba(18, 49, 52, 0.18);
`;

export const HighlightLabel = styled.span`
  color: rgba(230, 255, 243, 0.78);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const HighlightTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  line-height: 1.2;
`;

export const HighlightText = styled.p`
  margin: 0;
  color: rgba(239, 251, 245, 0.84);
  line-height: 1.6;
`;

export const StepList = styled.div`
  display: grid;
  gap: 12px;
`;

export const StepItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
`;

export const StepNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
`;

export const StepText = styled.p`
  margin: 0;
  color: rgba(239, 251, 245, 0.9);
  line-height: 1.55;
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
`;

export const ActionCard = styled.article`
  display: grid;
  gap: 12px;
  padding: 20px;
  border-radius: 18px;
  border: 1px solid rgba(15, 46, 47, 0.12);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 14px 28px rgba(15, 46, 47, 0.06);
`;

export const CardLabel = styled.span`
  color: #0d6b3c;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const CardHeading = styled.h3`
  margin: 0;
  color: #123134;
  font-size: 1.18rem;
  line-height: 1.3;
`;

export const CardText = styled.p`
  margin: 0;
  color: #4d6a6b;
  line-height: 1.6;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;
  padding-top: 4px;
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
