import { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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
            const response = await api.post("/auth/login", {
                email: data.email,
                password: data.password,
            });

            if (response.status === 200 && response.data?.token) {
                const { user, token } = response.data;
                login({ user, token });
                window.location.href = "/";
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
        else navigate("/");
    }, [userData, isLoggedIn, logout, navigate]);

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