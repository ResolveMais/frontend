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
    justifyContent: 'flex-end'
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
    border: '2px solid #e0e0e0'
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
    background: 'none',
    border: 'none',
    color: '#666',
    fontSize: '0.8rem',
    cursor: 'pointer',
    textDecoration: 'underline',
    padding: 0
  }
};

export default styles;