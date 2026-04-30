import React from 'react';
import * as S from './styles';
import experienceImage from '../../../../../../assets/images/experience-image.svg';

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
            src={experienceImage} 
            alt="Experiência única para clientes e empresas" 
          />
        </S.ExperienceImage>
      </S.ExperienceContent>
    </S.ExperienceSection>
  );
};

export default ExperienceSection;
