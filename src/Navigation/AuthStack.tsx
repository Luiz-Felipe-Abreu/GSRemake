import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../Screens/TelaLogin';
import TelaCadastro from '../Screens/TelaCadastro';
import { AuthStackParamList } from '../Types/Types';



const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#1976D2' },
      }}
    >
      <Stack.Screen name="Login" component={TelaLogin} />
      <Stack.Screen name="Cadastro" component={TelaCadastro} />
    </Stack.Navigator>
  );
}
