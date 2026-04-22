import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../contexts/AuthContext";
import { getHomePathByUserType, normalizeUserType } from "../utils/userType";

const RoleGate = ({ allowedTypes, children }) => {
  const { isLoggedIn, userData } = useAuth();
  const location = useLocation();

  if (!isLoggedIn || !userData?.id) {
    const redirectTarget = `${location.pathname}${location.search}${location.hash}`;
    return (
      <Navigate
        to={`/login?redirect=${encodeURIComponent(redirectTarget)}`}
        replace
      />
    );
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
