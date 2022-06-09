import {
  createContext,
  ReactNode,
  Reducer,
  useContext,
  useReducer,
} from 'react';
import { User } from 'firebase/auth';
import { auth, signIn, signOut } from '../firebase';
import { useNavigate } from 'react-router-dom';

type UserType = User | null | undefined;

interface AuthState {
  user: UserType;
  loading: boolean;
  error: any;
}

const initialAuth: AuthState = {
  user: auth.currentUser,
  loading: false,
  error: null,
};

type AuthContextType = {
  user: UserType;
  loading: boolean;
  error: any;
  handleSignIn: () => void;
  handleSignOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);
const useAuthContext = () => useContext(AuthContext) as AuthContextType;

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

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      dispatch({
        type: 'START_LOGIN',
      });

      await signIn();

      dispatch({
        type: 'LOGIN_SUCCESSFUL',
        user: auth.currentUser,
      });
      navigate('/main');
    } catch (error) {
      console.log(error);
      dispatch({
        type: 'LOGIN_ERROR',
        error,
      });
    }
  };

  const handleSignOut = async () => {
    await signOut();

    dispatch({
      type: 'LOGOUT',
      user: auth.currentUser,
    });
    navigate('/');
  };

  const value = {
    user,
    loading,
    error,
    handleSignIn,
    handleSignOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuthContext };
