import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NovoSensorModal } from '../Components/NovoSensorModal';
import { Sensor } from '../Types/Types';



export default function TelaSensores() {
  const [isSensorModalVisible, setIsSensorModalVisible] = useState(false);
  // Dados virão da API Java
  const sensores: Sensor[] = [];

  const handleSaveSensor = (sensorData: any) => {
    // TODO: Enviar dados para API Java
    console.log('Dados do sensor para API:', sensorData);
    
    setIsSensorModalVisible(false);
    // Após salvar na API, recarregar a lista de sensores
  };

  const getStatusColor = (status: string) => {
    return status === 'ATIVO' ? '#4CAF50' : '#FF4444';
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gerenciar Sensores</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sensores</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setIsSensorModalVisible(true)}
          >
            <Ionicons name="add" size={20} color="#1976D2" />
          </TouchableOpacity>
        </View>

        {sensores.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum sensor cadastrado</Text>
          </View>
        ) : (
          <FlatList
            data={sensores}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.sensorCard}>
                <View style={styles.sensorInfo}>
                  <Text style={styles.sensorTipo}>{item.tipo}</Text>
                  <Text style={styles.sensorLocalizacao}>{item.localizacao}</Text>
                  <Text style={styles.sensorStatus}>Status: {item.status}</Text>
                </View>
                <View style={styles.cardActions}>
                  <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      <NovoSensorModal
        visible={isSensorModalVisible}
        onClose={() => setIsSensorModalVisible(false)}
        onSave={handleSaveSensor}
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
  sensorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sensorInfo: {
    flex: 1,
  },
  sensorTipo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  sensorLocalizacao: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  sensorStatus: {
    fontSize: 13,
    color: '#666',
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
});