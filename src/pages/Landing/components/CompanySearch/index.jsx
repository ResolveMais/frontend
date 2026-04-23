import { useEffect, useMemo, useState } from "react";
import { companyService } from "../../../../services/companyService";
import * as S from "./styles";

const normalizeDigits = (value = "") => String(value).replace(/\D/g, "");

const normalizeText = (value = "") =>
  String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const CompanySearch = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const loadCompanies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await companyService.getAll();

        if (active) {
          setCompanies(Array.isArray(response) ? response : []);
        }
      } catch (requestError) {
        if (active) {
          setError(
            requestError?.response?.data?.message ||
              "Não foi possível carregar as empresas."
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadCompanies();

    return () => {
      active = false;
    };
  }, []);

  const filteredCompanies = useMemo(() => {
    const term = normalizeText(searchTerm.trim());
    const digitTerm = normalizeDigits(searchTerm);

    if (!term && !digitTerm) {
      return companies.slice(0, 6);
    }

    return companies.filter((company) => {
      const name = normalizeText(company.name);
      const description = normalizeText(company.description);
      const cnpj = normalizeDigits(company.cnpj);

      return (
        (term && (name.includes(term) || description.includes(term))) ||
        (digitTerm && cnpj.includes(digitTerm))
      );
    });
  }, [companies, searchTerm]);

  return (
    <S.Section id="empresas">
      <S.Content>
        <S.Header>
          <S.Kicker>Empresas cadastradas</S.Kicker>
          <S.Title>Consulte o dashboard público de uma empresa</S.Title>
        </S.Header>

        <S.SearchField>
          <S.SearchInput
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar por nome, CNPJ ou descrição"
            aria-label="Buscar empresas"
          />
        </S.SearchField>

        {loading ? <S.StateMessage>Carregando empresas...</S.StateMessage> : null}
        {!loading && error ? <S.StateMessage>{error}</S.StateMessage> : null}

        {!loading && !error ? (
          <>
            <S.ResultsInfo>
              {filteredCompanies.length} empresa
              {filteredCompanies.length === 1 ? "" : "s"} encontrada
              {filteredCompanies.length === 1 ? "" : "s"}
            </S.ResultsInfo>

            {filteredCompanies.length > 0 ? (
              <S.CompanyGrid>
                {filteredCompanies.map((company) => (
                  <S.CompanyCard key={company.id}>
                    <S.CompanyInfo>
                      <S.CompanyName>{company.name}</S.CompanyName>
                      {company.cnpj ? (
                        <S.CompanyMeta>CNPJ: {company.cnpj}</S.CompanyMeta>
                      ) : null}
                      <S.CompanyDescription>
                        {company.description || "Empresa cadastrada na plataforma."}
                      </S.CompanyDescription>
                    </S.CompanyInfo>

                    <S.DashboardLink to={`/empresas/${company.id}/dashboard`}>
                      Ver dashboard
                    </S.DashboardLink>
                  </S.CompanyCard>
                ))}
              </S.CompanyGrid>
            ) : (
              <S.StateMessage>
                Nenhuma empresa encontrada para essa busca.
              </S.StateMessage>
            )}
          </>
        ) : null}
      </S.Content>
    </S.Section>
  );
};

export default CompanySearch;
