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
  color: #10b981; /* Verde (Tailwind emerald-500) */
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

export const AvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  object-fit: cover;
  border: 2px solid #10b981;
`;

export const Main = styled.main`
  flex: 1;
  max-width: 900px;
  margin: 0 auto;
`;

/* Welcome Section */
export const WelcomeTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const WelcomeSubtitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #6b7280; /* tailwind gray-500 */
  margin-bottom: 24px;
`;

/* Action Buttons */
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
  font-size: 14px;
  padding: 22px 28px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.35);
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #059669;
  }
`;

export const ActionIcon = styled.div`
  width: 34px;
  height: 34px;
  svg, img {
    width: 100%;
    height: 100%;
    fill: white;
  }
`;

/* Updates Section */
export const UpdatesTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const UpdatesGrid = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const UpdateCard = styled.div`
  background: white;
  border-radius: 14px;
  border: 1px solid #d1d5db; /* gray-300 */
  padding: 16px 20px;
  min-width: 220px;
  max-width: 280px;
  box-sizing: border-box;
  cursor: default;
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
  font-size: 16px;
  color: #111827;
  margin: 0 0 6px 0;
  display: flex;
  align-items: center;
`;

export const UpdateDescription = styled.p`
  margin: 0 0 6px 22px;
  font-size: 14px;
  color: #6b7280;
`;

export const UpdateTime = styled.p`
  margin: 0 0 0 22px;
  font-size: 12px;
  color: #9ca3af;
`;