import React from 'react';
import { AuthStack } from './AuthStack';
import { MainStack } from './MainStack';
import { useAuth } from '../Contexts/AuthContext';

export function Routes() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <MainStack /> : <AuthStack />;
}

