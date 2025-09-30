import styled from 'styled-components';

export const FAQsSection = styled.section`
  padding: 100px 5%;
  background: #f8f9fa;
  text-align: center;
`;

export const FAQsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FAQsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-style: italic;
`;

export const Divider = styled.div`
  height: 2px;
  background: #e0e0e0;
  margin: 40px auto;
  max-width: 200px;
`;

export const FAQsList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 60px;
`;

export const FAQItem = styled.div`
  margin-bottom: 16px;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FAQQuestion = styled.div`
  padding: 20px;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${props => props.$isActive ? '#00C853' : '#333'};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00C853;
    background: #f0f9f0;
  }
`;

export const FAQAnswer = styled.div`
  padding: ${props => props.$isActive ? '20px' : '0 20px'};
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  background: #fafafa;
  max-height: ${props => props.$isActive ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  border-top: ${props => props.$isActive ? '1px solid #e0e0e0' : 'none'};
`;

export const ArrowIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.$isActive ? '#00C853' : '#666'};
  transition: all 0.3s ease;
`;

// NOVOS ESTILOS PARA A FAIXA FINAL
export const FinalBanner = styled.section`
  background: #00C853;
  padding: 120px 0;
  width: 100vw;
  margin: 60px 0 0 0;
  margin-top: 100px;
  margin-bottom: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;

export const FinalStatement = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.4;
  margin: 0;
  text-align: center;
  max-width: 1200px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;