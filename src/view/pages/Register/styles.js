import { createGlobalStyle, styled } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --auth-bg: #f5fbf8;
        --auth-ink: #0f2e2f;
        --auth-ink-soft: #315050;
        --auth-card: rgba(255, 255, 255, 0.92);
        --auth-border: rgba(15, 46, 47, 0.12);
        --auth-accent: #1aa36f;
        --auth-accent-dark: #0f7e5a;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, html {
        color: var(--auth-ink);
        background: var(--auth-bg);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
    }
`;

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 36px 20px;
    background: radial-gradient(1200px 600px at 10% 10%, #e9fff4 0%, transparent 60%),
        radial-gradient(900px 600px at 90% 20%, #e6f4ff 0%, transparent 55%),
        linear-gradient(135deg, #f6fcf8 0%, #f1f8f6 100%);
    position: relative;
    overflow: hidden;

    &::before,
    &::after {
        content: "";
        position: absolute;
        width: 320px;
        height: 320px;
        border-radius: 50%;
        filter: blur(0px);
        opacity: 0.2;
        z-index: 0;
    }

    &::before {
        background: #52d6a2;
        top: -120px;
        right: 10%;
    }

    &::after {
        background: #7dc9ff;
        bottom: -140px;
        left: 8%;
    }
`;

export const LogoContainer = styled.a`
    width: 44px;
    height: auto;
    position: absolute;
    top: 28px;
    left: 28px;
    z-index: 10;
    cursor: pointer;
`;

export const Logo = styled.img`
    width: 100%;
    height: auto;
    max-width: 190px;
    filter: drop-shadow(0 10px 20px rgba(15, 46, 47, 0.15));
`;

export const Content = styled.div`
    width: min(1100px, 100%);
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    background: var(--auth-card);
    border-radius: 28px;
    border: 1px solid var(--auth-border);
    box-shadow: 0 24px 60px rgba(15, 46, 47, 0.18);
    overflow: hidden;
    position: relative;
    z-index: 1;

    @media (max-width: 980px) {
        grid-template-columns: 1fr;
    }
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 48px 40px;
    gap: 16px;
    text-align: center;
    color: #f5fff9;
    background: linear-gradient(160deg, #0f3d3e 0%, #1aa36f 100%);
    position: relative;
    overflow: hidden;

    @media (max-width: 980px) {
        display: none;
    }

    &::after {
        content: "";
        position: absolute;
        width: 420px;
        height: 420px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 60%);
        top: -200px;
        right: -140px;
        opacity: 0.7;
    }
`;

export const FormTitle = styled.h1`
    font-size: clamp(28px, 3vw, 36px);
    color: var(--auth-ink);
`;

export const FormHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    max-width: 420px;
`;

export const FormSubtitle = styled.p`
    font-size: 14px;
    color: var(--auth-ink-soft);
    line-height: 1.5;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 420px;
`;

export const SectionTitle = styled.h3`
    margin-top: 4px;
    font-size: 14px;
    font-weight: 700;
    color: var(--auth-accent-dark);
`;

export const UserTypeGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const UserTypeLabel = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: var(--auth-ink);
`;

export const UserTypeButtons = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
`;

export const UserTypeOption = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(15, 46, 47, 0.2);
    border-radius: 10px;
    background: #ffffff;
    min-height: 38px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        border-color: var(--auth-accent);
    }
`;

export const UserTypeRadio = styled.input`
    position: absolute;
    opacity: 0;
    pointer-events: none;

    &:checked + span {
        color: #ffffff;
        background: linear-gradient(145deg, #1aa36f 0%, #0f7e5a 100%);
        border-color: transparent;
    }
`;

export const UserTypeText = styled.span`
    width: 100%;
    text-align: center;
    border-radius: 9px;
    border: 1px solid transparent;
    color: var(--auth-ink-soft);
    font-size: 13px;
    font-weight: 600;
    padding: 9px 8px;
    transition: all 0.2s ease;
`;

export const UserTypeError = styled.span`
    color: #d64933;
    font-size: 12px;
`;

export const Right = styled.div`
    padding: 52px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
    background: rgba(255, 255, 255, 0.95);

    @media (max-width: 720px) {
        padding: 40px 28px;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 360px;
    filter: drop-shadow(0 16px 30px rgba(15, 46, 47, 0.35));
`;

export const Text = styled.h1`
    font-size: 26px;
    color: inherit;
`;

export const SubText = styled.p`
    font-size: 15px;
    color: inherit;
    opacity: 0.9;
    line-height: 1.5;
`;

export const Actions = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    width: 100%;
    margin-top: 4px;

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;
