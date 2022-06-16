import { createContext, useContext } from 'react';
import useAuth from '../hooks/useAuth';
import { CommonProps, useAuthReturnValue } from '../types';

const AuthContext = createContext<useAuthReturnValue | null>(null);
const useAuthContext = () => useContext(AuthContext) as useAuthReturnValue;

const AuthProvider = ({ children }: CommonProps) => {
  const value = useAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
