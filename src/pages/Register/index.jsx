import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";

const Register = () => {
    return (
        <S.Container>
            <S.GlobalStyle />

            <S.LogoContainer href="/">
                <S.Logo src="../../../assets/images/logo.png" alt="Resolve Mais" />
            </S.LogoContainer>

            <S.Left>
                <S.Image src="../../../assets/images/register.png" alt="Register" />
                <S.Text>Bem-vindo!</S.Text>
                <S.SubText>Faça o seu cadastro.</S.SubText>
            </S.Left>

            <S.Right>
                <S.FormTitle>Fazer Cadastro</S.FormTitle>

                <S.Form>
                    <Input label="Nome:" placeholder="Digite o seu nome" type="text" />
                    <Input label="E-mail:" placeholder="Digite o e-mail" type="text" />
                    <Input label="Senha:" placeholder="Digite a senha" type="password" />

                    <Button variant="transparent" redirect="/login">Login</Button>
                    <Button variant="primary">Cadastrar</Button>
                </S.Form>
            </S.Right>
        </S.Container>
    )
}

export default Register