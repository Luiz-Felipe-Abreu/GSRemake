import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../Contexts/AuthContext';

import type { AuthStackParamList, RootStackParamList } from '../Types/Types';

type ConfigScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList> & 
  NativeStackNavigationProp<RootStackParamList>;

export default function TelaConfig() {
  const navigation = useNavigation<ConfigScreenNavigationProp>();
  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Configurações</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Ionicons name="person" size={40} color="#fff" />
        </View>
        <Text style={styles.profileName}>Administrador</Text>
        <Text style={styles.profileEmail}>admin@ecosafe.com</Text>
      </View>

      <View style={styles.menuSection}>
        <Text style={styles.menuTitle}>Configurações</Text>
        
        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Perfil' as never)}
        >
          <View style={styles.menuItemContent}>
            <Ionicons name="person-outline" size={24} color="#666" />
            <Text style={styles.menuItemText}>Perfil</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.menuItem}
          onPress={() => navigation.navigate('Sobre' as never)}
        >
          <View style={styles.menuItemContent}>
            <Ionicons name="information-circle-outline" size={24} color="#666" />
            <Text style={styles.menuItemText}>Sobre</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#D32F2F" />
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#1976D2',
    padding: 16,
    paddingTop: 48,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  profileSection: {
    backgroundColor: '#1976D2',
    paddingBottom: 24,
    alignItems: 'center',
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    color: '#FFF',
    opacity: 0.9,
  },
  menuSection: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D32F2F',
  },
  logoutText: {
    fontSize: 16,
    color: '#D32F2F',
    marginLeft: 8,
  },
});
