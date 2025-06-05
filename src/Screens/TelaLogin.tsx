import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAuth } from '../Contexts/AuthContext';
import { AuthStackParamList } from '../Types/Types';

export default function TelaLogin() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      setError('Por favor, preencha todos os campos');
      return;
    }
    signIn();
  };  

  const fillDemoCredentials = () => {
    setEmail('admin@ecosafe.com');
    setSenha('123456');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Ionicons name="leaf-outline" size={40} color="#fff" />
        </View>
        <Text style={styles.logoText}>EcoSafe</Text>
        <Text style={[styles.subtitle, styles.subtitleWhite]}>Sistema de Monitoramento Ambiental</Text>
      </View>

     
      <View style={styles.form}>
        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

       
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>        
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!mostrarSenha}
          />
          <TouchableOpacity
            onPress={() => setMostrarSenha(!mostrarSenha)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={mostrarSenha ? "eye-outline" : "eye-off-outline"}
              size={20}
              color="#666"
            />
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.demoButton} onPress={fillDemoCredentials}>
          <Ionicons name="flash-outline" size={20} color="#1976D2" />
          <Text style={styles.demoButtonText}>Preencher Demo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.createAccountText}>Não tem uma conta? Criar conta</Text>
        </TouchableOpacity>

           <Text style={styles.infoText}>
            ✨ Use qualquer email e senha
          </Text>
        <Text style={styles.infoTextSmall}>
          Ou clique em "Preencher Demo" para testar
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1976D2',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  form: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitleWhite: {
    color: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#1976D2',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  demoButton: {
    flexDirection: 'row',
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  demoButtonText: {
    color: '#1976D2',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
  },
  createAccountButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountText: {
    color: '#1976D2',
    fontSize: 16,
  },
  infoText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },  infoTextSmall: {
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
  errorText: {
    color: '#D32F2F',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
  },
});