import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: stretch; /* garante que as duas colunas tenham a mesma altura */
  padding: 0; /* remove o recuo lateral */
  background: #fff;
  font-family: "Poppins", sans-serif;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  background: #F2F2F2;
  padding: 60px 80px;
  border-radius: 0 0 250px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    border-radius: 0;
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: #222;
  line-height: 1.3;
  margin-bottom: 30px;
`;

export const Highlight = styled.span`
  color: #00b279;
`;

export const HighlightGreen = styled.span`
  color: #38d46a;
`;

export const Text = styled.p`
  color: #555;
  font-size: 1.5rem;
  margin-bottom: 50px;
  padding: 10px;
  padding-left: 0px;
  
  line-height: 1.6;
`;

export const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 150px;

  strong {
    font-size: 1.8rem;
    color: #111;
  }

  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 60px 80px;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 40px 20px;
  }
`;

export const Step = styled.div`
  display: flex;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  p {
    font-size: 0.95rem;
    color: #333;
    line-height: 1.5;
  }
`;

export const Icon = styled.div`
  margin-right: 16px;
  flex-shrink: 0;
`;
