import { createContext, useContext, useReducer, useCallback, useEffect, useMemo } from "react";
import { api } from "../services/api";

const initialState = createContext({
  isLoggedIn: false,
  userData: {},
  login: () => { },
  logout: () => { },
  updateUser: () => { },
  validateToken: () => { },
});

export const useAuth = () => useContext(initialState);

const reducer = (state, action) => {
  const actionMap = {
    login: () => ({
      ...state,
      isLoggedIn: true,
      userData: action.payload.user,
      token: action.payload.token,
    }),
    logout: () => ({
      ...state,
      isLoggedIn: false,
      userData: {},
    }),
    updateUser: () => ({
      ...state,
      userData: action.payload.user,
    }),
    validateToken: () => {
      const { user, token } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        userData: user,
        token,
      };
    },
  };

  return actionMap[action.type]();
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateUser = useCallback((user) => {
    dispatch({ type: 'updateUser', payload: { user } });
  }, []);

  const login = useCallback(({ user, token }) => {
    localStorage.setItem('token', token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    dispatch({ type: 'login', payload: { user, token } });
  }, []);

  const logout = useCallback(() => {
    if (state.isLoggedIn) {
      localStorage.removeItem('token');
      dispatch({ type: 'logout' });
    }
  }, [state]);

  const validateToken = useCallback(async (token) => {
    try {
      const response = await api.get("/auth/me");

      if (response.status === 200) {
        const { user } = response.data;
        login({ user, token });
        updateUser(user);
      } else {
        logout();
      }
    } catch (err) {
      console.error("Token validation failed:", err);
      logout();
    }
  }, [login, logout, updateUser]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) return logout();

    api.defaults.headers.Authorization = `Bearer ${token}`;
    validateToken(token);
  }, [logout, validateToken]);

  const authContextValue = useMemo(() => ({
    ...state,
    login,
    logout,
    updateUser,
    validateToken,
  }), [state, login, logout, updateUser, validateToken]);

  return <initialState.Provider value={authContextValue}>{children}</initialState.Provider>;
}