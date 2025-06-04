import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import TelaEventos from '../Screens/TelaEventos';
import TelaConfig from '../Screens/TelaConfig';
import TelaDashboard from '../Screens/TelaDashboard';

type TabParamList = {
  'Início': undefined;
  'Sensores': undefined;
  'Alertas': undefined;
  'Eventos': undefined;
  'Config': undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#1976D2',
        tabBarInactiveTintColor: '#666',
        headerStyle: {
          backgroundColor: '#1976D2',
        },
        headerTitleStyle: {
          color: '#FFF',
          fontSize: 20,
        },
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#FFF',
          borderTopWidth: 1,
          borderTopColor: '#E0E0E0',
        },
      }}>
      <Tab.Screen
        name="Início"
        component={TelaDashboard}
        options={{
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sensores"
        component={TelaEventos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hardware-chip-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Alertas"
        component={TelaEventos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="warning-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Eventos"
        component={TelaEventos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={TelaConfig}
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="MainTabs" 
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
