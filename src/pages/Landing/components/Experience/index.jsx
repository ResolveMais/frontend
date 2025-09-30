import React from 'react';
import * as S from './styles';

const ExperienceSection = () => {
  return (
    <S.ExperienceSection>
      <S.ExperienceContent>
        <S.ExperienceTextContent>
          <S.ExperienceTitle>
            Uma experiência única para clientes e empresas
          </S.ExperienceTitle>
          
          <S.ExperienceSubtitle>
            Nosso objetivo é facilitar a comunicação e melhorar a experiência em cada interação
          </S.ExperienceSubtitle>

          <S.ExperienceList>
            <S.ExperienceItem>
              <S.ExperienceIcon>✓</S.ExperienceIcon>
              <S.ExperienceText>Atendimento mais rápido e eficiente</S.ExperienceText>
            </S.ExperienceItem>

            <S.ExperienceItem>
              <S.ExperienceIcon>✓</S.ExperienceIcon>
              <S.ExperienceText>Redução de custos operacionais</S.ExperienceText>
            </S.ExperienceItem>

            <S.ExperienceItem>
              <S.ExperienceIcon>✓</S.ExperienceIcon>
              <S.ExperienceText>Maior satisfação dos clientes</S.ExperienceText>
            </S.ExperienceItem>

            <S.ExperienceItem>
              <S.ExperienceIcon>✓</S.ExperienceIcon>
              <S.ExperienceText>Solução fácil de integrar à sua empresa</S.ExperienceText>
            </S.ExperienceItem>
          </S.ExperienceList>
        </S.ExperienceTextContent>

        <S.ExperienceImage>
          <img 
            src="/assets/images/experience-image.svg" 
            alt="Experiência única para clientes e empresas" 
          />
        </S.ExperienceImage>
      </S.ExperienceContent>
    </S.ExperienceSection>
  );
};

export default ExperienceSection;