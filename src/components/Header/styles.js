import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 28px;
  background-color: ${({ theme }) => theme.background.default};
  border-bottom: 1px solid ${({ theme }) => theme.border.default};
`;

export const Logo = styled.img`
    width: 30px;
    height: auto;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const ButtonsContainer = styled.div` 
    display: flex;
    gap: 16px;
`;
