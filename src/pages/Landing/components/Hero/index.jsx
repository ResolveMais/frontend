import React from 'react';
import Button from '../../../../components/Button';
import * as S from './styles';

const HeroSection = () => {
  return (
    <S.HeroSection>
      <S.HeroContent>
        <S.Title>
          Atendimento demorado e confuso prejudica clientes e empresas – 
          <S.Highlight> nós temos a solução!</S.Highlight>
        </S.Title>
        
        <S.Description>
          Nossa plataforma de SAC Pós-Venda Resolve + conecta empresas e 
          clientes em uma única plataforma moderna e eficiente.
        </S.Description>

        <S.ButtonGroup>
          <Button variant="primary" redirect="/empresa" full>
            PARA SUA EMPRESA - SAÍBA MAIS
          </Button>
          
          <Button variant="green-border" redirect="/ticket" full>
            ABRIR UM TICKET
          </Button>
        </S.ButtonGroup>
      </S.HeroContent>

      <S.HeroImage>
        <img 
          src="/assets/images/landing1.svg" 
          alt="Plataforma Resolve Plus - SAC Pós-Venda moderno" 
        />
      </S.HeroImage>
    </S.HeroSection>
  );
};

export default HeroSection;