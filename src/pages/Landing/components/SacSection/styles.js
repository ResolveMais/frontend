import styled from 'styled-components';

export const SacSection = styled.section`
  padding: 100px 5%;
  background: #f8f9fa;
`;

export const SacContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  gap: 60px;
  
  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
`;

export const SacImage = styled.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: center;
  
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 12px;
  }
  
  @media (max-width: 968px) {
    flex: 0 0 100%;
    max-width: 100%;
    
    img {
      max-width: 300px;
    }
  }
`;

export const SacTextContent = styled.div`
  flex: 0 0 50%;
  max-width: 500px;
  
  @media (max-width: 968px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export const SacTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-align: left;
  
  @media (max-width: 968px) {
    text-align: center;
    font-size: 2rem;
  }
`;

export const SacSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
  text-align: left;
  
  @media (max-width: 968px) {
    text-align: center;
  }
`;

export const SacList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SacItem = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  
  @media (max-width: 968px) {
    justify-content: center;
    text-align: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const SacIcon = styled.span`
  font-size: 1.5rem;
  color: #00C853;
  margin-right: 15px;
  font-weight: bold;
  min-width: 24px;
  
  @media (max-width: 480px) {
    margin-right: 0;
    margin-bottom: 8px;
  }
`;

export const SacText = styled.span`
  font-size: 1.1rem;
  color: #333;
  font-weight: 500;
`;