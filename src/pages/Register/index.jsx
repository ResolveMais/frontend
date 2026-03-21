import Button from "../../components/Button";
import Input from "../../components/Input";
import PhoneInput from "../../components/PhoneInput";
import CpfInput from "../../components/CpfInput";
import * as S from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    phone: yup
        .string()
        .required("Telefone é obrigatório")
        .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Telefone inválido"),
    cpf: yup
        .string()
        .required("CPF é obrigatório")
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF deve estar no formato 000.000.000-00"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().min(6, "Senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

const Register = () => {
    const { userData, isLoggedIn, logout, login } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const response = await api.post("/auth/register", {
                name: data.name,
                phone: data.phone,
                cpf: data.cpf,
                email: data.email,
                password: data.password,
            });

            if (response.status === 201 && response.data?.token) {
                const { user, token } = response.data;
                login({ user, token });
                window.location.href = "/";
            } else {
                alert("Erro ao fazer cadastro. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao fazer cadastro:", error);
            alert("Erro ao fazer cadastro. Verifique suas credenciais e tente novamente.");
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

            <S.Content>
                <S.Left>
                    <S.Image src="../../../assets/images/register.png" alt="Register" />
                    <S.Text>Comece agora</S.Text>
                    <S.SubText>Crie sua conta e acompanhe o status dos chamados.</S.SubText>
                </S.Left>

                <S.Right>
                    <S.FormHeader>
                        <S.FormTitle>Criar conta</S.FormTitle>
                        <S.FormSubtitle>Cadastro rapido e seguro para sua equipe.</S.FormSubtitle>
                    </S.FormHeader>

                    <S.Form onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            label="Nome:"
                            placeholder="Digite o seu nome"
                            type="text"
                            register={register("name")}
                            errors={errors.name}
                        />
                        <PhoneInput
                            label="Telefone:"
                            placeholder="(11) 99999-9999"
                            control={control}
                            name="phone"
                            errors={errors.phone}
                        />
                        <CpfInput
                            label="CPF:"
                            placeholder="000.000.000-00"
                            control={control}
                            name="cpf"
                            errors={errors.cpf}
                        />
                        <Input
                            label="E-mail:"
                            placeholder="Digite o e-mail"
                            type="text"
                            register={register("email")}
                            errors={errors.email}
                        />
                        <Input
                            label="Senha:"
                            placeholder="Digite a senha"
                            type="password"
                            register={register("password")}
                            errors={errors.password}
                        />

                        <S.Actions>
                            <Button variant="transparent" redirect="/login" full>Login</Button>
                            <Button variant="primary" type="submit" disabled={loading} full>Cadastrar</Button>
                        </S.Actions>
                    </S.Form>
                </S.Right>
            </S.Content>
        </S.Container>
    )
}

export default Register
