import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getHomePathByUserType, normalizeUserType, USER_TYPES } from "../../utils/userType";
import styles from "./styles";

const LoggedHeader = () => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);

  const userType = normalizeUserType(userData?.userType);

  const menuItems = useMemo(() => {
    if (userType === USER_TYPES.CLIENTE) {
      return [
        { key: "configuracoes", label: "Configuracoes", path: "/cliente/configuracoes" },
        { key: "home", label: "Home", path: "/cliente/home" },
        { key: "atendimentos", label: "Atendimentos", path: "/cliente/pending-tickets" },
      ];
    }

    if (userType === USER_TYPES.EMPRESA) {
      return [
        { key: "home", label: "Home", path: "/empresa/home" },
        { key: "admins", label: "Administradores", path: "/empresa/administradores" },
      ];
    }

    return [{ key: "home", label: "Home", path: getHomePathByUserType(userType) }];
  }, [userType]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const toggleLogout = () => {
    setShowLogout((previousState) => !previousState);
  };

  const isActivePage = (path) => {
    const currentPath = location.pathname.toLowerCase();
    return currentPath === path.toLowerCase();
  };

  const getUserInitials = () => {
    if (!userData?.name) return "GS";
    const names = userData.name.trim().split(" ").filter(Boolean);
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.leftSection}>
        <img src="/assets/flaticon.svg" alt="Resolve + Logo" style={styles.logo} />
      </div>

      <nav style={styles.navSection}>
        <ul style={styles.navList}>
          {menuItems.map((item) => (
            <li
              key={item.key}
              style={isActivePage(item.path) ? styles.navItemActive : styles.navItem}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <div style={styles.rightSection}>
        <div style={styles.userInfo}>
          <span style={styles.userName}>{userData?.name || ""}</span>
        </div>

        <div style={styles.userMenuContainer}>
          <div style={styles.userAvatar} onClick={toggleLogout}>
            {getUserInitials()}
          </div>

          {showLogout && (
            <button style={styles.logoutButton} onClick={handleLogout}>
              Sair
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default LoggedHeader;
