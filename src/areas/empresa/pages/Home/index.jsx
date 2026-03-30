import Button from "../../../../components/Button";
import LoggedHeader from "../../../../components/LoggedHeader";
import * as S from "./styles";

const QUICK_ACTIONS = [
  {
    label: "Assuntos recorrentes",
    title: "Monte os temas mais comuns dos tickets",
    description:
      "Cadastre opções como demora na entrega, problemas no site e defeitos no produto para agilizar a abertura de chamados.",
    buttonLabel: "Gerenciar assuntos",
    path: "/empresa/assuntos",
    variant: "primary",
  },
  {
    label: "Dados da empresa",
    title: "Mantenha as informações sempre atualizadas",
    description:
      "Revise nome, descrição e dados cadastrais para que o cliente encontre sua empresa com clareza.",
    buttonLabel: "Abrir configurações",
    path: "/empresa/configuracoes",
    variant: "secondary",
  },
  {
    label: "Administradores",
    title: "Defina quem cuida da operação",
    description:
      "Organize os responsáveis pela empresa e mantenha a administração pronta para crescer sem confusão.",
    buttonLabel: "Ver administradores",
    path: "/empresa/administradores",
    variant: "transparent",
  },
];

const CompanyHome = () => {
  return (
    <S.Page>
      <LoggedHeader />

      <S.Container>
        <S.HeroSection>
          <S.HeroContent>
            <S.Eyebrow>
              <S.EyebrowDot />
              <span>Área da empresa</span>
            </S.Eyebrow>
            <S.Title>Painel inicial para organizar seu atendimento</S.Title>
            <S.Description>
              Configure os pontos principais da operação e deixe os clientes encontrarem o assunto certo logo no início
              do ticket.
            </S.Description>

            <S.Actions>
              <Button variant="primary" redirect="/empresa/assuntos">
                Cadastrar assuntos
              </Button>
              <Button variant="secondary" redirect="/empresa/configuracoes">
                Ajustar perfil da empresa
              </Button>
            </S.Actions>
          </S.HeroContent>

          <S.HighlightCard>
            <S.HighlightLabel>Próximo passo recomendado</S.HighlightLabel>
            <S.HighlightTitle>Comece pelos assuntos recorrentes</S.HighlightTitle>
            <S.HighlightText>
              Essa configuração ajuda o cliente a abrir tickets com mais contexto e reduz retrabalho no atendimento.
            </S.HighlightText>

            <S.StepList>
              <S.StepItem>
                <S.StepNumber>1</S.StepNumber>
                <S.StepText>Escolha um template pronto ou crie um assunto do zero.</S.StepText>
              </S.StepItem>
              <S.StepItem>
                <S.StepNumber>2</S.StepNumber>
                <S.StepText>Descreva o tema com poucas palavras e deixe o título objetivo.</S.StepText>
              </S.StepItem>
              <S.StepItem>
                <S.StepNumber>3</S.StepNumber>
                <S.StepText>Revise os assuntos com frequência para manter só o que faz sentido.</S.StepText>
              </S.StepItem>
            </S.StepList>
          </S.HighlightCard>
        </S.HeroSection>

        <S.SectionHeader>
          <div>
            <S.SectionTitle>Atalhos principais</S.SectionTitle>
            <S.SectionText>Aqui estão alguns atalhos para facilitar o acesso às principais funcionalidades.</S.SectionText>
          </div>
        </S.SectionHeader>

        <S.CardGrid>
          {QUICK_ACTIONS.map((action) => (
            <S.ActionCard key={action.title}>
              <S.CardLabel>{action.label}</S.CardLabel>
              <S.CardHeading>{action.title}</S.CardHeading>
              <S.CardText>{action.description}</S.CardText>
              <S.CardFooter>
                <Button variant={action.variant} redirect={action.path}>
                  {action.buttonLabel}
                </Button>
              </S.CardFooter>
            </S.ActionCard>
          ))}
        </S.CardGrid>
      </S.Container>
    </S.Page>
  );
};

export default CompanyHome;
