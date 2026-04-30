// src/pages/Landing/Header/styles.js
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  border-bottom: 1px solid #eaeaea;
`;

export const LogoContainer = styled.div`
  flex: 1;
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #10b981; /* Verde do logo */
  cursor: pointer;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #00C853;
  }
`;