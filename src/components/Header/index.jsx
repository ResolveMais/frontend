import { useAuth } from "../../contexts/AuthContext"
import Button from "../Button"
import * as S from "./styles"
import Logo from "../../../assets/images/logo.png"

const Header = () => {
  const { isLoggedIn, userData, logout } = useAuth();

  return (
    <S.HeaderContainer>
      <S.Logo src={Logo} alt="Resolve Mais" />

      {!isLoggedIn ? (
        <S.ButtonsContainer>
          <Button variant="link" redirect="/login">Login</Button>
          <Button variant="transparent" redirect="/register" full>Cadastre-se</Button>
        </S.ButtonsContainer>
      ) : (
        <S.ButtonsContainer>
          <Button variant="link" onClick={() => logout()}>{userData?.name}</Button>
        </S.ButtonsContainer>
      )}
    </S.HeaderContainer>
  )
}

export default Header
