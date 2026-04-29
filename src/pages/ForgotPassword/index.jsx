import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { authService } from "../../services/authService";
import * as S from "./styles";
import Logo from "../../../assets/images/logo.png";

const schema = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("E-mail e obrigatório"),
});

const ForgotPassword = () => {
  const cooldownSeconds = 30;
  const storageKey = "forgot_password_cooldown_until";
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [remaining, setRemaining] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const startCooldown = () => {
    const nextAllowedAt = Date.now() + cooldownSeconds * 1000;
    localStorage.setItem(storageKey, String(nextAllowedAt));
    setRemaining(cooldownSeconds);
  };

  const onSubmit = async (data) => {
    if (remaining > 0) return;
    setLoading(true);
    try {
      const response = await authService.forgotPassword({ email: data.email });
      setFeedback(
        response?.message ||
          "Se sua conta existir, você receberá um e-mail com o link de recuperação.",
      );
      setSubmitted(true);
      startCooldown();
    } catch (error) {
      console.error("Erro ao solicitar recuperação de senha:", error);
      setFeedback(
        "Não foi possível processar sua solicitação agora. Tente novamente em instantes.",
      );
      setSubmitted(true);
      startCooldown();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = Number(localStorage.getItem(storageKey) || 0);
    if (!stored) return;
    const diff = Math.max(0, Math.ceil((stored - Date.now()) / 1000));
    if (diff > 0) {
      setRemaining(diff);
    }
  }, []);

  useEffect(() => {
    if (remaining <= 0) return;
    const interval = setInterval(() => {
      const stored = Number(localStorage.getItem(storageKey) || 0);
      const diff = Math.max(0, Math.ceil((stored - Date.now()) / 1000));
      setRemaining(diff);
      if (diff <= 0) {
        localStorage.removeItem(storageKey);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remaining]);

  return (
    <S.Container>
      <S.GlobalStyle />

      <S.LogoContainer href="/">
        <S.Logo src={Logo} alt="Resolve Mais" />
      </S.LogoContainer>

      <S.Card>
        <S.Title>Recuperar senha</S.Title>
        <S.Subtitle>
          Digite seu e-mail para receber as instruções de redefinição.
        </S.Subtitle>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="E-mail:"
            placeholder="Digite seu e-mail"
            type="text"
            register={register("email")}
            errors={errors.email}
          />

          <Button type="submit" variant="primary" disabled={loading || remaining > 0} full>
            {loading
              ? "Enviando..."
              : remaining > 0
                ? `Aguarde ${remaining}s para reenviar`
                : "Enviar e-mail de recuperação"}
          </Button>
        </S.Form>

        {submitted && <S.Feedback>{feedback}</S.Feedback>}
        {remaining > 0 && (
          <S.TimerText>Você poderá solicitar novamente em {remaining}s.</S.TimerText>
        )}

        <S.FooterActions>
          <Button variant="transparent" redirect="/login" full>
            Voltar para login
          </Button>
        </S.FooterActions>
      </S.Card>
    </S.Container>
  );
};

export default ForgotPassword;
