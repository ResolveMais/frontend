import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SimpleLayout from "../layout/SimpleLayout";
import TeamPage from "../pages/Team";
import Empresa from "../pages/Empresa";
import OpenTicket from "../pages/NewTicketForm.jsx";
import PendingTickets from "../components/PendingTickets/index.jsx";
import ClosedTickets from "../pages/ClosedTickets/index.jsx";
import UserData from "../pages/UserData/index.jsx";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/empresa" Component={Empresa} />
            <Route path="/team" Component={TeamPage} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/home" Component={Home} />
            <Route path="/configuracoes" Component={UserData} />
            <Route path="/OpenTicket" Component={OpenTicket} />
            <Route path="/landing" Component={Landing} />
            <Route path="/PendingTickets" Component={PendingTickets} />
            <Route path="/ClosedTickets" Component={ClosedTickets} />
            <Route element={<SimpleLayout />}>
                <Route path="/" Component={Landing} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;