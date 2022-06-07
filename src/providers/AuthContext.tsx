import { createContext, ReactNode, Reducer, useReducer } from 'react';
import { User, GoogleAuthProvider } from 'firebase/auth';
import { auth, signInWithPopup, signOut as FbSignOut } from '../firebase';

// User object
type UserType = User | null | undefined;

// Need to store auth state
// user, loading and error

interface AuthState {
  user: UserType;
  loading: boolean;
  error: any;
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
  error?: any;
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
    case 'LOGIN_SUCCESSFUL': {
      return {
        user: action.user,
        loading: false,
        error: null,
      };
    }
    case 'LOGIN_ERROR': {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case 'LOGOUT': {
      return {
        user: action.user,
        loading: false,
        error: null,
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
  const [{ user, loading, error }, dispatch] = useReducer(
    authReducer,
    initialAuth,
  );

  const authProvider = new GoogleAuthProvider();

  const signIn = async () => {
    try {
      dispatch({
        type: 'START_LOGIN',
      });
      const result = await signInWithPopup(auth, authProvider);

      dispatch({
        type: 'LOGIN_SUCCESSFUL',
        user: result.user,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'LOGIN_ERROR',
        error,
      });
    }
  };

  const value = {
    user,
    loading,
    error,
    signIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
