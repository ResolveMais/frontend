import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  width: 100%;
  padding: 64px 5% 64px;
  background: #f7faf9;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 22px;
`;

export const Kicker = styled.span`
  color: #00a846;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  color: #1f2933;
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 1.55rem;
  }
`;

export const SearchField = styled.div`
  width: 100%;
  max-width: 720px;
  margin-bottom: 14px;
`;

export const SearchInput = styled.input`
  width: 100%;
  min-height: 48px;
  border: 1px solid #d8e2dc;
  border-radius: 8px;
  background: #ffffff;
  color: #25313d;
  font-size: 1rem;
  outline: none;
  padding: 0 16px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: #7a8a99;
  }

  &:focus {
    border-color: #00c853;
    box-shadow: 0 0 0 3px rgba(0, 200, 83, 0.14);
  }
`;

export const ResultsInfo = styled.p`
  color: #5f6f7e;
  font-size: 0.92rem;
  margin: 0 0 16px;
`;

export const CompanyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const CompanyCard = styled.article`
  min-height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  padding: 20px;
  border: 1px solid #dfe8e3;
  border-radius: 8px;
  background: #ffffff;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CompanyName = styled.h3`
  color: #1f2933;
  font-size: 1.08rem;
  line-height: 1.3;
  font-weight: 700;
  overflow-wrap: anywhere;
`;

export const CompanyMeta = styled.span`
  color: #667887;
  font-size: 0.86rem;
  line-height: 1.4;
`;

export const CompanyDescription = styled.p`
  color: #4d5c68;
  font-size: 0.94rem;
  line-height: 1.55;
  overflow-wrap: anywhere;
`;

export const DashboardLink = styled(Link)`
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  padding: 0 16px;
  border: 1px solid #00c853;
  border-radius: 8px;
  background: #00c853;
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover {
    background: #00b853;
    border-color: #00b853;
  }
`;

export const StateMessage = styled.p`
  width: 100%;
  padding: 18px 0;
  color: #4d5c68;
  font-size: 0.98rem;
`;
