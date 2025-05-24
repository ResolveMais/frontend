import { styled, css } from 'styled-components'
import { Link } from 'react-router-dom';

const getVariant = (theme, variant) => {
    switch (variant) {
        case "primary":
            return css`
                background-color: ${theme.button.primary.background};
                color: ${theme.button.primary.text};
                border: 1px solid ${theme.button.primary.border};

                & > * {
                    color: ${theme.button.primary.text};
                }

                &:hover {
                    background-color: ${theme.button.primary.hover.background};
                    color: ${theme.button.primary.hover.text};
                    border: 1px solid ${theme.button.primary.hover.border};

                    & > * {
                        color: ${theme.button.primary.hover.text};
                    }
                }
            `;
        case "secondary":
            return css`
                background-color: ${theme.button.secondary.background};
                color: ${theme.button.secondary.text};
                border: 1px solid ${theme.button.secondary.border};

                & > * {
                    color: ${theme.button.secondary.text};
                }

                &:hover {
                    background-color: ${theme.button.secondary.hover.background};
                    color: ${theme.button.secondary.hover.text};
                    border: 1px solid ${theme.button.secondary.hover.border};

                    & > * {
                        color: ${theme.button.secondary.hover.text};
                    }
                }
            `;
        case "transparent":
            return css`
                background-color: ${theme.button.transparent.background};
                color: ${theme.button.transparent.text};
                border: 1px solid ${theme.button.transparent.border};

                & > * {
                    color: ${theme.button.transparent.text};
                }

                &:hover {
                    background-color: ${theme.button.transparent.hover.background};
                    color: ${theme.button.transparent.hover.text};
                    border: 1px solid ${theme.button.transparent.hover.border};
                    opacity: 0.7;

                    & > * {
                        color: ${theme.button.transparent.hover.text};
                    }
                }
            `;
        case "link":
            return css`
                background-color: ${theme.button.link.background};
                color: ${theme.button.link.text};
                border: 1px solid ${theme.button.link.border};

                & > * {
                    color: ${theme.button.link.text};
                }

                &:hover {
                    background-color: ${theme.button.link.hover.background};
                    color: ${theme.button.link.hover.text};
                    border: 1px solid ${theme.button.link.hover.border};
                    opacity: 0.7;

                    & > * {
                        color: ${theme.button.link.hover.text};
                    }
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
    font-size: 14px;
    text-align: center;
    width: ${({ full }) => (full ? "100%" : "auto")};
    ${({ variant, theme }) => getVariant(theme, variant || "primary")}
`;

export const LinkButton = styled(Link)`
	cursor: pointer;
    padding: 8px 16px;
    border-radius: 8px;
    border: none;
    transition: all 0.3s;
    text-decoration: none;
    font-size: 14px;
    text-align: center;
    width: ${({ full }) => (full ? "100%" : "auto")};
    ${({ variant, theme }) => getVariant(theme, variant || "primary")}
`;