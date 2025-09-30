import React, { useState } from 'react';
import * as S from './styles.js';

const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Esse sistema substitui totalmente os atendentes humanos?",
      answer: "Não. Ele combina IA para agilizar respostas simples com atendentes humanos para casos complexos."
    },
    {
      question: "Empresas pequenas também podem usar?",
      answer: "Sim! O sistema é flexível para pequenas, médias e grandes empresas."
    },
    {
      question: "Como os clientes acessam o atendimento?",
      answer: "Dos seguintes canais: WhatsApp ou Site, tudo integrado."
    },
    {
      question: "Empresas conseguem medir a performance do SAC?",
      answer: "Sim! Painéis e relatórios mostram indicadores em tempo real (tempo médio de resposta, satisfação, tickets resolvidos)."
    },
    {
      question: "É seguro para os dados do cliente?",
      answer: "Totalmente. Utilizamos criptografia e práticas de segurança avançadas."
    }
  ];

  return (
    <S.FAQsSection>
      <S.FAQsTitle>Perguntas Frequentes (FAQs)</S.FAQsTitle>
      
      <S.FAQsSubtitle>
        Tem alguma dúvida? Nós já separamos as principais para você.
      </S.FAQsSubtitle>

      <S.Divider />

      <S.FAQsList>
        {faqs.map((faq, index) => (
          <S.FAQItem key={index}>
            <S.FAQQuestion 
              onClick={() => toggleFAQ(index)}
              $isActive={activeIndex === index}
            >
              {faq.question}
              <S.ArrowIcon $isActive={activeIndex === index}>
                {activeIndex === index ? '−' : '+'}
              </S.ArrowIcon>
            </S.FAQQuestion>
            
            <S.FAQAnswer $isActive={activeIndex === index}>
              {faq.answer}
            </S.FAQAnswer>
          </S.FAQItem>
        ))}
      </S.FAQsList>

      {/* NOVA FAIXA FINAL COM FUNDO VERDE */}
      <S.FinalBanner>
        <S.FinalStatement>
          Clientes ganham um atendimento mais humano e ágil, enquanto empresas economizam tempo e recursos.
        </S.FinalStatement>
      </S.FinalBanner>
    </S.FAQsSection>
  );
};

export default FAQsSection;