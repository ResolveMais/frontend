import React from 'react';
import * as S from './styles';
import pessoaImg from './images/pessoa.svg'; // Certifique-se que a imagem está neste caminho

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Beatriz Sarti',
      role: 'CEO',
      description: 'Fundadora e CEO da empresa, especialista em estratégia de negócios.',
    },
    {
      name: 'Gabriel Soares',
      role: 'CTO',
      description: 'Chief Technology Officer, responsável pela arquitetura técnica.',
    },
    {
      name: 'Gustavo Peixoto',
      role: 'Head of Design',
      description: 'Líder do time de design, focado em experiência do usuário.',
    },
    {
      name: 'Gustavo Oliveira',
      role: 'Dev Front-end',
      description: 'Desenvolvedor front-end especializado em React e interfaces.',
    },
    {
      name: 'Marcos Junior',
      role: 'Dev Back-end',
      description: 'Desenvolvedor back-end focado em arquitetura de sistemas.',
    },
    {
      name: 'Ruan Vaz',
      role: 'Product Manager',
      description: 'Gerente de produto, responsável pela definição de roadmap.',
    },
    {
      name: 'Vitória Campos',
      role: 'UX/UI Designer',
      description: 'Especialista em experiência do usuário e interface visual.',
    },
  ];

  return (
    <S.TeamContainer>
      <S.TeamHeader>
        <S.MainTitle>Nossa equipe</S.MainTitle>
        <S.MissionText>
          Nossa missão é simplificar o atendimento, permitindo que negócios cresçam e clientes sejam melhor atendidos.
        </S.MissionText>
        
        <S.CallToAction>
          <S.CTALink href="/landing">Saiba Mais →</S.CTALink>
          <S.CTALink href="/register">Cadastre-se →</S.CTALink>
        </S.CallToAction>
      </S.TeamHeader>

      <S.TeamGrid>
        {teamMembers.map((member, index) => (
          <S.TeamMember key={index}>
            <S.MemberImageWrapper>
              <S.MemberImage src={pessoaImg} alt={member.name} /> 
            </S.MemberImageWrapper> 
            <S.MemberName>{member.name}</S.MemberName>
            <S.MemberRole>{member.role}</S.MemberRole>
            <S.MemberDescription>{member.description}</S.MemberDescription>
          </S.TeamMember> //ajustar img dps
        ))}
      </S.TeamGrid>
    </S.TeamContainer>
  );
};

export default TeamPage;
