import Button from "../Button"
import * as S from "./styles"

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Logo src="../../../assets/images/logo.png" alt="Resolve Mais" />

      <S.ButtonsContainer>
        <Button variant="link" redirect="/login">Login</Button>
        <Button variant="transparent" redirect="/register" full>Cadastre-se</Button>
      </S.ButtonsContainer>
    </S.HeaderContainer>
  )
}

export default Header