import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

export const MainContainer = styled.div`
    padding: 2rem;
    margin-top: 70px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

export const HeaderDate = styled.h6`
    font-size: 12px;
    color: #6b7280;
`;

export const HeaderTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
`;

export const Form = styled.form`
    max-width: 900px;
    border-radius: 8px;
    box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.4);
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;