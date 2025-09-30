import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SimpleLayout from "../layout/SimpleLayout";
import TeamPage from "../pages/Team";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/team" Component={TeamPage} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route path="/landing" Component={Landing}/>
            <Route element={<SimpleLayout />}>
                <Route path="/" Component={Landing} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;