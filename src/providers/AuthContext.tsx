import { createContext, ReactNode, Reducer, useReducer, useState } from 'react';
import { User } from 'firebase/auth';
import { auth } from '../firebase';

// User object
type UserType = User | null;

// Need to store auth state
// user, loading and error

interface AuthState {
  user: UserType;
  loading: boolean;
  error: Error | null;
}

const initialAuth: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const AuthContext = createContext<AuthState>(initialAuth);

// Action type
type ActionType = 'START_LOGIN' | 'LOGIN_SUCCESSFUL' | 'LOGIN_ERROR' | 'LOGOUT';

interface Action {
  type: ActionType;
  user?: UserType;
  loading?: boolean;
  error?: Error | null;
}

// Reducer function for auth state
const authReducer: Reducer<AuthState, Action> = (
  state = initialAuth,
  action,
): AuthState => {
  switch (action.type) {
    case 'START_LOGIN': {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

interface Props {
  children?: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuth);

  return (
    <AuthContext.Provider value={initialAuth}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
