import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import LoggedHeader from "../../components/LoggedHeader";
import { useSnack } from "../../contexts/SnackContext";
import * as S from "./styles";

const NewTicketForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyId: "",
    complaintTitleId: "",
    description: "",
  });
  const [companies, setCompanies] = useState([]);
  const [complaintTitles, setComplaintTitles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();
  const { showSnack } = useSnack();

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

  const showErrorSnack = useCallback(
    (message) => {
      showSnack({ variant: "error", message });
    },
    [showSnack],
  );

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      showErrorSnack("Você precisa fazer login para criar um ticket.");
      navigate("/login");
      return;
    }

    fetchCompanies();
  }, [navigate, showErrorSnack]);

  const fetchCompanies = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    try {
      setLoading(true);

      const url = `${API_BASE}/tickets/companies`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const responseText = await response.text();

      try {
        const data = JSON.parse(responseText);

        if (data.companies) {
          setCompanies(data.companies);
        } else if (data.result) {
          setCompanies(data.result);
        } else if (Array.isArray(data)) {
          setCompanies(data);
        } else {
          setCompanies([]);
        }
      } catch {
        if (responseText.includes("<!doctype html>")) {
          showErrorSnack(
            "Erro: o servidor está retornando HTML em vez de JSON. Verifique a URL da API.",
          );
        } else {
          showErrorSnack("Erro: resposta inválida do servidor.");
        }
      }
    } catch (error) {
      showErrorSnack(`Erro de conexão com o servidor: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const fetchComplaintTitles = async (companyId) => {
    const token = localStorage.getItem("token");

    if (!token) {
      showErrorSnack("Sessão expirada. Faça login novamente.");
      navigate("/login");
      return;
    }

    try {
      const url = `${API_BASE}/tickets/complaint-titles/${companyId}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const responseText = await response.text();

      try {
        const data = JSON.parse(responseText);

        if (data.complaintTitles) {
          setComplaintTitles(data.complaintTitles);
        } else if (Array.isArray(data)) {
          setComplaintTitles(data);
        } else {
          setComplaintTitles([]);
        }
      } catch {
        showErrorSnack("Erro ao carregar assuntos.");
      }
    } catch {
      showErrorSnack("Erro ao carregar assuntos.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.description.trim()) {
      showErrorSnack("Por favor, preencha a descrição do ticket.");
      return;
    }

    if (formData.description.length < 20) {
      showErrorSnack("A descrição deve ter pelo menos 20 caracteres.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const url = `${API_BASE}/tickets/create`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();

      try {
        const data = JSON.parse(responseText);

        if (response.ok) {
          setShowSuccess(true);
          setTimeout(() => {
            navigate(`/cliente/chatbot?ticketId=${data.ticket?.id || ""}`);
          }, 2000);
        } else {
          showErrorSnack(
            data.message || `Erro ${response.status} ao criar ticket.`,
          );
        }
      } catch {
        showErrorSnack("Erro inesperado ao criar ticket.");
      }
    } catch (error) {
      showErrorSnack(`Erro de conexão ao criar ticket: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleCompanySelect = (company) => {
    setFormData({ ...formData, companyId: company.id });
    setSelectedCompany(company);
    fetchComplaintTitles(company.id);
    setStep(2);
    setSearchTerm("");
  };

  const handleComplaintTitleSelect = (complaintTitle) => {
    setFormData({ ...formData, complaintTitleId: complaintTitle.id });
    setStep(3);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (!localStorage.getItem("token")) {
    return (
      <S.Page>
        <S.LoadingContainer>
          <p>Verificando autenticação...</p>
          <Button variant="primary" onClick={() => navigate("/login")}>
            Fazer Login
          </Button>
        </S.LoadingContainer>
      </S.Page>
    );
  }

  return (
    <S.Page>
      <S.HeaderFixed>
        <LoggedHeader />
      </S.HeaderFixed>

      {showSuccess && (
        <S.SuccessPopup>
          <S.SuccessContent>
            <S.SuccessIcon>✓</S.SuccessIcon>
            <S.SuccessTitle>Ticket Aberto!</S.SuccessTitle>
            <S.SuccessMessage>
              Seu ticket foi criado com sucesso e será atendido em breve.
            </S.SuccessMessage>
          </S.SuccessContent>
        </S.SuccessPopup>
      )}

      <S.ProgressSteps>
        <S.Step $active={step >= 1}>
          <S.StepNumber $active={step >= 1}>1</S.StepNumber>
          <S.StepText>Empresa</S.StepText>
        </S.Step>
        <S.Step $active={step >= 2}>
          <S.StepNumber $active={step >= 2}>2</S.StepNumber>
          <S.StepText>Assunto</S.StepText>
        </S.Step>
        <S.Step $active={step >= 3}>
          <S.StepNumber $active={step >= 3}>3</S.StepNumber>
          <S.StepText>Descrição</S.StepText>
        </S.Step>
      </S.ProgressSteps>

      <S.Content>
        {step === 1 && (
          <S.FormStep>
            <S.StepHeader>
              <S.StepTitle>
                Para qual empresa deseja abrir o Ticket?
              </S.StepTitle>
              <S.StepDescription>
                Selecione a empresa que deseja contactar
              </S.StepDescription>
            </S.StepHeader>

            {loading && (
              <S.LoadingMessage>
                <p>Carregando empresas...</p>
              </S.LoadingMessage>
            )}

            {!loading && (
              <>
                <S.SearchContainer>
                  <S.SearchInput
                    type="text"
                    placeholder="Buscar empresa pelo nome..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </S.SearchContainer>

                <S.OptionsList>
                  {filteredCompanies.map((company) => (
                    <S.OptionItem
                      key={company.id}
                      type="button"
                      onClick={() => handleCompanySelect(company)}
                    >
                      <S.OptionContent>
                        <S.OptionTitle>{company.name}</S.OptionTitle>
                        {company.cnpj && (
                          <S.CompanyCnpj>CNPJ: {company.cnpj}</S.CompanyCnpj>
                        )}
                        {company.description && (
                          <S.CompanyDescription>
                            {company.description}
                          </S.CompanyDescription>
                        )}
                      </S.OptionContent>
                      <S.OptionArrow>→</S.OptionArrow>
                    </S.OptionItem>
                  ))}
                  {filteredCompanies.length === 0 && companies.length > 0 && (
                    <S.NoResults>
                      <S.NoResultsText>
                        Nenhuma empresa encontrada para "{searchTerm}"
                      </S.NoResultsText>
                    </S.NoResults>
                  )}
                  {companies.length === 0 && !loading && (
                    <S.NoResults>
                      <S.NoResultsText>
                        Nenhuma empresa cadastrada no sistema
                      </S.NoResultsText>
                    </S.NoResults>
                  )}
                </S.OptionsList>
              </>
            )}
          </S.FormStep>
        )}

        {step === 2 && (
          <S.FormStep>
            <S.StepHeader>
              <S.StepTitle>Qual o assunto?</S.StepTitle>
              <S.StepDescription>
                Selecione o assunto do seu ticket para {selectedCompany?.name}
              </S.StepDescription>
            </S.StepHeader>

            <S.OptionsList>
              {complaintTitles.map((title) => (
                <S.OptionItem
                  key={title.id}
                  type="button"
                  onClick={() => handleComplaintTitleSelect(title)}
                >
                  <S.OptionContent>
                    <S.OptionTitle>{title.title}</S.OptionTitle>
                    {title.description && (
                      <S.ComplaintDescription>
                        {title.description}
                      </S.ComplaintDescription>
                    )}
                  </S.OptionContent>
                  <S.OptionArrow>→</S.OptionArrow>
                </S.OptionItem>
              ))}
              {complaintTitles.length === 0 && (
                <S.NoResults>
                  <S.NoResultsText>Nenhum assunto disponível</S.NoResultsText>
                </S.NoResults>
              )}
            </S.OptionsList>

            <S.StepBackContainer>
              <Button variant="transparent" onClick={() => setStep(1)}>
                ← Voltar para empresas
              </Button>
            </S.StepBackContainer>
          </S.FormStep>
        )}

        {step === 3 && (
          <S.FormStepForm onSubmit={handleSubmit}>
            <S.StepHeader>
              <S.StepTitle>Descreva em detalhes</S.StepTitle>
              <S.StepDescription>
                Forneça todas as informações necessárias sobre sua solicitação
              </S.StepDescription>
            </S.StepHeader>

            <S.SelectedInfo>
              <S.InfoItem>
                <strong>Empresa:</strong> {selectedCompany?.name}
              </S.InfoItem>
              <S.InfoItem>
                <strong>Assunto:</strong>{" "}
                {
                  complaintTitles.find(
                    (title) => title.id === formData.complaintTitleId,
                  )?.title
                }
              </S.InfoItem>
            </S.SelectedInfo>

            <S.FormGroup>
              <S.FormLabel htmlFor="description">
                Descrição detalhada *
              </S.FormLabel>
              <S.Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Descreva sua solicitação com detalhes..."
                rows={10}
                required
              />
              <S.TextareaFooter>
                <S.CharCount>
                  {formData.description.length} caracteres
                </S.CharCount>
                <S.CharHint $error={formData.description.length < 20}>
                  Mínimo: 20 caracteres
                </S.CharHint>
              </S.TextareaFooter>
            </S.FormGroup>

            <S.FormActions>
              <Button
                variant="secondary"
                onClick={() => setStep(2)}
                type="button"
              >
                Voltar
              </Button>
              <Button
                type="submit"
                variant={formData.description.length < 20 ? "disabled" : "primary"}
                disabled={loading || formData.description.length < 20}
                full
              >
                {loading ? "Criando Ticket..." : "Criar Ticket"}
              </Button>
            </S.FormActions>
          </S.FormStepForm>
        )}
      </S.Content>
    </S.Page>
  );
};

export default NewTicketForm;
