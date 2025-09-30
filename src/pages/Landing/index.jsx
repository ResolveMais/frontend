// src/pages/Landing/index.jsx
import React from 'react';
import LandingHeader from './Header/index.jsx';
import HeroSection from './components/Hero/index.jsx';
import BenefitsSection from './components/Benefits/index.jsx';
import ExperienceSection from './components/Experience/index.jsx';
import SacSection from './components/SacSection/index.jsx';
import TestimonialsSection from './components/Testimonials/index.jsx';
import FAQsSection from './components/FAQs/index.jsx';
import Footer from './components/Footer/index.jsx'; // ← Import do Footer
import * as S from './styles.js';

const Landing = () => {
  return (
    <S.Container>
      <LandingHeader />
      <HeroSection />
      <BenefitsSection />
      <ExperienceSection />
      <SacSection />
      <TestimonialsSection />
      <FAQsSection />
      <Footer /> {/* ← Footer adicionado */}
    </S.Container>
  );
};

export default Landing;