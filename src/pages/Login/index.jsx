import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";

const Login = () => {
    return (
        <S.Container>
            <S.GlobalStyle />

            <S.LogoContainer href="/">
                <S.Logo src="../../../assets/images/logo.png" alt="Resolve Mais" />
            </S.LogoContainer>

            <S.Left>
                <S.FormTitle>Login</S.FormTitle>

                <S.Form>
                    <Input label="E-mail:" placeholder="Digite o e-mail" type="text" />
                    <Input label="Senha:" placeholder="Digite a senha" type="password" />

                    <Button variant="transparent" redirect="/register">Cadastro</Button>
                    <Button variant="primary">Enviar</Button>
                </S.Form>
            </S.Left>

            <S.Right>
                <S.Image src="../../../assets/images/login.png" alt="Login" />
                <S.Text>Bem-vindo de volta!</S.Text>
                <S.SubText>Estamos felizes em vê-lo novamente.</S.SubText>
            </S.Right>
        </S.Container>
    )
}

export default Login