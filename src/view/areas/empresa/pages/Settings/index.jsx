import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";
import LoggedHeader from "../../../../../components/LoggedHeader";
import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import { useSnack } from "../../../../../contexts/SnackContext";
import { companyAdminService } from "../../../../../services/companyAdminService";

const CompanySettings = () => {
  const { showSnack } = useSnack();
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingCompany, setSavingCompany] = useState(false);

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
        message: error?.response?.data?.message || "Nao foi possivel carregar os dados da empresa.",
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
      setSavingCompany(true);
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
      setSavingCompany(false);
    }
  };

  return (
    <S.Page>
      <LoggedHeader />

      <S.Container>
        <S.Card>
          <S.CardTitle>Configurações da Empresa</S.CardTitle>
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
              register={companyForm.register("name", {
                required: "Informe o nome da empresa",
              })}
              errors={companyForm.formState.errors.name}
            />
            <Input
              label="Descricao:"
              placeholder="Descreva sua empresa"
              type="text"
              register={companyForm.register("description")}
            />
            <Input label="CNPJ:" placeholder="CNPJ" type="text" register={{}} value={company?.cnpj || ""} disabled />
            <S.ButtonsGroup>
              <Button variant="primary" type="submit" disabled={savingCompany}>
                Salvar dados da empresa
              </Button>
            </S.ButtonsGroup>
          </S.Form>
        </S.Card>

        <S.Card>
          <S.SectionHeader>
            <div>
              <S.SectionTitle>Assuntos recorrentes</S.SectionTitle>
              <S.SectionDescription>
                Agora os assuntos de tickets ficam em uma página dedicada para facilitar o cadastro e a manutenção.
              </S.SectionDescription>
            </div>
          </S.SectionHeader>

          <S.SupportingText>
            Nessa página o administrador pode adicionar temas como demora na entrega, problemas no site, problemas com o
            produto e outros assuntos mais recorrentes para novos tickets.
          </S.SupportingText>

          <S.ButtonsGroup>
            <Button variant="primary" redirect="/empresa/assuntos">
              Abrir página de assuntos
            </Button>
          </S.ButtonsGroup>
        </S.Card>
      </S.Container>
    </S.Page>
  );
};

export default CompanySettings;
