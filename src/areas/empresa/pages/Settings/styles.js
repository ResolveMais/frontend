import styled from "styled-components";

export const Page = styled.div`
    min-height: 100vh;
    background: radial-gradient(900px 420px at 8% 2%, #dff7ec 0%, transparent 60%), linear-gradient(160deg, #f5fbf8 0%, #eef5f2 100%);
    padding-top: 90px;
`;

export const Container = styled.main`
    width: min(920px, 95%);
    margin: 0 auto;
    display: grid;
    gap: 16px;
    padding-bottom: 24px;
`;

export const Card = styled.section`
    background: #fff;
    border-radius: 14px;
    border: 1px solid rgba(15, 46, 47, .14);
    box-shadow: 0 12px 28px rgba(15, 46, 47, .08);
    padding: 18px;
`;

export const CardTitle = styled.h1`
    margin: 0;
    color: #123134;
`;

export const CardText = styled.p`
    margin: 8px 0 0;
    color: #3f5f60;
`;

export const SectionTitle = styled.h1`
    margin-top: 0;
    margin-bottom: 10px;
    color: #123134;
`;

export const Form = styled.form`
    display: grid;
    gap: 12px;
`;

export const ButtonsGroup = styled.div`
    display: flex;
    justify-content: flex-end;
`;