import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  text-align: center;
  background: #fff;
  padding: 10px 100px;
  font-family: 'Poppins', sans-serif;

  h1 {
    font-size: 24px;
    font-weight: 600;
    color: #1e1e1e;
    margin-bottom: 45px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0px 2px 6px rgba(0,0,0,0.05);
    margin-bottom: 50px;
  }

  @media (max-width: 900px) {
    padding: 40px 20px;

    h1 {
      font-size: 20px;
    }
  }
`;
