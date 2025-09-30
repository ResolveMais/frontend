import styled from 'styled-components';

export const TeamContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  font-family: Arial, sans-serif;
`;

export const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

export const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const MissionText = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 2px solid #00C853;
  margin: 40px auto;
  width: 100px;
`;

export const CallToAction = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 30px 0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const CTALink = styled.a`
  font-size: 1.1rem;
  color: #00C853;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #009640;
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 60px;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    gap: 40px;
  }
`;

export const TeamMember = styled.div`
  text-align: center;
  padding: 40px 30px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
  border: 4px solid #00C853;
`;

export const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

export const MemberRole = styled.p`
  font-size: 1.1rem;
  color: #00C853;
  font-weight: 600;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const MemberDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  font-style: italic;
`;