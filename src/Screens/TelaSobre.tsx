import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TelaSobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#FFF" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sobre o EcoSafe</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* App Info Section */}
        <View style={styles.appSection}>
          <View style={styles.logoContainer}>
            <Ionicons name="leaf" size={48} color="#1976D2" />
          </View>
          <Text style={styles.appName}>EcoSafe</Text>
          <Text style={styles.appSubtitle}>Sistema de Monitoramento Ambiental</Text>
          <Text style={styles.versionText}>Versão 1.0.0 • Build 2024.01.15</Text>
        </View>

        {/* About Project */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre o Projeto</Text>
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionText}>
              O EcoSafe é um sistema completo de monitoramento ambiental desenvolvido 
              para detectar e alertar sobre riscos ambientais como enchentes, incêndios 
              florestais e eventos fortes.
            </Text>
            <Text style={styles.descriptionText}>
              Criado como projeto acadêmico para a disciplina de Desenvolvimento Mobile, o 
              app integra sensores IoT com uma interface moderna e intuitiva.
            </Text>
          </View>
        </View>

        {/* Main Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recursos Principais</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <Ionicons name="time" size={32} color="#1976D2" />
              <Text style={styles.featureTitle}>Monitoramento em Tempo Real</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="warning" size={32} color="#1976D2" />
              <Text style={styles.featureTitle}>Sistema de Alertas Inteligente</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="hardware-chip" size={32} color="#1976D2" />
              <Text style={styles.featureTitle}>Gestão de Sensores IoT</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="bar-chart" size={32} color="#1976D2" />
              <Text style={styles.featureTitle}>Relatórios Automáticos</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="phone-portrait" size={32} color="#1976D2" />
              <Text style={styles.featureTitle}>Interface Intuitiva</Text>
            </View>
            <View style={styles.featureCard}>
              <Ionicons name="cloud-upload" size={32} color="#1976D2" />
              <Text style={styles.featureTitle}>Backup de Dados</Text>
            </View>
          </View>
        </View>

        {/* Statistics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Estatísticas</Text>
          <View style={styles.statsGrid}>
            <View style={styles.statCard}>
              <Ionicons name="hardware-chip" size={24} color="#1976D2" />
              <Text style={styles.statNumber}>500+</Text>
              <Text style={styles.statLabel}>Sensores Suportados</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="people" size={24} color="#1976D2" />
              <Text style={styles.statNumber}>1,200+</Text>
              <Text style={styles.statLabel}>Usuários Ativos</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="notifications" size={24} color="#1976D2" />
              <Text style={styles.statNumber}>10,000+</Text>
              <Text style={styles.statLabel}>Alertas Processados</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="server" size={24} color="#1976D2" />
              <Text style={styles.statNumber}>50GB+</Text>
              <Text style={styles.statLabel}>Dados Coletados</Text>
            </View>
          </View>
        </View>

        {/* Technologies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tecnologias Utilizadas</Text>
          <View style={styles.techCard}>
            <View style={styles.techItem}>
              <Ionicons name="logo-react" size={20} color="#1976D2" />
              <Text style={styles.techText}>React Native</Text>
              <Text style={styles.techVersion}>v0.73.2</Text>
            </View>
            <View style={styles.techItem}>
              <Ionicons name="tablet-portrait" size={20} color="#1976D2" />
              <Text style={styles.techText}>Expo</Text>
              <Text style={styles.techVersion}>v50.0.0</Text>
            </View>
            <View style={styles.techItem}>
              <Ionicons name="code-slash" size={20} color="#1976D2" />
              <Text style={styles.techText}>TypeScript</Text>
              <Text style={styles.techVersion}>v5.3.0</Text>
            </View>
            <View style={styles.techItem}>
              <Ionicons name="server" size={20} color="#1976D2" />
              <Text style={styles.techText}>Java Spring</Text>
              <Text style={styles.techVersion}>v3.2.0</Text>
            </View>
            <View style={styles.techItem}>
              <Ionicons name="server" size={20} color="#1976D2" />
              <Text style={styles.techText}>PostgreSQL</Text>
              <Text style={styles.techVersion}>v15.0</Text>
            </View>
          </View>
        </View>

        {/* Development Team */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Equipe de Desenvolvimento</Text>
          <View style={styles.teamCard}>
            <View style={styles.teamMember}>
              <View style={styles.memberAvatar}>
                <Ionicons name="person" size={20} color="#1976D2" />
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Matheus Munuera</Text>
                <Text style={styles.memberRole}>Desenvolvedor Frontend</Text>
                <Text style={styles.memberEmail}>matheus@ecosafe.com</Text>
              </View>
              <TouchableOpacity style={styles.contactButton}>
                <Ionicons name="mail" size={16} color="#1976D2" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.teamMember}>
              <View style={styles.memberAvatar}>
                <Ionicons name="person" size={20} color="#1976D2" />
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Luiz Felipe</Text>
                <Text style={styles.memberRole}>Desenvolvedor Backend</Text>
                <Text style={styles.memberEmail}>luiz@ecosafe.com</Text>
              </View>
              <TouchableOpacity style={styles.contactButton}>
                <Ionicons name="mail" size={16} color="#1976D2" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.teamMember}>
              <View style={styles.memberAvatar}>
                <Ionicons name="person" size={20} color="#1976D2" />
              </View>
              <View style={styles.memberInfo}>
                <Text style={styles.memberName}>Pedro Henrique</Text>
                <Text style={styles.memberRole}>Designer UX/UI</Text>
                <Text style={styles.memberEmail}>pedro@ecosafe.com</Text>
              </View>
              <TouchableOpacity style={styles.contactButton}>
                <Ionicons name="mail" size={16} color="#1976D2" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2025 EcoSafe Team • Desenvolvido com</Text>
          <View style={styles.heartContainer}>
            <Ionicons name="heart" size={16} color="#E53E3E" />
            <Text style={styles.footerText}> para o meio ambiente</Text>
          </View>
          <Text style={styles.footerSubtext}>Mobile Application Development • Universidade XYZ</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    backgroundColor: '#1976D2',
    paddingTop: 48,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  backText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  content: {
    flex: 1,
  },
  appSection: {
    backgroundColor: '#FFF',
    paddingTop: 32,
    paddingBottom: 32,
    alignItems: 'center',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  appSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  versionText: {
    fontSize: 14,
    color: '#999',
  },
  section: {
    margin: 16,
    marginTop: 0,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  descriptionCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 12,
    textAlign: 'justify',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  featureTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  techCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  techItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  techText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
  techVersion: {
    fontSize: 14,
    color: '#666',
  },
  teamCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  teamMember: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  memberEmail: {
    fontSize: 12,
    color: '#1976D2',
    marginTop: 2,
  },
  contactButton: {
    padding: 8,
  },
  footer: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  heartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
  },
}); 