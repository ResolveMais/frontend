import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useSearchParams } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { authService } from "../../services/authService";
import * as S from "./styles";

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha e obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "As senhas precisam ser iguais")
    .required("Confirmacao obrigatória"),
});

const ResetPassword = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(null);

  const token = String(searchParams.get("token") || "").trim();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    if (!tokenValid) {
      setFeedback("Token de recuperação inválido ou expirado.");
      return;
    }

    setLoading(true);
    setFeedback("");

    try {
      const response = await authService.resetPassword({
        token,
        newPassword: data.newPassword,
      });

      setFeedback(response?.message || "Senha redefinida com sucesso.");
      setSuccess(true);
    } catch (error) {
      console.error("Erro ao redefinir senha:", error);
      setFeedback(
        error?.response?.data?.message ||
          "Não foi possível redefinir sua senha. Solicite um novo link.",
      );
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      setTokenValid(false);
      setFeedback("Token de recuperação inválido ou expirado.");
      return;
    }

    let isMounted = true;

    const validateToken = async () => {
      try {
        await authService.validateResetToken({ token });
        if (isMounted) {
          setTokenValid(true);
        }
      } catch {
        if (!isMounted) return;
        setTokenValid(false);
        setFeedback("Token de recuperação inválido ou expirado.");
      }
    };

    validateToken();

    return () => {
      isMounted = false;
    };
  }, [token]);

  return (
    <S.Container>
      <S.GlobalStyle />

      <S.LogoContainer href="/">
        <S.Logo src="../../../assets/images/logo.png" alt="Resolve Mais" />
      </S.LogoContainer>

      <S.Card>
        <S.Title>Nova senha</S.Title>
        <S.Subtitle>
          Defina sua nova senha para voltar a acessar sua conta.
        </S.Subtitle>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nova senha:"
            placeholder="Digite a nova senha"
            type="password"
            register={register("newPassword")}
            errors={errors.newPassword}
          />
          <Input
            label="Confirmar senha:"
            placeholder="Repita a nova senha"
            type="password"
            register={register("confirmPassword")}
            errors={errors.confirmPassword}
          />

          <Button
            type="submit"
            variant="primary"
            disabled={loading || !tokenValid}
            full
          >
            {loading ? "Salvando..." : "Redefinir senha"}
          </Button>
        </S.Form>

        {feedback && <S.Feedback $success={success}>{feedback}</S.Feedback>}

        <S.FooterActions>
          {success ? (
            <Button variant="primary" onClick={() => navigate("/login")} full>
              Ir para login
            </Button>
          ) : (
            <Button variant="transparent" redirect="/forgot-password" full>
              Solicitar novo link
            </Button>
          )}
        </S.FooterActions>
      </S.Card>
    </S.Container>
  );
};

export default ResetPassword;
