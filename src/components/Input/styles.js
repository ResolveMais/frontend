import { styled } from "styled-components"

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const Label = styled.label`
    color: ${({ theme }) => theme.text.body};
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px 12px;
    background: none;
    border-radius: 8px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.border.active};

    &:focus {
        border-color: ${({ theme }) => theme.text.primary};
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.text.placeholder};
    }
`