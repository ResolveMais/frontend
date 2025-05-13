import { createGlobalStyle, styled } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html, * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Arial', sans-serif;
    }
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
`;

export const Left = styled.div`
    flex: 7;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
    gap: 22px;
`;

export const Right = styled.div`
    flex: 6;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;

    @media (max-width: 698px) {
        display: none;
    }
`;

export const FormTitle = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.text.success};
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 400px;
`;