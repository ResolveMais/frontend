import styled from 'styled-components';
import walkImage from '../../../../../../assets/images/walk.svg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${walkImage}) center bottom / cover no-repeat;
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #000;
  position: relative;
  padding-top: 120px; 

  @media (max-width: 900px) {
    height: 90vh;
    padding: 80px 20px 0;
  }
`;

export const Content = styled.div`
  max-width: 800px;

  h1 {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }
  }
`;


