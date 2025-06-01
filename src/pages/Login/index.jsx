import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().min(6, "Senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

const Login = () => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        setLoading(true);
        // Aqui você pode adicionar a lógica para autenticação do usuário
    }

    return (
        <S.Container>
            <S.GlobalStyle />

            <S.LogoContainer href="/">
                <S.Logo src="../../../assets/images/logo.png" alt="Resolve Mais" />
            </S.LogoContainer>

            <S.Left>
                <S.FormTitle>Login</S.FormTitle>

                <S.Form onSubmit={handleSubmit(onSubmit)}>
                    <Input label="E-mail:" placeholder="Digite o e-mail" type="text" register={register("email")} errors={errors.email} />
                    <Input label="Senha:" placeholder="Digite a senha" type="password" register={register("password")} errors={errors.password} />

                    <Button variant="transparent" redirect="/register">Cadastro</Button>
                    <Button variant="primary" type="submit" disabled={loading}>Enviar</Button>
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