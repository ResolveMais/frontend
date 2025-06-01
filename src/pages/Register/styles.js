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

export const LogoContainer = styled.a`
    width: 40px;
    height: auto;
    position: absolute;
    top: 35px;
    left: 35px;
    z-index: 10;
    cursor: pointer;
`;

export const Logo = styled.img`
    width: 100%;
    height: auto;
    max-width: 180px;
`;

export const Left = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 836px) {
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

export const Right = styled.div`
    flex: 7;
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
`;

export const Image = styled.img`
    width: 100%;
    max-width: 400px;
`;

export const Text = styled.h1`
    font-size: 24px;
    color: ${({ theme }) => theme.text.success};
`;

export const SubText = styled.p`
    font-size: 16px;
    color: ${({ theme }) => theme.text.success};
`;

