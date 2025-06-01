import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            <Route element={<Layout />}>
                <Route path="/" Component={Home} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;