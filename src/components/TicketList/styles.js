import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const Loading = styled.div`
  margin-top: 120px;
  font-size: 18px;
  color: #555;
`;

export const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
  position: relative;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 0;
  background: none;
  border: none;
  font-size: 26px;
  color: #333;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateX(-3px);
  }
`;

export const PageTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: #222;
`;

export const EmptyState = styled.div`
  margin-top: 50px;
  font-size: 16px;
  color: #777;
  text-align: center;
`;

export const TicketsList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 60px;
`;

export const TicketCard = styled.div`
  background: #fff;
  border-radius: 14px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.12);
  }
`;

export const TicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TicketInfo = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

export const TicketTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: #333;
  margin: 0;
`;

export const TicketStatus = styled.span`
  margin-left: 6px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ status }) =>
    status === 'aberto' ? '#e67e22' : '#27ae60'};
`;

export const VerDetalhesButton = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background-color: #00C853;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: background 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #00b84d;
    transform: scale(1.03);
  }

  &:active {
    background-color: #009d42;
    transform: scale(0.98);
  }
`;

export const TicketProtocol = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #444;
`;

/* ===== MODAL ===== */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 30px 25px;
  border-radius: 14px;
  width: 100%;
  max-width: 460px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
  color: #222;
  font-weight: 600;
  text-align: center;
`;

export const ModalInfo = styled.p`
  font-size: 15px;
  margin: 8px 0;
  color: #444;

  strong {
    color: #222;
  }
`;

export const CloseButton = styled.button`
  margin-top: 20px;
  width: 100%;
  background-color: #00C853;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: #00b84d;
  }
`;
