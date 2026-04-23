import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import TeamPage from "../pages/Team";
import Empresa from "../pages/Empresa";
import PublicCompanyDashboard from "../pages/PublicCompanyDashboard";

import ClientHome from "../areas/cliente/pages/Home";
import ClientOpenTicket from "../areas/cliente/pages/OpenTicket";
import ClientPendingTickets from "../areas/cliente/pages/PendingTickets";
import ClientClosedTickets from "../areas/cliente/pages/ClosedTickets";
import ClientUserData from "../areas/cliente/pages/UserData";
import ClientChatbot from "../areas/cliente/pages/Chatbot";

import EmployeeHome from "../areas/funcionario/pages/Home";
import EmployeeUserData from "../areas/funcionario/pages/UserData";
import EmployeeChat from "../areas/funcionario/pages/Atendimento";
import CompanyHome from "../areas/empresa/pages/Home";
import CompanyAdmins from "../areas/empresa/pages/Admins";
import CompanyComplaintTitles from "../areas/empresa/pages/ComplaintTitles";
import CompanySettings from "../areas/empresa/pages/Settings";
import CompanyTicketsPage from "../areas/empresa/pages/Tickets";
import CompanyUserData from "../areas/empresa/pages/UserData";
import CompanyInfo from "../areas/funcionario/pages/CompanyInfo";

import RoleGate from "./RoleGate";
import { USER_TYPES } from "../utils/userType";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route
        path="/empresa/:companyId/dashboard"
        element={<PublicCompanyDashboard />}
      />
      <Route
        path="/empresas/:companyId/dashboard"
        element={<PublicCompanyDashboard />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/cliente/home"
        element={
          <RoleGate allowedTypes={[USER_TYPES.CLIENTE]}>
            <ClientHome />
          </RoleGate>
        }
      />
      <Route
        path="/cliente/open-ticket"
        element={
          <RoleGate allowedTypes={[USER_TYPES.CLIENTE]}>
            <ClientOpenTicket />
          </RoleGate>
        }
      />
      <Route
        path="/cliente/pending-tickets"
        element={
          <RoleGate allowedTypes={[USER_TYPES.CLIENTE]}>
            <ClientPendingTickets />
          </RoleGate>
        }
      />
      <Route
        path="/cliente/closed-tickets"
        element={
          <RoleGate allowedTypes={[USER_TYPES.CLIENTE]}>
            <ClientClosedTickets />
          </RoleGate>
        }
      />
      <Route
        path="/cliente/configuracoes"
        element={
          <RoleGate allowedTypes={[USER_TYPES.CLIENTE]}>
            <ClientUserData />
          </RoleGate>
        }
      />
      <Route
        path="/cliente/chatbot"
        element={
          <RoleGate allowedTypes={[USER_TYPES.CLIENTE]}>
            <ClientChatbot />
          </RoleGate>
        }
      />

      <Route
        path="/funcionario/home"
        element={
          <RoleGate allowedTypes={[USER_TYPES.FUNCIONARIO]}>
            <EmployeeHome />
          </RoleGate>
        }
      />
      <Route
        path="/funcionario/configuracoes"
        element={
          <RoleGate allowedTypes={[USER_TYPES.FUNCIONARIO]}>
            <EmployeeUserData />
          </RoleGate>
        }
      />
      <Route
        path="/funcionario/atendimentos"
        element={
          <RoleGate allowedTypes={[USER_TYPES.FUNCIONARIO]}>
            <EmployeeChat />
          </RoleGate>
        }
      />
      <Route
        path="/funcionario/CompanyInfo"
        element={
          <RoleGate allowedTypes={[USER_TYPES.FUNCIONARIO]}>
            <CompanyInfo />
          </RoleGate>
        }
      />

      <Route
        path="/empresa/home"
        element={
          <RoleGate allowedTypes={[USER_TYPES.EMPRESA]}>
            <CompanyHome />
          </RoleGate>
        }
      />
      <Route
        path="/empresa/chamados"
        element={
          <RoleGate allowedTypes={[USER_TYPES.EMPRESA]}>
            <CompanyTicketsPage />
          </RoleGate>
        }
      />
      <Route
        path="/empresa/configuracoes"
        element={
          <RoleGate allowedTypes={[USER_TYPES.EMPRESA]}>
            <CompanySettings />
          </RoleGate>
        }
      />
      <Route
        path="/empresa/assuntos"
        element={
          <RoleGate allowedTypes={[USER_TYPES.EMPRESA]}>
            <CompanyComplaintTitles />
          </RoleGate>
        }
      />
      <Route
        path="/empresa/usuario"
        element={
          <RoleGate allowedTypes={[USER_TYPES.EMPRESA]}>
            <CompanyUserData />
          </RoleGate>
        }
      />
      <Route
        path="/empresa/administradores"
        element={
          <RoleGate allowedTypes={[USER_TYPES.EMPRESA]}>
            <CompanyAdmins />
          </RoleGate>
        }
      />

      <Route path="/home" element={<Navigate to="/cliente/home" replace />} />
      <Route
        path="/OpenTicket"
        element={<Navigate to="/cliente/open-ticket" replace />}
      />
      <Route
        path="/PendingTickets"
        element={<Navigate to="/cliente/pending-tickets" replace />}
      />
      <Route
        path="/ClosedTickets"
        element={<Navigate to="/cliente/closed-tickets" replace />}
      />
      <Route
        path="/configuracoes"
        element={<Navigate to="/cliente/configuracoes" replace />}
      />
      <Route
        path="/chatbot"
        element={<Navigate to="/cliente/chatbot" replace />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

export default AppRoutes;
