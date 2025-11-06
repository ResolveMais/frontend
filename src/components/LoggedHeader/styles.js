const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: '#fff',
    borderBottom: '1px solid #e0e0e0',
    height: '70px',
    boxSizing: 'border-box',
    width: '100%',
    margin: 0,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flex: 1
  },
  
  logo: {
    height: '40px',
    width: 'auto'
  },
  
  clientName: {
    fontSize: '0.9rem',
    color: '#666',
    marginLeft: '0.5rem'
  },
  
  navSection: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  
  navList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '3rem'
  },
  
  navItem: {
    fontSize: '1rem',
    color: '#2c3e50',
    fontWeight: 'normal',
    cursor: 'pointer',
    padding: '0.5rem 0',
    transition: 'all 0.3s ease'
  },
  
  navItemActive: {
    fontSize: '1rem',
    color: '#10b981',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '0.5rem 0',
    borderBottom: '2px solid #10b981'
  },
  
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative'
  },
  
  userAvatar: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
    border: '2px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
    }
  },
  
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  
  userName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '2px'
  },
  
  logoutButton: {
    background: '#fff',
    border: '1px solid #e74c3c',
    color: '#e74c3c',
    fontSize: '0.9rem',
    cursor: 'pointer',
    padding: '0.7rem 1.2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(231, 76, 60, 0.15)',
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '0.8rem',
    zIndex: 1001,
    transition: 'all 0.3s ease',
    width: '120px',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    '&:hover': {
      background: '#e74c3c',
      color: 'white',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(231, 76, 60, 0.25)'
    },
    '&:active': {
      transform: 'translateY(0)'
    }
  },
  
  userMenuContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  
  logoutIcon: {
    fontSize: '1rem'
  }
};

export default styles;