import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  padding: 60px 5%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a4a4a;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin: 3rem auto;
  width: 100px;
`;

export const MissionVisionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const MissionCard = styled.div`
  background: #F8F8FA;
  padding: 2.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1.2rem;
  object-fit: contain;
`;

export const CardTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.2rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin: 0;
`;