import styled from 'styled-components';

export const Container = styled.footer`
  background-color: #ffffff;
  padding: 40px 0 20px;
  margin-top: auto;
  font-family: Arial, sans-serif;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0 20px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const MainColumns = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsletterSection = styled.div`
  padding: 0;
  min-width: 320px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NewsletterTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
  text-transform: none;
`;

export const Link = styled.a`
  display: block;
  color: #555;
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const SmallLink = styled(Link)`
  font-size: 12px;
  display: inline;
  margin-bottom: 0;
`;

export const NewsletterText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  flex: 1;
  min-width: 150px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  &::placeholder {
    color: #999;
  }
`;

export const SubscribeButton = styled.button`
  background-color: #ffffffff;
  color: #00C853;
  border: 1px solid #00C853;
  padding: 10px 16px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  white-space: nowrap;

  &:hover {
    background-color: #00C853;
    color: #ffffffff;
  }
`;

export const CopyrightContainer = styled.div`
  text-align: center;
  padding: 30px 0 0;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const CopyrightText = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

export const LegalLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Separator = styled.span`
  color: #999;
  font-size: 12px;
`;