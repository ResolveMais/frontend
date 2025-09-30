import styled from 'styled-components';

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 5%;
  padding-bottom: 80px;
  max-width: 1600px;
  margin-top: 5px;
  margin-left: 30px;
  margin-right: 30px;
  gap: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 5%;
    gap: 40px;
  }
`;

export const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
`;

export const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1.2;
  color: #333;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Highlight = styled.span`
  color: #00C853;
  display: block;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 300px;
  
  @media (max-width: 768px) {
    align-items: center;
    max-width: 100%;
  }
`;

export const HeroImage = styled.div`
  flex: 1.2; /* Aumentado de 1 para 1.2 */
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    max-width: 600px; /* Aumentado o tamanho máximo */
    height: auto;
    
    &:hover {
      transform: perspective(1000px) rotateY(0deg);
    }
  }
  
  @media (max-width: 1024px) {
    flex: 1;
    
    img {
      max-width: 500px;
      transform: none;
      
      &:hover {
        transform: none;
      }
    }
  }
  
  @media (max-width: 768px) {
    margin-top: 40px;
    
    img {
      max-width: 100%;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
  }
`;

