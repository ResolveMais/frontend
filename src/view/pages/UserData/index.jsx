import React, { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as S from "./styles";
import LoggedHeader from "../../../components/LoggedHeader";
import Input from "../../../components/Input";
import PhoneInput from "../../../components/PhoneInput";
import Button from "../../../components/Button";
import { useAuth } from "../../../contexts/AuthContext";
import { useSnack } from "../../../contexts/SnackContext";
import { api } from "../../../services/api";

const schema = yup.object().shape({
  avatarUrl: yup
    .string()
    .transform((value) => (value ? value.trim() : ""))
    .nullable()
    .test("is-valid-url", "Informe uma URL válida para a foto", (value) => {
      if (!value) return true;
      try {
        const parsed = new URL(value);
        return ["http:", "https:"].includes(parsed.protocol);
      } catch {
        return false;
      }
    }),
  name: yup.string().trim().required("Nome completo é obrigatório"),
  email: yup.string().trim().email("Email inválido").required("Email é obrigatório"),
  phone: yup
    .string()
    .trim()
    .required("Telefone é obrigatório")
    .matches(/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/, "Telefone inválido"),
});

const formatDateLabel = () => {
  const date = new Date();
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const UserData = () => {
  const { userData, updateUser } = useAuth();
  const { showSnack } = useSnack();

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      avatarUrl: "",
      name: "",
      email: "",
      phone: "",
    },
    mode: "onBlur",
  });

  const avatarUrl = watch("avatarUrl");

  const formattedDate = useMemo(() => formatDateLabel(), []);

  const documentMeta = useMemo(() => {
    if (userData?.cpf) return { label: "CPF", value: userData.cpf };
    if (userData?.cnpj) return { label: "CNPJ", value: userData.cnpj };
    return { label: "CPF", value: "" };
  }, [userData?.cpf, userData?.cnpj]);

  useEffect(() => {
    if (!userData) return;

    setValue("avatarUrl", userData?.avatarUrl || "");
    setValue("name", userData?.name || "");
    setValue("email", userData?.email || "");
    setValue("phone", userData?.phone || "");
  }, [userData, setValue]);

  const onSubmit = async (formData) => {
    try {
      const payload = {
        avatarUrl: formData.avatarUrl || null,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      };

      const response = await api.patch("/users/update-profile", payload);

      if (response.status === 200) {
        const mergedUser = response.data?.user || {
          ...userData,
          ...payload,
        };

        updateUser(mergedUser);
        showSnack({ variant: "success", message: "Configurações atualizadas com sucesso!" });
        return;
      }

      showSnack({ variant: "error", message: "Nao foi possivel salvar as configurações." });
    } catch (error) {
      showSnack({
        variant: "error",
        message: error?.response?.data?.error || "Erro ao atualizar perfil. Tente novamente.",
      });
    }
  };

  return (
    <S.Container>
      <LoggedHeader />

      <S.MainContainer>
        <S.Header>
          <S.HeaderDate>{formattedDate}</S.HeaderDate>
          <S.HeaderTitle>Configurações do Usuário</S.HeaderTitle>
          <S.HeaderSubtitle>Atualize seus dados pessoais.</S.HeaderSubtitle>
        </S.Header>

        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.AvatarSection>
            <S.AvatarPreview>
              {avatarUrl ? (
                <S.AvatarImage src={avatarUrl} alt="Preview da foto" />
              ) : (
                <S.AvatarPlaceholder>
                  {(userData?.name || "U")
                    .split(" ")
                    .filter(Boolean)
                    .map((value) => value[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()}
                </S.AvatarPlaceholder>
              )}
            </S.AvatarPreview>

            <Input
              label="Foto (URL):"
              placeholder="https://seusite.com/minha-foto.jpg"
              type="text"
              register={register("avatarUrl")}
              errors={errors.avatarUrl}
            />
          </S.AvatarSection>

          <S.FieldsGrid>
            <Input
              label="Nome completo:"
              placeholder="Digite seu nome"
              type="text"
              register={register("name")}
              errors={errors.name}
            />

            <Input
              label="E-mail:"
              placeholder="usuario@dominio.com"
              type="text"
              register={register("email")}
              errors={errors.email}
            />

            <PhoneInput
              label="Telefone:"
              placeholder="(11) 99999-9999"
              control={control}
              name="phone"
              errors={errors.phone}
            />

            <Input
              label={`${documentMeta.label}:`}
              placeholder={documentMeta.label}
              type="text"
              register={{}}
              value={documentMeta.value}
              disabled
            />
          </S.FieldsGrid>

          {userData?.jobTitle && (
            <S.ReadOnlyInfo>
              <strong>Cargo atual:</strong> {userData?.jobTitle || "Não informado"}
            </S.ReadOnlyInfo>
          )}

          <S.Actions>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? "Salvando..." : "Salvar alterações"}
            </Button>
          </S.Actions>
        </S.Form>
      </S.MainContainer>
    </S.Container>
  );
};

export default UserData;
