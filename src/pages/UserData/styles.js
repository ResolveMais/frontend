import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background:
    radial-gradient(900px 420px at 8% 2%, #dff7ec 0%, transparent 60%),
    linear-gradient(160deg, #f5fbf8 0%, #eef5f2 100%);
`;

export const MainContainer = styled.main`
  width: min(980px, 94%);
  margin: 0 auto;
  padding-top: 94px;
  padding-bottom: 24px;
  display: grid;
  gap: 18px;
`;

export const Header = styled.header`
  display: grid;
  gap: 6px;
`;

export const HeaderDate = styled.span`
  color: #456668;
  font-size: 13px;
  text-transform: capitalize;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  color: #123134;
  font-size: clamp(24px, 3.6vw, 34px);
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  color: #4f6f70;
`;

export const Form = styled.form`
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid rgba(15, 46, 47, 0.14);
  box-shadow: 0 12px 28px rgba(15, 46, 47, 0.08);
  padding: 20px;
  display: grid;
  gap: 18px;
`;

export const AvatarSection = styled.section`
  display: grid;
  gap: 12px;
  align-items: center;
  grid-template-columns: 100px 1fr;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const AvatarPreview = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  border: 2px solid rgba(16, 185, 129, 0.3);
  background: linear-gradient(135deg, #e7f8ef 0%, #d9f4e7 100%);
  display: grid;
  place-items: center;
  overflow: hidden;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AvatarPlaceholder = styled.span`
  color: #11754e;
  font-weight: 800;
  font-size: 26px;
`;

export const FieldsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ReadOnlyInfo = styled.p`
  margin: 0;
  padding: 10px 12px;
  border-radius: 10px;
  background: #f2f8f6;
  border: 1px solid rgba(15, 46, 47, 0.1);
  color: #2f4f50;
  font-size: 14px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
