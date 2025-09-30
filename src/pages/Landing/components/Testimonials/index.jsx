import React from 'react';
import * as S from './styles.js';

const TestimonialsSection = () => {
  return (
    <S.TestimonialsSection>
      <S.TestimonialsTitle>Avaliações</S.TestimonialsTitle>
      
      <S.TestimonialsSubtitle>
        Histórias reais, conquistas reais. Veja como nossos clientes alcançaram 
        seus objetivos e por que escolheram confiar em nós
      </S.TestimonialsSubtitle>

      <S.TestimonialsGrid>
        {/* Card 1 - Empresa */}
        <S.TestimonialCard>
          <S.Stars>★★★★★</S.Stars>
          <S.TestimonialText>
            "Com a equipe usando o chat interno, conseguimos atender melhor e mais rápido."
          </S.TestimonialText>
          <S.TestimonialAuthor>Comp Eletrico</S.TestimonialAuthor>
          <S.TestimonialRole>Empresa</S.TestimonialRole>
        </S.TestimonialCard>

        {/* Card 2 - Cliente */}
        <S.TestimonialCard>
          <S.Stars>★★★★★</S.Stars>
          <S.TestimonialText>
            "O mais importante para mim é ter respostas rápidas e não falar com robô."
          </S.TestimonialText>
          <S.TestimonialAuthor>Juntar Medeiros</S.TestimonialAuthor>
          <S.TestimonialRole>Cliente</S.TestimonialRole>
        </S.TestimonialCard>

        {/* Card 3 - Cliente */}
        <S.TestimonialCard>
          <S.Stars>★★★★★</S.Stars>
          <S.TestimonialText>
            "Antes eu ficava 40 minutos no telefone. Agora resolvo pela plataforma em menos de 5."
          </S.TestimonialText>
          <S.TestimonialAuthor>Maria Souza</S.TestimonialAuthor>
          <S.TestimonialRole>Cliente</S.TestimonialRole>
        </S.TestimonialCard>
      </S.TestimonialsGrid>
    </S.TestimonialsSection>
  );
};

export default TestimonialsSection;