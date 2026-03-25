import styled from "styled-components";

export const Page = styled.div`
    min-height: 100vh;
    background: radial-gradient(900px 420px at 8% 2%, #dff7ec 0%, transparent 60%), linear-gradient(160deg, #f5fbf8 0%, #eef5f2 100%);
    padding-top: 90px;
`;

export const Container = styled.main`
    width: min(980px, 95%);
    margin: 0 auto;
    display: grid;
    gap: 16px;
    padding-bottom: 24px;
`;

export const Card = styled.section`
    background: #fff;
    border-radius: 14px;
    border: 1px solid rgba(15, 46, 47, .14);
    box-shadow: 0 12px 28px rgba(15, 46, 47, .08);
    padding: 18px;
`;

export const HeaderRow = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const HeaderStats = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
`;

export const Stat = styled.div`
    background: #f2f8f6;
    border: 1px solid rgba(15, 46, 47, .1);
    border-radius: 10px;
    padding: 8px 12px;
    display: grid;
    gap: 4px;
    min-width: 140px;
    color: #345657;

    span {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-weight: 600;
    }

    strong {
        font-size: 18px;
        color: #123134;
    }
`;

export const CardTitle = styled.h1`
    margin: 0;
    color: #123134;
`;

export const CardText = styled.p`
    margin: 8px 0 0;
    color: #3f5f60;
`;

export const TabsHeader = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(15, 46, 47, .12);
    padding-bottom: 12px;
    margin-bottom: 16px;
`;

export const TabButton = styled.button`
    border-radius: 999px;
    border: 1px solid rgba(15, 46, 47, .16);
    padding: 8px 14px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #f6faf8;
    color: #345657;
    cursor: pointer;
    transition: all .2s ease;

    &[data-active='true'] {
        background: #11754e;
        border-color: #11754e;
        color: #fff;
        box-shadow: 0 8px 18px rgba(17, 117, 78, .2);
    }
`;

export const TabCount = styled.span`
    font-size: 12px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 999px;
    background: rgba(17, 117, 78, .12);
    color: #11754e;

    button[data-active='true'] & {
        background: rgba(255, 255, 255, .2);
        color: #fff;
    }
`;

export const TabContent = styled.div`
    display: grid;
    gap: 16px;
`;

export const TabHeader = styled.div`
    display: flex;
    gap: 12px;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const TabDescription = styled.p`
    margin: 4px 0 0;
    color: #4b6b6c;
    font-size: 14px;
    max-width: 520px;
`;

export const ActionBar = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const SearchInput = styled.input`
    width: min(420px, 100%);
    border-radius: 10px;
    border: 1px solid rgba(15, 46, 47, .2);
    padding: 10px 12px;
    outline: none;

    &:focus {
        outline: none;
        border-color: #11754e;
        box-shadow: 0 0 0 2px rgba(17, 117, 78, .2);
    }
`;

export const Panel = styled.div`
    background: #f9fbfa;
    border-radius: 12px;
    border: 1px solid rgba(15, 46, 47, .12);
    padding: 14px;
    display: grid;
    gap: 12px;
`;

export const ItemRow = styled.div`
    border: 1px solid rgba(15, 46, 47, .14);
    border-radius: 10px;
    padding: 12px;
    display: grid;
    gap: 10px;
`;

export const Badge = styled.span`
    display: inline-flex;
    padding: 4px 10px;
    border-radius: 999px;
    background: ${({ $tone }) => ($tone === "neutral" ? "#eef2f5" : "#e7f8ef")};
    color: ${({ $tone }) => ($tone === "neutral" ? "#3b4f57" : "#11754e")};
    font-size: 12px;
    font-weight: 700;
    margin-left: 8px;
`;

export const InfoRow = styled.div`
    color: #456668;
    font-size: 14px;
`;

export const SectionTitle = styled.h2`
    margin-top: 0;
    margin-bottom: 10px;
    color: #123134;
`;

export const SectionGrid = styled.div`
    display: grid;
    gap: 12px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const SectionContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;

    @media (min-width: 680px) {
        grid-template-columns: 1fr 180px;
    }
`;

export const SectionAssociateAdmin = styled.div`
    display: grid;
    gap: 6px;
`;

export const AdminsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Label = styled.label`
    font-weight: 600;
    font-size: 13px;
    color: #123134;
`;

export const AssociateEmailInput = styled.input`
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgba(15, 46, 47, .2);
    padding: 10px 12px;
    outline: none;

    &:focus {
        outline: none;
        border-color: #11754e;
        box-shadow: 0 0 0 2px rgba(17, 117, 78, .2);
    }
`;

export const SectionButtons = styled.div`
    align-self: flex-end;
`;

export const RowActions = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

export const ReadOnlyInfo = styled.div`
    margin: 0;
    padding: 8px 10px;
    border-radius: 8px;
    background: #f2f8f6;
    border: 1px solid rgba(15, 46, 47, .1);
    color: #315050;
    font-size: 14px;
`;

export const Form = styled.form`
    display: grid;
    gap: 12px;
`;

export const FormTitle = styled.h3`
    margin: 0;
    color: #315050;
`;

export const InfosContainer = styled.div`
    display: grid;
    gap: 10px;
`;

export const EmptyState = styled.p`
    margin: 0;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px dashed rgba(15, 46, 47, .2);
    background: #f6faf8;
    color: #3f5f60;
`;
