import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { getHomePathByUserType } from "../../utils/userType";
import { authService } from "../../services/authService";

const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
});

const Login = () => {
    const navigate = useNavigate();
    const { userData, isLoggedIn, logout, login } = useAuth();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await authService.login({
                email: data.email,
                password: data.password,
            });

            if (response?.token) {
                const { user, token } = response;
                login({ user, token });
                navigate(getHomePathByUserType(user?.userType), { replace: true });
            } else {
                alert("Erro ao fazer login. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!userData?.id && !isLoggedIn) logout();
        else navigate(getHomePathByUserType(userData?.userType), { replace: true });
    }, [userData, isLoggedIn, logout, navigate]);

    return (
        <S.Container>
            <S.GlobalStyle />

            <S.LogoContainer href="/">
                <S.Logo src="../../../assets/images/logo.png" alt="Resolve Mais" />
            </S.LogoContainer>

            <S.Content>
                <S.Left>
                    <S.FormHeader>
                        <S.FormTitle>Entrar</S.FormTitle>
                        <S.FormSubtitle>Use seu e-mail e senha para continuar.</S.FormSubtitle>
                    </S.FormHeader>

                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <Input label="E-mail:" placeholder="Digite o e-mail" type="text" register={register("email")} errors={errors.email} />
                        <Input label="Senha:" placeholder="Digite a senha" type="password" register={register("password")} errors={errors.password} />

                        <S.FormExtras>
                            <S.ForgotLink to="/forgot-password">Esqueci minha senha</S.ForgotLink>
                        </S.FormExtras>

                        <S.Actions>
                            <Button variant="transparent" redirect="/register" full>Cadastro</Button>
                            <Button variant="primary" type="submit" disabled={loading} full>Entrar</Button>
                        </S.Actions>
                    </S.Form>
                </S.Left>

                <S.Right>
                    <S.Image src="../../../assets/images/login.png" alt="Login" />
                    <S.Text>Bem-vindo de volta</S.Text>
                    <S.SubText>Acompanhe seus chamados e resolva tudo em um só lugar.</S.SubText>
                </S.Right>
            </S.Content>
        </S.Container>
    )
}

export default Login
