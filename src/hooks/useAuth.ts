import {
  User,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import { serverTimestamp } from 'firebase/firestore';
import app from '../firebase/firebase';
import useDb from './useDb';
import {
  useAuthReturnValue,
  AuthState,
  AuthStateReducerAction,
  UserInfo,
} from '../types';
import { Reducer, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const formatUser = (user: User): UserInfo => {
  if (!user) {
    return null;
  }
  return {
    name: user.displayName as string,
    photoURL: user.photoURL as string,
    createdAt: serverTimestamp(),
    uid: user.uid,
  };
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: undefined,
};

const authStateReducer: Reducer<AuthState, AuthStateReducerAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'START_LOGIN': {
      return {
        ...state,
        loading: true,
        error: undefined,
        user: action.user,
      };
    }
    case 'LOGIN_SUCCESSFUL': {
      return {
        ...state,
        loading: false,
        error: undefined,
        user: action.user,
      };
    }
    case 'LOGIN_ERROR': {
      return {
        ...state,
        loading: false,
        error: undefined,
        user: action.user,
      };
    }
    case 'SET_AUTH_STATE': {
      return {
        ...state,
        user: action.user,
        loading: false,
        error: undefined,
      };
    }
    default: {
      return state;
    }
  }
};

const useAuth = (): useAuthReturnValue => {
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), () => {
      const userState = getAuth().currentUser;
      dispatch({
        type: 'SET_AUTH_STATE',
        user: userState ? formatUser(userState) : null,
      });
    });

    return () => unsubscribe();
  }, []);

  const [{ user, loading, error }, dispatch] = useReducer(
    authStateReducer,
    initialState,
  );

  const { saveUser } = useDb();

  const signInWithGoogle = async () => {
    try {
      dispatch({ type: 'START_LOGIN', user: null });
      const result = await signInWithPopup(auth, googleProvider);
      const user = formatUser(result.user);

      dispatch({ type: 'LOGIN_SUCCESSFUL', user });
      saveUser(user);

      navigate('/main');

      return user;
    } catch (error) {
      console.log(error);
      dispatch({ type: 'LOGIN_ERROR', user: null });
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  return {
    user,
    signInWithGoogle,
    signOut,
    loading,
    error,
  };
};

export default useAuth;
