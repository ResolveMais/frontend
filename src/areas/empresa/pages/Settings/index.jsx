import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import LoggedHeader from "../../../../components/LoggedHeader";
import Input from "../../../../components/Input";
import Button from "../../../../components/Button";
import { useSnack } from "../../../../contexts/SnackContext";
import { companyAdminService } from "../../../../services/companyAdminService";

const CompanySettings = () => {
  const { showSnack } = useSnack();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const companyForm = useForm({
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const loadCompanyData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await companyAdminService.list();
      const companyData = response.company || null;
      setCompany(companyData);
      if (companyData) {
        companyForm.reset({
          name: companyData.name || "",
          description: companyData.description || "",
        });
      }
    } catch (error) {
      showSnack({
        variant: "error",
        message: error?.response?.data?.message || "Não foi possível carregar os dados da empresa.",
      });
    } finally {
      setLoading(false);
    }
  }, [companyForm, showSnack]);

  useEffect(() => {
    loadCompanyData();
  }, [loadCompanyData]);

  const updateCompanyProfile = async (formData) => {
    try {
      setSaving(true);
      const response = await companyAdminService.updateCompanyProfile({
        name: formData.name,
        description: formData.description,
      });

      setCompany(response.company || company);
      showSnack({ variant: "success", message: "Dados da empresa atualizados com sucesso." });
      await loadCompanyData();
    } catch (error) {
      showSnack({
        variant: "error",
        message: error?.response?.data?.message || "Erro ao atualizar dados da empresa.",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <S.Page>
      <LoggedHeader />

      <S.Container>
        <S.Card>
          <S.CardTitle>Configuracoes da Empresa</S.CardTitle>
          {!loading && company && (
            <S.CardText>
              {company.name} - CNPJ: {company.cnpj}
            </S.CardText>
          )}
        </S.Card>

        <S.Card>
          <S.SectionTitle>Dados da empresa</S.SectionTitle>
          <S.Form onSubmit={companyForm.handleSubmit(updateCompanyProfile)}>
            <Input
              label="Nome da empresa:"
              placeholder="Nome da empresa"
              type="text"
              register={companyForm.register("name")}
            />
            <Input
              label="Descricao:"
              placeholder="Descreva sua empresa"
              type="text"
              register={companyForm.register("description")}
            />
            <Input label="CNPJ:" placeholder="CNPJ" type="text" register={{}} value={company?.cnpj || ""} disabled />
            <S.ButtonsGroup>
              <Button variant="primary" type="submit" disabled={saving}>
                Salvar dados da empresa
              </Button>
            </S.ButtonsGroup>
          </S.Form>
        </S.Card>
      </S.Container>
    </S.Page>
  );
};

export default CompanySettings;
