import React from 'react';
import * as S from './styles';
import eyeImage from '../../../../../assets/images/Eye.svg';
import goalImage from '../../../../../assets/images/Goal.svg';

const EyeIcon = () => (
  <img
    src={eyeImage}
    alt="Icone de Olho"
    style={{width: '40px', height: '40px'}}
  />
);

const GoalIcon = () => (
  <img
    src={goalImage}
    alt="Icone de Dardo"
    style={{width: '40px', height: '40px'}}
  />
);

const Mission = () => {
  return (
    <S.Container>
      <S.MainSection>
        <S.Title>Nossa Missão & Visão</S.Title>
        <S.Description>
          Acreditamos que cada interação conta. Por isso, unimos tecnologia e humanização para mudar a forma como empresas e clientes se conectam.
        </S.Description>
        
        <S.Divider />
        
        <S.MissionVisionContainer>
          <S.MissionCard>
            <EyeIcon />
            <S.CardTitle>Nossa missão</S.CardTitle>
            <S.CardText>
              Empoderar empresas com uma plataforma de atendimento integrada que melhora a comunicação, reduz custos operacionais e aumenta a satisfação dos clientes.
            </S.CardText>
          </S.MissionCard>
          
          <S.MissionCard>
            <GoalIcon />
            <S.CardTitle>Nossa visão</S.CardTitle>
            <S.CardText>
              Ser referência em soluções de SAC no mercado nacional, transformando o atendimento ao cliente em um diferencial competitivo estratégico para empresas de todos os portes.
            </S.CardText>
          </S.MissionCard>
        </S.MissionVisionContainer>
      </S.MainSection>
    </S.Container>
  );
};

export default Mission;
