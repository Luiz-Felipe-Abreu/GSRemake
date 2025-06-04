import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NovoAlertaModal } from '../Components/NovoAlertaModal';
import { Alerta } from '../Types/Types';



export default function TelaAlertas() {
  const [isAlertModalVisible, setIsAlertModalVisible] = useState(false);
  // Dados virão da API Java
  const alertas: Alerta[] = [];

  const handleSaveAlerta = (alertaData: any) => {
    // TODO: Enviar dados para API Java
    console.log('Dados do alerta para API:', alertaData);
    
    setIsAlertModalVisible(false);
    // Após salvar na API, recarregar a lista de alertas
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
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Alertas Ambientais</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Alertas</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setIsAlertModalVisible(true)}
          >
            <Ionicons name="add" size={20} color="#1976D2" />
          </TouchableOpacity>
        </View>

        {alertas.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum alerta registrado</Text>
          </View>
        ) : (
          <FlatList
            data={alertas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={[styles.alertCard, { borderLeftColor: getAlertColor(item.tipo) }]}>
                <View style={styles.alertInfo}>
                  <Text style={styles.alertTitulo}>
                    {item.tipo}: {item.titulo}
                  </Text>
                  <Text style={styles.alertEvento}>
                    {item.evento} • {item.data}, {item.hora}
                  </Text>
                  <Text style={styles.alertUrgencia}>
                    Urgência: {item.urgencia}
                  </Text>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

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
    backgroundColor: '#E5E5E5',
  },
  header: {
    backgroundColor: '#1976D2',
    paddingVertical: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
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
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  alertCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    borderLeftWidth: 4,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  alertInfo: {
    flex: 1,
  },
  alertTitulo: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  alertEvento: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  alertUrgencia: {
    fontSize: 12,
    color: '#666',
  },
}); 