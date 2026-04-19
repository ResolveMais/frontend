import { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import LoggedHeader from "../../../../components/LoggedHeader";
import { ticketService } from "../../../../services/ticketService";
import * as S from "./styles";

export default function CompanyInfo() {
  const { userData } = useAuth();
  const [complaintTitles, setComplaintTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTitles = async () => {
      if (!userData?.companyId) return;
      try {
        const res = await ticketService.getComplaintTitles(userData.companyId);
        setComplaintTitles(res?.complaintTitles || res || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTitles();
  }, [userData]);

  return (
    <S.Page>
      <LoggedHeader />

      <S.Container>
        <S.HeroSection>
          <S.Eyebrow>
            <S.EyebrowDot />
            <span>Informações da empresa</span>
          </S.Eyebrow>

          <S.WelcomeTitle>{userData?.company?.name || "Minha empresa"}</S.WelcomeTitle>

          {userData?.company?.description && (
            <S.WelcomeSubtitle>{userData.company.description}</S.WelcomeSubtitle>
          )}
        </S.HeroSection>

        <S.SectionHeader>
          <div>
            <S.SectionTitle>Assuntos de atendimento</S.SectionTitle>
            <S.SectionText>Temas disponíveis para abertura de tickets pelos clientes.</S.SectionText>
          </div>
        </S.SectionHeader>

        {loading && <S.EmptyState>Carregando assuntos...</S.EmptyState>}

        {!loading && complaintTitles.length === 0 && (
          <S.EmptyState>Nenhum assunto cadastrado.</S.EmptyState>
        )}

        {!loading && complaintTitles.length > 0 && (
          <S.TitleGrid>
            {complaintTitles.map((item) => (
              <S.TitleCard key={item.id}>
                <S.TitleLabel>Assunto</S.TitleLabel>
                <S.TitleHeading>{item.title}</S.TitleHeading>
                {item.description && (
                  <S.TitleText>{item.description}</S.TitleText>
                )}
              </S.TitleCard>
            ))}
          </S.TitleGrid>
        )}
      </S.Container>
    </S.Page>
  );
}