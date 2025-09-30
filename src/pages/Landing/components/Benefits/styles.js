import styled from 'styled-components';

export const BenefitsSection = styled.section`
  padding: 100px 5%;
  background: #f8f9fa;
  text-align: center;
`;

export const BenefitsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const BenefitCard = styled.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const BenefitIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BenefitName = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
`;

export const BenefitDescription = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
`;