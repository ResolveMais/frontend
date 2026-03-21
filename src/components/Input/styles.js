import { styled } from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`

export const Label = styled.label`
    color: ${({ theme }) => theme.text.body};
    font-size: 13px;
    font-weight: 600;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px 12px;
    background: #ffffff;
    border-radius: 10px;
    outline: none;
    border: 1px solid rgba(15, 46, 47, 0.18);
    color: ${({ theme }) => theme.text.body};
    font-size: 14px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

    &:focus {
        border-color: ${({ theme }) => theme.text.primary};
        box-shadow: 0 0 0 3px rgba(26, 163, 111, 0.16);
    }

    &::placeholder {
        color: ${({ theme }) => theme.text.placeholder};
    }
    
    &:disabled {
        background: #f4f6f5;
        color: ${({ theme }) => theme.text.inactive};
    }
`

export const ErrorMessage = styled.span`
    color: ${({ theme }) => theme.text.error};
    font-size: 12px;
    margin-top: 4px;
`;
