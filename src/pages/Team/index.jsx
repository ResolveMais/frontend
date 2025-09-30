import React from 'react';
import * as S from './styles';

const TeamPage = () => {
  return (
    <S.TeamContainer>
      <S.TeamHeader>
        <S.MainTitle>Nossa equipe</S.MainTitle>
        <S.MissionText>
          Nossa missão é simplificar o atendimento, permitindo que negócios cresçam e clientes sejam melhor atendidos.
        </S.MissionText>
        <S.Divider />
        
        <S.CallToAction>
          <S.CTALink href="#">Saiba Mais →</S.CTALink>
          <S.CTALink href="#">Cadastre-se →</S.CTALink>
        </S.CallToAction>
        <S.Divider />
      </S.TeamHeader>

      <S.TeamGrid>
        <S.TeamMember>
          <S.MemberImage src="/beatriz-sarti.jpg" alt="Beatriz Sarti" />
          <S.MemberName>Beatriz Sarti</S.MemberName>
          <S.MemberRole>CEO</S.MemberRole>
          <S.MemberDescription>
           teste teste teste teste
          </S.MemberDescription>
        </S.TeamMember>

        <S.TeamMember>
          <S.MemberImage src="/gabriel-soares.jpg" alt="Gabriel Soares" />
          <S.MemberName>Gabriel Soares</S.MemberName>
          <S.MemberRole>CEO</S.MemberRole>
          <S.MemberDescription>
            teste teste teste teste
          </S.MemberDescription>
        </S.TeamMember>

        <S.TeamMember>
          <S.MemberImage src="/gabriel-tamais.jpg" alt="Gabriel Tamais" />
          <S.MemberName>Gabriel Tamais</S.MemberName>
          <S.MemberRole>CEO</S.MemberRole>
          <S.MemberDescription>
            teste teste teste teste
          </S.MemberDescription>
        </S.TeamMember>
      </S.TeamGrid>
    </S.TeamContainer>
  );
};

export default TeamPage;