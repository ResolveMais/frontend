import styled from 'styled-components';

export const TestimonialsSection = styled.section`
  padding: 100px 5%;
  background: #ffffff;
  text-align: center;
`;

export const TestimonialsTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TestimonialsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const TestimonialCard = styled.div`
  background: #f8f9fa;
  padding: 40px 30px;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
`;

export const Stars = styled.div`
  font-size: 1.5rem;
  color: #000000ff;
  margin-bottom: 20px;
  letter-spacing: 2px;
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  margin-bottom: 20px;
  font-style: italic;
`;

export const TestimonialAuthor = styled.h4`
  font-size: 1.2rem;
  font-weight: 700;
  color: #00C853;
  margin-bottom: 5px;
`;

export const TestimonialRole = styled.p`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`;