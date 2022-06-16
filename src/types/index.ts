import { FieldValue } from 'firebase/firestore';
import React from 'react';

export interface CommonProps {
  children?: React.ReactNode;
}

export type UserInfo = {
  name: string;
  photoURL: string;
  uid: string;
  createdAt: FieldValue;
} | null;

export interface useAuthReturnValue {
  user: UserInfo;
  loading: boolean;
  error: any;
  signInWithGoogle: () => void;
  signOut: () => void;
}

export interface AuthState {
  user: UserInfo | null;
  loading: boolean;
  error: any;
}

export interface AuthStateReducerAction {
  type:
    | 'START_LOGIN'
    | 'LOGIN_SUCCESSFUL'
    | 'LOGIN_ERROR'
    | 'LOGOUT'
    | 'SET_AUTH_STATE';

  loading?: boolean;
  error?: any;
  user: UserInfo;
}

export interface ProjectType {
  name: string;
  id: string;
  todos: string[];
  ownedByuid: string;
}

export interface UserProjectsData {
  projects: ProjectType[];
  currentProjectId: number | null;
}
