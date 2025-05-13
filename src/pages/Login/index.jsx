import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";

const Login = () => {
    return (
        <S.Container>
            <S.GlobalStyle />
            <S.Left>
                <S.FormTitle>Login</S.FormTitle>

                <S.Form>
                    <Input label="E-mail:" placeholder="Digite o e-mail" type="text" />
                    <Input label="Senha:" placeholder="Digite a senha" type="password" />

                    <Button variant="transparent">Cadastro</Button>
                    <Button variant="primary">Enviar</Button>
                </S.Form>
            </S.Left>

            <S.Right></S.Right>
        </S.Container>
    )
}

export default Login