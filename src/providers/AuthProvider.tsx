import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { queryClient } from './RQProvider';

const AuthContext = createContext<{
  user: boolean | undefined;
  login: () => void;
  logout: () => void;
}>(undefined!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<boolean>();

  const login = () => {
    localStorage.setItem('accessToken', '123');
    setUser(true);
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    queryClient.clear();
    setUser(false);
  };

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setUser(true);
    }
  }, []);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};
