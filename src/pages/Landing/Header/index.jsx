// src/pages/Landing/Header/index.jsx
import React from 'react';
import Button from '../../../components/Button';
import * as S from './styles';

const LandingHeader = () => {
    return (
    <S.HeaderContainer>
        <S.LogoContainer>
            <S.LogoText>Resolve +</S.LogoText>
        </S.LogoContainer>

    <S.RightContainer>
        <S.NavLink href="/empresa">Para sua empresa</S.NavLink>
        <S.NavLink href="/servicos">Serviços</S.NavLink>
        <S.NavLink href="/contatos">Contatos</S.NavLink>
        <Button variant="green-border" redirect="/login" style={{ marginLeft: '1rem' }}> Login </Button>
        <Button variant="primary" redirect="/register" full>Regriste-se</Button>
        
    </S.RightContainer>
    </S.HeaderContainer>
    );
};

export default LandingHeader;