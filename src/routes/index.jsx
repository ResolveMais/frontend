import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
        </div>
    );
}

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