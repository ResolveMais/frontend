import React from "react";
import Button from "../../../../components/Button";
import * as S from "./styles";
import { useAuth } from "../../../../contexts/AuthContext";
import { getHomePathByUserType } from "../../../../utils/userType";

const LandingHeader = () => {
  const { isLoggedIn, userData } = useAuth();

  return (
      <S.HeaderContainer>
        <S.LogoContainer>
        <S.LogoText to="/">Resolve +</S.LogoText>
      </S.LogoContainer>

      <S.RightContainer>
        <S.NavLink href="/empresa">Para sua empresa</S.NavLink>
        <S.NavLink href="/#empresas">Empresas</S.NavLink>
        <S.NavLink href="/servicos">Serviços</S.NavLink>
        <S.NavLink href="/contatos">Contatos</S.NavLink>

        {isLoggedIn ? (
          <Button redirect={getHomePathByUserType(userData?.userType)} variant="primary">
            {userData?.name || "Usuario"}
          </Button>
        ) : (
          <>
            <Button variant="green-border" redirect="/login" style={{ marginLeft: "1rem" }}>
              Login
            </Button>
            <Button variant="primary" redirect="/register" full>
              Registre-se
            </Button>
          </>
        )}
      </S.RightContainer>
    </S.HeaderContainer>
  );
};

export default LandingHeader;
