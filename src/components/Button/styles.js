import { styled, css } from 'styled-components'

// apply directly styles for each variant
const getVariant = (theme, variant) => {
    switch (variant) {
        case "primary":
            return css`
                background-color: ${theme.button.primary.background};
                color: ${theme.button.primary.text};
                border: 1px solid ${theme.button.primary.border};

                &:hover {
                    background-color: ${theme.button.primary.hover.background};
                    color: ${theme.button.primary.hover.text};
                    border: 1px solid ${theme.button.primary.hover.border};
                }
            `;
        case "secondary":
            return css`
                background-color: ${theme.button.secondary.background};
                color: ${theme.button.secondary.text};
                border: 1px solid ${theme.button.secondary.border};

                &:hover {
                    background-color: ${theme.button.secondary.hover.background};
                    color: ${theme.button.secondary.hover.text};
                    border: 1px solid ${theme.button.secondary.hover.border};
                }
            `;
        case "transparent":
            return css`
                background-color: ${theme.button.transparent.background};
                color: ${theme.button.transparent.text};
                border: 1px solid ${theme.button.transparent.border};

                &:hover {
                    background-color: ${theme.button.transparent.hover.background};
                    color: ${theme.button.transparent.hover.text};
                    border: 1px solid ${theme.button.transparent.hover.border};
                }
            `;
    }
};

export const Button = styled.button` 
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    transition: all 0.3s;
    ${({ variant, theme }) => getVariant(theme, variant || "primary")}
`