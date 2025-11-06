import React, { useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./styles";

const LoggedHeader = () => {
  const { userData, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogout, setShowLogout] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  const handleNavigation = (page) => {
    navigate(`/${page.toLowerCase()}`);
  }

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  }

  // Função para verificar se a página está ativa
  const isActivePage = (page) => {
    const path = location.pathname.toLowerCase();
    const pagePath = `/${page.toLowerCase()}`;
    return path === pagePath || (page === 'home' && path === '/');
  };

  // Função para pegar as iniciais do usuário
  const getUserInitials = () => {
    if (!userData?.name) return "GS";
    const names = userData.name.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  return (
    <header style={styles.headerContainer}>
      <div style={styles.leftSection}>
        <img 
          src="/assets/flaticon.svg" 
          alt="Resolve + Logo" 
          style={styles.logo}
        />
      </div>

      <nav style={styles.navSection}>
        <ul style={styles.navList}>
          <li 
            style={isActivePage('configuracoes') ? styles.navItemActive : styles.navItem}
            onClick={() => handleNavigation('configuracoes')}
          >
            Configurações
          </li>
          <li 
            style={isActivePage('home') ? styles.navItemActive : styles.navItem}
            onClick={() => handleNavigation('home')}
          >
            Home
          </li>
          <li 
            style={isActivePage('atendimentos') ? styles.navItemActive : styles.navItem}
            onClick={() => handleNavigation('atendimentos')}
          >
            Atendimentos
          </li>
        </ul>
      </nav>

      <div style={styles.rightSection}>
        <div style={styles.userInfo}>
          <span style={styles.userName}>{userData?.name || "Gabriel Soares"}</span>
        </div>
        
        <div style={styles.userMenuContainer}>
          <div 
            style={styles.userAvatar}
            onClick={toggleLogout}
          >
            {getUserInitials()}
          </div>
          
          {showLogout && (
            <button 
              style={styles.logoutButton} 
              onClick={handleLogout}
            >
              Sair
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default LoggedHeader;