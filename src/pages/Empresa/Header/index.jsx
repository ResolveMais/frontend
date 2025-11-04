import React from 'react';
import Button from '../../../components/Button';
import * as S from './styles';


const EmpresaHeader = () => {
    return (
        <S.HeaderContainer>
            <S.LogoContainer>
                <S.LogoText href="/landing">Resolve +</S.LogoText>
            </S.LogoContainer>

            <S.RightContainer>
                <S.NavLink href="/landing">Home</S.NavLink>
                <S.NavLink href="/servicos">Serviços</S.NavLink>
                <S.NavLink href="/contatos">Contatos</S.NavLink>
                <Button variant="green-border" redirect="/login" style={{ marginLeft: '1rem' }}> Login </Button>
                <Button variant="primary" redirect="/register" full>Regriste-se</Button>

            </S.RightContainer>
        </S.HeaderContainer>
    );
};

export default EmpresaHeader;