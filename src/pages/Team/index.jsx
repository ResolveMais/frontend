import React from 'react';
import * as S from './styles';
import beatrizImg from '../../../assets/images/team/beatriz.png';
import gabrielSoaresImg from '../../../assets/images/team/gabriel soares.png';
import gustavoPeixotoImg from '../../../assets/images/team/gustavo peixoto.png';
import gustavoOliveiraImg from '../../../assets/images/team/gustavo oliveira.png';
import marcosImg from '../../../assets/images/team/marcos.png';
import ruanImg from '../../../assets/images/team/ruan.png';
import vitorImg from '../../../assets/images/team/vitor.png';
import vitoriaImg from '../../../assets/images/team/vitoria.png';

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Beatriz Sarti',
      role: 'Design',
      description:
        'Contribui com o design da plataforma, com foco em usabilidade, identidade visual e experiência do usuário.',
      image: beatrizImg,
    },
    {
      name: 'Gustavo Oliveira',
      role: 'Desenvolvedor Front-end',
      description:
        'Trabalha na implementação das telas e componentes da aplicação, garantindo uma navegação fluida.',
      image: gustavoOliveiraImg,
    },
    {
      name: 'Vitor Borri',
      role: 'Desenvolvedor Front-end',
      description:
        'Contribui com a construção das interfaces e com a evolução visual e funcional do produto.',
      image: vitorImg,
    },
    {
      name: 'Ruan Vaz',
      role: 'Documentação',
      description:
        'Responsável pela organização da documentação do projeto e pela clareza das informações das entregas.',
      image: ruanImg,
    },
    {
      name: 'Vitória Campos',
      role: 'Documentação',
      description:
        'Atua na documentação do projeto, apoiando a padronização dos materiais e o registro das definições.',
      image: vitoriaImg,
    },
    {
      name: 'Marcos Junior',
      role: 'Desenvolvedor Back-end',
      description:
        'Responsável pela estrutura do servidor, regras de negócio e integrações da aplicação.',
      image: marcosImg,
    },
    {
      name: 'Gabriel Soares',
      role: 'Desenvolvedor Back-end',
      description:
        'Trabalha na construção das APIs e na sustentação da base técnica do sistema.',
      image: gabrielSoaresImg,
    },
    {
      name: 'Gustavo Peixoto',
      role: 'Desenvolvedor Front-end',
      description:
        'Atua no front-end da área da empresa, com foco na implementação e evolução dos dashboards da plataforma.',
      image: gustavoPeixotoImg,
    },
  ];

  return (
    <S.TeamContainer>
      <S.TeamHeader>
        <S.MainTitle>Nossa equipe</S.MainTitle>
        <S.MissionText>
          Nossa missão é simplificar o atendimento, permitindo que negócios
          cresçam e clientes sejam melhor atendidos.
        </S.MissionText>

        <S.CallToAction>
          <S.CTALink href="/landing">Saiba Mais →</S.CTALink>
          <S.CTALink href="/register">Cadastre-se →</S.CTALink>
        </S.CallToAction>
      </S.TeamHeader>

      <S.TeamGrid>
        {teamMembers.map((member) => (
          <S.TeamMember key={member.name}>
            <S.MemberImageWrapper>
              <S.MemberImage src={member.image} alt={member.name} />
            </S.MemberImageWrapper>
            <S.MemberName>{member.name}</S.MemberName>
            <S.MemberRole>{member.role}</S.MemberRole>
            <S.MemberDescription>{member.description}</S.MemberDescription>
          </S.TeamMember>
        ))}
      </S.TeamGrid>
    </S.TeamContainer>
  );
};

export default TeamPage;
