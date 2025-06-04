import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from './src/Navigation/AuthStack';
import { MainStack } from './src/Navigation/MainStack';

export default function App() {
  // TODO: Mudar para false depois de testar
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
