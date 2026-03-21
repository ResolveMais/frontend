import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../contexts/AuthContext";
import { getHomePathByUserType, normalizeUserType } from "../utils/userType";

const RoleGate = ({ allowedTypes, children }) => {
  const { isLoggedIn, userData } = useAuth();

  if (!isLoggedIn || !userData?.id) {
    return <Navigate to="/login" replace />;
  }

  const currentType = normalizeUserType(userData?.userType);
  const canAccess = allowedTypes.includes(currentType);

  if (!canAccess) {
    return <Navigate to={getHomePathByUserType(currentType)} replace />;
  }

  return children;
};

RoleGate.propTypes = {
  allowedTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
};

export default RoleGate;
