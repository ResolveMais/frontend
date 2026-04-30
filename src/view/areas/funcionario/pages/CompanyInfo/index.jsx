import { useEffect, useState } from "react";
import { useAuth } from "../../../../../contexts/AuthContext";
import LoggedHeader from "../../../../../components/LoggedHeader";
import { companyService } from "../../../../../services/companyService";
import { ticketService } from "../../../../../services/ticketService";
import * as S from "./styles";

const formatCnpj = (value) => {
  const digits = String(value || "").replace(/\D/g, "");

  if (digits.length !== 14) return value || "Não informado";

  return digits.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
};

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

const getStarsLabel = (rating) =>
  `${"★".repeat(Math.max(0, Number(rating || 0)))}${"☆".repeat(
    Math.max(0, 5 - Number(rating || 0))
  )} (${Number(rating || 0)}/5)`;

const getResolutionSourceLabel = (source) => {
  if (source === "chatbot") return "Resolvido pelo chatbot";
  if (source === "human") return "Resolvido pelo atendimento";
  return "Resolução registrada";
};

export default function CompanyInfo() {
  const { userData } = useAuth();
  const [complaintTitles, setComplaintTitles] = useState([]);
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    const fetchCompanyInfo = async () => {
      if (!userData?.companyId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const [titlesResult, dashboardResult] = await Promise.allSettled([
          ticketService.getComplaintTitles(userData.companyId),
          companyService.getPublicDashboard(userData.companyId),
        ]);

        if (!active) return;

        if (titlesResult.status === "fulfilled") {
          setComplaintTitles(
            titlesResult.value?.complaintTitles || titlesResult.value || []
          );
        } else {
          console.error(titlesResult.reason);
          setComplaintTitles([]);
        }

        if (dashboardResult.status === "fulfilled") {
          setDashboard(dashboardResult.value || null);
        } else {
          console.error(dashboardResult.reason);
          setDashboard(null);
        }

        if (
          titlesResult.status === "rejected" &&
          dashboardResult.status === "rejected"
        ) {
          setError("Não foi possível carregar as informações da empresa agora.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    fetchCompanyInfo();

    return () => {
      active = false;
    };
  }, [userData?.companyId]);

  const company = dashboard?.company || userData?.company || null;
  const summary = dashboard?.summary || {};
  const highlights = dashboard?.highlights || [];
  const averageRatingLabel =
    typeof summary.averageRating === "number"
      ? summary.averageRating.toFixed(1)
      : "—";

  const infoCards = [
    {
      label: "CNPJ",
      value: company?.cnpj ? formatCnpj(company.cnpj) : "Não informado",
      helper: "Documento fiscal vinculado à empresa.",
    },
    {
      label: "Seu cargo",
      value: userData?.jobTitle || "Não informado",
      helper: "Função atual registrada para sua conta.",
    },
    {
      label: "Assuntos ativos",
      value: loading ? "—" : String(complaintTitles.length),
      helper: "Temas disponíveis para abertura de tickets.",
    },
    {
      label: "Confiança pública",
      value: summary?.trustLevel?.label || "Sem avaliações suficientes",
      helper: "Percepção consolidada com base nas avaliações.",
    },
  ];

  const metrics = [
    {
      value: loading ? "—" : String(summary.openTickets ?? "—"),
      title: "Tickets abertos",
      description: "Chamados ainda no fluxo inicial da empresa.",
    },
    {
      value: loading ? "—" : String(summary.inProgressTickets ?? "—"),
      title: "Em atendimento",
      description: "Casos já conduzidos pela equipe humana.",
    },
    {
      value: loading ? "—" : String(summary.resolvedOrClosedTickets ?? "—"),
      title: "Resolvidos e finalizados",
      description: `${summary.resolvedTickets || 0} resolvidos e ${
        summary.closedTickets || 0
      } finalizados.`,
    },
    {
      value: loading ? "—" : String(summary.totalTickets ?? "—"),
      title: "Total de tickets",
      description: "Volume geral de atendimentos da empresa.",
    },
  ];

  return (
    <S.Page>
      <LoggedHeader />

      <S.Container>
        <S.HeroSection>
          <S.HeroCard>
            <S.Eyebrow>
              <S.EyebrowDot />
              <span>Informações da empresa</span>
            </S.Eyebrow>

            <S.WelcomeTitle>{company?.name || "Minha empresa"}</S.WelcomeTitle>

            <S.WelcomeSubtitle>
              {company?.description ||
                "Consulte os principais dados da empresa, o contexto operacional e os assuntos disponíveis para atendimento."}
            </S.WelcomeSubtitle>

            <S.HeroMeta>
              <S.MetaPill>
                <strong>CNPJ</strong>
                <span>
                  {company?.cnpj ? formatCnpj(company.cnpj) : "Não informado"}
                </span>
              </S.MetaPill>
              <S.MetaPill>
                <strong>Seu cargo</strong>
                <span>{userData?.jobTitle || "Não informado"}</span>
              </S.MetaPill>
              <S.MetaPill>
                <strong>Assuntos</strong>
                <span>{loading ? "—" : complaintTitles.length}</span>
              </S.MetaPill>
            </S.HeroMeta>
          </S.HeroCard>

          <S.TrustCard>
            <S.TrustLabel>Confiança percebida</S.TrustLabel>
            <S.TrustValue>{averageRatingLabel}</S.TrustValue>
            <S.TrustStars>
              {typeof summary.averageRating === "number"
                ? getStarsLabel(Math.round(summary.averageRating))
                : "Sem avaliações suficientes"}
            </S.TrustStars>
            <S.TrustBadge $tone={summary?.trustLevel?.tone}>
              {summary?.trustLevel?.label || "Sem avaliações suficientes"}
            </S.TrustBadge>
            <S.TrustCaption>
              Baseado em {summary.totalRatings || 0} avaliações públicas.
            </S.TrustCaption>
          </S.TrustCard>
        </S.HeroSection>

        {error ? <S.EmptyState>{error}</S.EmptyState> : null}

        <S.InfoGrid>
          {infoCards.map((item) => (
            <S.InfoCard key={item.label}>
              <S.InfoLabel>{item.label}</S.InfoLabel>
              <S.InfoValue>{item.value}</S.InfoValue>
              <S.InfoHelper>{item.helper}</S.InfoHelper>
            </S.InfoCard>
          ))}
        </S.InfoGrid>

        <S.MetricsGrid>
          {metrics.map((item) => (
            <S.MetricCard key={item.title}>
              <S.MetricValue>{item.value}</S.MetricValue>
              <S.MetricTitle>{item.title}</S.MetricTitle>
              <S.MetricDescription>{item.description}</S.MetricDescription>
            </S.MetricCard>
          ))}
        </S.MetricsGrid>

        <S.SectionCard>
          <S.SectionHeader>
            <div>
              <S.SectionTitle>Assuntos de atendimento</S.SectionTitle>
              <S.SectionText>
                Temas disponíveis para abertura de tickets pelos clientes.
              </S.SectionText>
            </div>
          </S.SectionHeader>

          {loading ? <S.EmptyState>Carregando assuntos...</S.EmptyState> : null}

          {!loading && complaintTitles.length === 0 ? (
            <S.EmptyState>Nenhum assunto cadastrado.</S.EmptyState>
          ) : null}

          {!loading && complaintTitles.length > 0 ? (
            <S.TitleGrid>
              {complaintTitles.map((item) => (
                <S.TitleCard key={item.id}>
                  <S.TitleLabel>Assunto</S.TitleLabel>
                  <S.TitleHeading>{item.title}</S.TitleHeading>
                  <S.TitleText>
                    {item.description ||
                      "Assunto ativo na empresa, sem descrição complementar."}
                  </S.TitleText>
                </S.TitleCard>
              ))}
            </S.TitleGrid>
          ) : null}
        </S.SectionCard>

        <S.SectionCard>
          <S.SectionHeader>
            <div>
              <S.SectionTitle>Avaliações mais relevantes</S.SectionTitle>
              <S.SectionText>
                Comentários públicos que ajudam a entender como o atendimento da
                empresa é percebido.
              </S.SectionText>
            </div>
          </S.SectionHeader>

          {loading ? (
            <S.EmptyState>Carregando avaliações...</S.EmptyState>
          ) : null}

          {!loading && highlights.length === 0 ? (
            <S.EmptyState>
              Esta empresa ainda não possui avaliações públicas suficientes para
              destaque.
            </S.EmptyState>
          ) : null}

          {!loading && highlights.length > 0 ? (
            <S.HighlightGrid>
              {highlights.slice(0, 4).map((highlight) => (
                <S.HighlightCard
                  key={`${highlight.ticketId}-${highlight.submittedAt || highlight.rating}`}
                >
                  <S.HighlightTop>
                    <S.HighlightRating>
                      {getStarsLabel(highlight.rating)}
                    </S.HighlightRating>
                    <S.HighlightDate>
                      {formatCompactDate(highlight.submittedAt)}
                    </S.HighlightDate>
                  </S.HighlightTop>

                  <S.HighlightSubject>
                    {highlight.complaintTitle || "Atendimento registrado"}
                  </S.HighlightSubject>
                  <S.HighlightComment>
                    {highlight.comment ||
                      "Avaliação sem comentário detalhado."}
                  </S.HighlightComment>

                  <S.HighlightMeta>
                    <span>{highlight.reviewerLabel || "Cliente"}</span>
                    <span>
                      {getResolutionSourceLabel(highlight.resolutionSource)}
                    </span>
                  </S.HighlightMeta>
                </S.HighlightCard>
              ))}
            </S.HighlightGrid>
          ) : null}
        </S.SectionCard>
      </S.Container>
    </S.Page>
  );
}
