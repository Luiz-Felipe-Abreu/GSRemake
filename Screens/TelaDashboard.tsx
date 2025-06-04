import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NovoAlertaModal } from '../Components/NovoAlertaModal';

export default function TelaDashboard() {
  const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);
  const [alertas, setAlertas] = useState([
    {
      id: 1,
      tipo: 'ALERTA',
      titulo: 'Risco de enchente detectado na região central de São Paulo',
      urgencia: 'alta',
      data: '03/06/2025',
      hora: '07:45:52'
    },
    {
      id: 2,
      tipo: 'CRÍTICO',
      titulo: 'Incêndio florestal em expansão - Evacuação necessária',
      urgencia: 'alta',
      data: '02/06/2025',
      hora: '22:30:51'
    },
    {
      id: 3,
      tipo: 'ATENÇÃO',
      titulo: 'Ventos fortes podem causar danos materiais',
      urgencia: 'media',
      data: '03/06/2025',
      hora: '03:45:52'
    }
  ]);

  const handleSaveAlerta = (alertaData: any) => {
    const novoAlerta = {
      id: alertas.length + 1,
      tipo: alertaData.nivelUrgencia === 'Crítico' ? 'CRÍTICO' : 
            alertaData.nivelUrgencia === 'Alto' ? 'ALERTA' : 'ATENÇÃO',
      titulo: `${alertaData.evento} - ${alertaData.mensagem}`,
      urgencia: alertaData.nivelUrgencia.toLowerCase(),
      data: new Date().toLocaleDateString('pt-BR'),
      hora: new Date().toLocaleTimeString('pt-BR')
    };
    setAlertas([novoAlerta, ...alertas]);
    setIsAlertModalVisible(false);
  };

  const getAlertColor = (tipo: string) => {
    switch (tipo) {
      case 'ALERTA':
      case 'CRÍTICO':
        return '#FF4444';
      case 'ATENÇÃO':
        return '#FFBB33';
      default:
        return '#666666';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.mainContent}>
        <View style={styles.titleSection}>
          <Text style={styles.contentTitle}>EcoSafe Dashboard</Text>
          <Text style={styles.contentSubtitle}>Monitoramento Ambiental em Tempo Real</Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Alertas Ativos ({alertas.length})
            </Text>
            <TouchableOpacity 
              style={styles.addButton}
              onPress={() => setIsAlertModalVisible(true)}
            >
              <Ionicons name="add" size={24} color="#1976D2" />
            </TouchableOpacity>
          </View>

          {alertas.map((alerta) => (
            <View key={alerta.id} style={[styles.alertCard, { borderLeftColor: getAlertColor(alerta.tipo) }]}>
              <Text style={styles.alertType}>
                {alerta.tipo}: {alerta.titulo}
              </Text>
              <Text style={styles.alertDate}>
                Urgência: {alerta.urgencia} • {alerta.data}, {alerta.hora}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <NovoAlertaModal
        visible={isAlertModalVisible}
        onClose={() => setIsAlertModalVisible(false)}
        onSave={handleSaveAlerta}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#1976D2',
    height: 48,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  titleSection: {
    padding: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  contentSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  section: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  alertCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  alertType: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  alertDate: {
    fontSize: 12,
    color: '#666',
  },
});
