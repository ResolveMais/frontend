import React from 'react';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
      <S.Content>
        {/* Coluna Institucional e Suporte lado a lado */}
        <S.MainColumns>
          {/* Coluna Institucional */}
          <S.Column>
            <S.SectionTitle>INSTITUCIONAL</S.SectionTitle>
            <S.Link href="#">Sobre Nós</S.Link>
            <S.Link href="/team">Nossa Equipe</S.Link>
            <S.Link href="#">Avaliações</S.Link>
            <S.Link href="#">Demonstração</S.Link>
            <S.Link href="#">Contato</S.Link>
          </S.Column>

          {/* Coluna Suporte */}
          <S.Column>
            <S.SectionTitle>SUPORTE</S.SectionTitle>
            <S.Link href="#">Perguntas Frequentes (FAQ)</S.Link>
            <S.Link href="#">Central de Ajuda</S.Link>
            <S.Link href="#">Política de Privacidade</S.Link>
            <S.Link href="#">Termos e Condições</S.Link>
            <S.Link href="#">Política de Cookies</S.Link>
          </S.Column>
        </S.MainColumns>

        {/* Seção Newsletter Simples */}
        <S.NewsletterSection>
          <S.NewsletterTitle>Receba atualizações exclusivas</S.NewsletterTitle>
          <S.NewsletterText>
            Inscreva-se e fique a par dos nossos lançamentos.
          </S.NewsletterText>
          <S.InputContainer>
            <S.Input 
              type="email" 
              placeholder="O seu email" 
            />
            <S.SubscribeButton>
              Subscrever
            </S.SubscribeButton>
          </S.InputContainer>
        </S.NewsletterSection>
      </S.Content>

      {/* Copyright */}
      <S.CopyrightContainer>
        <S.CopyrightText>
          © 2024. Todos os direitos reservados.
        </S.CopyrightText>
        <S.LegalLinks>
          <S.SmallLink href="#">Política de Privacidade</S.SmallLink>
          <S.Separator> | </S.Separator>
          <S.SmallLink href="#">Termos e Condições</S.SmallLink>
          <S.Separator> | </S.Separator>
          <S.SmallLink href="#">Política de Cookies</S.SmallLink>
        </S.LegalLinks>
      </S.CopyrightContainer>
    </S.Container>
  );
};

export default Footer;