import React from 'react';
import * as S from './styles';

const SacSection = () => {
  return (
    <S.SacSection>
      <S.SacContent>
        <S.SacImage>
          <img 
            src="/assets/images/sac-image.svg" 
            alt="SAC rápido, integrado e humano" 
          />
        </S.SacImage>

        <S.SacTextContent>
          <S.SacTitle>
            Seu SAC em outro nível: rápido, integrado e humano
          </S.SacTitle>
          
          <S.SacSubtitle>
            Mais que resolver problemas, ajudamos você a criar experiências positivas.
          </S.SacSubtitle>

          <S.SacList>
            <S.SacItem>
              <S.SacIcon>✓</S.SacIcon>
              <S.SacText>Resolução de chamados até 3x mais rápida</S.SacText>
            </S.SacItem>

            <S.SacItem>
              <S.SacIcon>✓</S.SacIcon>
              <S.SacText>Atendimento centralizado em uma única plataforma</S.SacText>
            </S.SacItem>

            <S.SacItem>
              <S.SacIcon>✓</S.SacIcon>
              <S.SacText>Mais empatia e proximidade com o cliente</S.SacText>
            </S.SacItem>

            <S.SacItem>
              <S.SacIcon>✓</S.SacIcon>
              <S.SacText>Relatórios e métricas em tempo real</S.SacText>
            </S.SacItem>
          </S.SacList>
        </S.SacTextContent>
      </S.SacContent>
    </S.SacSection>
  );
};

export default SacSection;