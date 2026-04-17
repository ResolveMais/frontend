import styled from "styled-components";

export const Container = styled.div`
  background: #f9fafb;
  min-height: 100vh;
  padding: 24px 32px;
  font-family: "Inter", sans-serif;
  color: #111827;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 0 8px;
`;

export const LogoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const LogoImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

export const LogoText = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #10b981;
`;

export const NavMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 48px;
`;

export const NavItem = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: ${(p) => (p.active ? "#10b981" : "#111827")};
  border-bottom: ${(p) =>
    p.active ? "3px solid #10b981" : "3px solid transparent"};
  padding-bottom: 6px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: #10b981;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 16px;
  color: #111827;
`;

export const UserName = styled.span`
  white-space: nowrap;
`;

export const AvatarImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  background-color: #f5f5dc;
  border: 2px solid #10b981;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const AvatarInitial = styled.p`
  margin: auto;
  font-weight: 700;
  font-size: 18px;
  color: #10b981;
`;

export const Main = styled.main`
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
`;

export const WelcomeTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const WelcomeSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #6b7280;
  margin-bottom: 24px;
`;

export const ActionsGrid = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 36px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ActionCard = styled.button`
  background-color: #10b981;
  border-radius: 12px;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 16px;
  padding: 28px 32px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.35);
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background-color: #059669;
  }
`;

export const ActionIcon = styled.div`
  width: 34px;
  height: 34px;

  svg,
  img {
    width: 100%;
    height: 100%;
    fill: white;
  }
`;

export const UpdatesTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const UpdatesGrid = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
`;

export const UpdateCard = styled.div`
  background: white;
  border-radius: 14px;
  border: 1px solid #d1d5db;
  padding: 22px 26px;
  min-width: 260px;
  max-width: 300px;
  box-sizing: border-box;
`;

export const UpdateDot = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #10b981;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
`;

export const UpdateTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  color: #111827;
  margin: 0 0 6px 0;
  display: flex;
  align-items: center;
`;

export const UpdateDescription = styled.p`
  margin: 0 0 6px 22px;
  font-size: 15px;
  color: #6b7280;
`;

export const UpdateTime = styled.p`
  margin: 0 0 0 22px;
  font-size: 13px;
  color: #9ca3af;
`;
