import styled from 'styled-components';

export const TeamContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: white;
`;

export const TeamHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  padding: 0 20px;
`;

export const MainTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #19191B;
  margin-bottom: 24px;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const MissionText = styled.p`
  font-size: 1.25rem;
  color: #5A5C62;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
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
  gap: 60px;
  margin: 50px 0 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const CTALink = styled.a`
  font-size: 1.125rem;
  color: #00C853;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  padding: 12px 24px;
  border: 2px solid #00C853;
  border-radius: 8px;
  
  &:hover {
    background: #00C853;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 200, 83, 0.3);
  }
`;

export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;
  margin-top: 60px;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 40px;
  }
`;

export const TeamMember = styled.div`
  text-align: center;
  padding: 0;
  background: transparent;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

export const MemberImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
  border-radius: 50%;
  padding: 4px;
  background: linear-gradient(135deg, #00C853, #009640);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #00C853, #009640);
    border-radius: 50%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

export const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  background: #F8F8FA;
`;

export const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #19191B;
  margin-bottom: 8px;
  line-height: 1.3;
`;

export const MemberRole = styled.p`
  font-size: 1rem;
  color: #00C853;
  font-weight: 600;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const MemberDescription = styled.p`
  font-size: 1rem;
  color: #5A5C62;
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;
`;

