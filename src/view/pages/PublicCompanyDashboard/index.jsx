import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./styles";
import LandingHeader from "../Landing/Header/index.jsx";
import { companyService } from "../../../services/companyService";
import {
  USER_TYPES,
  getHomePathByUserType,
  normalizeUserType,
} from "../../../utils/userType";
import { useAuth } from "../../../contexts/AuthContext";

const RATING_OPTIONS = [5, 4, 3, 2, 1];

const formatCompactDate = (value) => {
  if (!value) return "-";

  const parsedDate = new Date(value);
  if (Number.isNaN(parsedDate.getTime())) return "-";

  return parsedDate.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const formatCnpj = (value) => {
  const digits = String(value || "").replace(/\D/g, "");

  if (digits.length !== 14) {
    return value;
  }

  return digits.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
};

const getStarsLabel = (rating) =>
  `${"★".repeat(Math.max(0, Number(rating || 0)))}${"☆".repeat(
    Math.max(0, 5 - Number(rating || 0))
  )} (${Number(rating || 0)}/5)`;

const getResolutionSourceLabel = (source) => {
  if (source === "chatbot") return "Resolvido pelo chatbot";
  if (source === "human") return "Resolvido pelo atendimento";
  return "Resolução registrada";
};

const PublicCompanyDashboard = () => {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, userData } = useAuth();
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const normalizedUserType = normalizeUserType(userData?.userType);
  const openTicketPath = `/cliente/open-ticket?companyId=${companyId}`;
  const loginPath = `/login?redirect=${encodeURIComponent(openTicketPath)}`;
  const registerPath = `/register?redirect=${encodeURIComponent(openTicketPath)}`;

  const ctaState = useMemo(() => {
    if (!isLoggedIn) {
      return {
        label: "Entrar e abrir ticket",
        helper:
          "Você pode consultar este painel sem login. Para abrir um ticket, a plataforma pede autenticação.",
        onClick: () => navigate(loginPath),
        secondaryLabel: "Cadastrar e abrir ticket",
        secondaryAction: () => navigate(registerPath),
      };
    }

    if (normalizedUserType === USER_TYPES.CLIENTE) {
      return {
        label: "Abrir ticket com esta empresa",
        helper:
          "Você será levado direto para o fluxo de abertura do ticket com a empresa já selecionada.",
        onClick: () => navigate(openTicketPath),
        secondaryLabel: null,
        secondaryAction: null,
      };
    }

    return {
      label: "Ir para minha área",
      helper:
        "Este painel é público, mas a abertura de ticket a partir daqui está disponível apenas para contas de cliente.",
      onClick: () => navigate(getHomePathByUserType(normalizedUserType)),
      secondaryLabel: null,
      secondaryAction: null,
    };
  }, [
    isLoggedIn,
    loginPath,
    navigate,
    normalizedUserType,
    openTicketPath,
    registerPath,
  ]);

  useEffect(() => {
    let active = true;

    const loadDashboard = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await companyService.getPublicDashboard(companyId);

        if (!active) return;

        if (response?.status >= 400) {
          throw new Error(response.message || "Não foi possível carregar o dashboard da empresa.");
        }

        setDashboard(response);
      } catch (requestError) {
        if (!active) return;
        setError(
          requestError?.response?.data?.message ||
            requestError?.message ||
            "Não foi possível carregar o dashboard da empresa."
        );
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadDashboard();

    return () => {
      active = false;
    };
  }, [companyId]);

  const summary = dashboard?.summary || {};
  const company = dashboard?.company || null;
  const highlights = dashboard?.highlights || [];
  const averageRatingLabel = typeof summary.averageRating === "number" ? summary.averageRating.toFixed(1) : "--";

  return (
    <S.Page>
      <LandingHeader />

      <S.Content>
        {loading ? (
          <S.EmptyCard>Carregando dashboard da empresa...</S.EmptyCard>
        ) : null}

        {!loading && error ? <S.EmptyCard>{error}</S.EmptyCard> : null}

        {!loading && !error && company ? (
          <>
            <S.HeroSection>
              <S.HeroCard>
                <S.Kicker>Dashboard público da empresa</S.Kicker>
                <S.CompanyName>{company.name}</S.CompanyName>
                <S.CompanyDescription>
                  {company.description || "Empresa cadastrada na Resolve Mais."}
                </S.CompanyDescription>
                {company.cnpj ? <S.CompanyMeta>CNPJ: {formatCnpj(company.cnpj)}</S.CompanyMeta> : null}
              </S.HeroCard>

              <S.TrustCard>
                <S.TrustLabel>Confiabilidade percebida</S.TrustLabel>
                <S.TrustValue>{averageRatingLabel}</S.TrustValue>
                <S.StarsText>
                  {summary.averageRating
                    ? getStarsLabel(Math.round(summary.averageRating))
                    : "Sem avaliações suficientes"}
                </S.StarsText>
                <S.TrustBadge $tone={summary.trustLevel?.tone}>
                  {summary.trustLevel?.label || "Sem avaliações suficientes"}
                </S.TrustBadge>
                <S.TrustCaption>
                  Baseado em {summary.totalRatings || 0} avaliações públicas.
                </S.TrustCaption>
              </S.TrustCard>
            </S.HeroSection>

            <S.MetricsGrid>
              <S.MetricCard>
                <S.MetricValue>{summary.openTickets || 0}</S.MetricValue>
                <S.MetricTitle>Tickets abertos</S.MetricTitle>
                <S.MetricDescription>
                  Chamados que ainda estão no fluxo inicial da empresa.
                </S.MetricDescription>
              </S.MetricCard>

              <S.MetricCard>
                <S.MetricValue>{summary.inProgressTickets || 0}</S.MetricValue>
                <S.MetricTitle>Em atendimento</S.MetricTitle>
                <S.MetricDescription>
                  Chamados que já estão sendo conduzidos pela equipe humana.
                </S.MetricDescription>
              </S.MetricCard>

              <S.MetricCard>
                <S.MetricValue>{summary.resolvedOrClosedTickets || 0}</S.MetricValue>
                <S.MetricTitle>Resolvidos e finalizados</S.MetricTitle>
                <S.MetricDescription>
                  {summary.resolvedTickets || 0} resolvidos e {summary.closedTickets || 0} finalizados.
                </S.MetricDescription>
              </S.MetricCard>

              <S.MetricCard>
                <S.MetricValue>{summary.totalTickets || 0}</S.MetricValue>
                <S.MetricTitle>Total de tickets</S.MetricTitle>
                <S.MetricDescription>
                  Volume total de atendimentos registrados para esta empresa.
                </S.MetricDescription>
              </S.MetricCard>
            </S.MetricsGrid>

            <S.MainGrid>
              <S.SectionCard>
                <S.SectionHeader>
                  <div>
                    <S.SectionTitle>Avaliação geral</S.SectionTitle>
                    <S.SectionText>
                      Leitura consolidada da experiência de atendimento da empresa.
                    </S.SectionText>
                  </div>
                </S.SectionHeader>

                <S.RatingOverview>
                  <S.RatingValue>{averageRatingLabel}</S.RatingValue>
                  <div>
                    <S.RatingStars>
                      {summary.averageRating
                        ? getStarsLabel(Math.round(summary.averageRating))
                        : "Sem notas ainda"}
                    </S.RatingStars>
                    <S.SectionText>
                      {summary.totalRatings || 0} avaliações recebidas
                    </S.SectionText>
                  </div>
                </S.RatingOverview>

                <S.DistributionList>
                  {RATING_OPTIONS.map((rating) => {
                    const count = summary.ratingDistribution?.[rating] || 0;
                    const percentage =
                      summary.totalRatings > 0
                        ? Math.round((count / summary.totalRatings) * 100)
                        : 0;

                    return (
                      <S.DistributionRow key={rating}>
                        <S.DistributionLabel>{rating} estrela{rating > 1 ? "s" : ""}</S.DistributionLabel>
                        <S.DistributionBarTrack>
                          <S.DistributionBarFill style={{ width: `${percentage}%` }} />
                        </S.DistributionBarTrack>
                        <S.DistributionCount>{count}</S.DistributionCount>
                      </S.DistributionRow>
                    );
                  })}
                </S.DistributionList>
              </S.SectionCard>

              <S.TicketCtaCard>
                <S.TicketCtaHeader>
                  <div>
                    <S.SectionTitle>Abrir ticket</S.SectionTitle>
                    <S.SectionText>{ctaState.helper}</S.SectionText>
                  </div>
                </S.TicketCtaHeader>

                <S.ActionBlock>
                  <S.PrimaryAction type="button" onClick={ctaState.onClick}>
                    {ctaState.label}
                  </S.PrimaryAction>

                  {ctaState.secondaryLabel ? (
                    <S.SecondaryAction type="button" onClick={ctaState.secondaryAction}>
                      {ctaState.secondaryLabel}
                    </S.SecondaryAction>
                  ) : null}
                </S.ActionBlock>
              </S.TicketCtaCard>
            </S.MainGrid>

            <S.ReviewsSection>
              <S.SectionHeader>
                <div>
                  <S.SectionTitle>Avaliações mais relevantes</S.SectionTitle>
                  <S.SectionText>
                    Consideramos como mais relevantes as avaliações comentadas e mais expressivas para quem quer conhecer a reputação da empresa.
                  </S.SectionText>
                </div>
              </S.SectionHeader>

              {highlights.length === 0 ? (
                <S.EmptyInline>
                  Esta empresa ainda não possui avaliações públicas suficientes para destaque.
                </S.EmptyInline>
              ) : (
                <S.HighlightGrid>
                  {highlights.map((highlight) => (
                    <S.HighlightCard key={`${highlight.ticketId}-${highlight.submittedAt || highlight.rating}`}>
                      <S.HighlightTop>
                        <S.HighlightRating>{getStarsLabel(highlight.rating)}</S.HighlightRating>
                        <S.HighlightDate>{formatCompactDate(highlight.submittedAt)}</S.HighlightDate>
                      </S.HighlightTop>
                      <S.HighlightSubject>{highlight.complaintTitle}</S.HighlightSubject>
                      <S.HighlightComment>
                        {highlight.comment || "Avaliação sem comentário detalhado."}
                      </S.HighlightComment>
                      <S.HighlightMeta>
                        <span>{highlight.reviewerLabel}</span>
                        <span>{getResolutionSourceLabel(highlight.resolutionSource)}</span>
                      </S.HighlightMeta>
                    </S.HighlightCard>
                  ))}
                </S.HighlightGrid>
              )}
            </S.ReviewsSection>
          </>
        ) : null}
      </S.Content>
    </S.Page>
  );
};

export default PublicCompanyDashboard;
