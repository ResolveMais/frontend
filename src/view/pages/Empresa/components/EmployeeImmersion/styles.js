import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 80px 100px;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #1e1e1e;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 900px) {
    padding: 60px 20px;
  }
`;

export const Header = styled.div`
  max-width: 900px;
  margin-bottom: 60px;

  h1 {
    font-size: 42px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 20px;

    span {
      color: #00C853;
      padding-left: 60px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    padding-right: 350px;
    padding-top: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 32px;
      
      span {
        padding-left: 30px;
      }
    }

    p {
      padding-right: 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }   
`;

export const Card = styled.div`
  background: ${({ $destaque }) => ($destaque ? '#00C853' : '#f9f9f9')};
  color: ${({ $destaque }) => ($destaque ? '#fff' : '#1e1e1e')};
  padding: 25px 20px;
  border-radius: 8px;
  box-shadow: ${({ $destaque }) => ($destaque ? 'none' : '0px 1px 3px rgba(0,0,0,0.1)')};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    line-height: 1.5;
  }
`;