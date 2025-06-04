import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NovoSensorModal } from '../Components/NovoSensorModal';

export default function TelaSensores() {
  const [isSensorModalVisible, setIsSensorModalVisible] = useState(false);
  const [sensores, setSensores] = useState([
    {
      id: '1',
      tipo: 'Temperatura',
      localizacao: 'Prédio A - Sala 101',
      unidadeMedida: '°C',
      status: 'Ativo',
      valor: '24.5'
    }
  ]);

  const handleSaveSensor = (sensorData: any) => {
    const novoSensor = {
      id: (sensores.length + 1).toString(),
      ...sensorData,
      valor: '0'
    };
    setSensores([...sensores, novoSensor]);
    setIsSensorModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gerenciar Sensores</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setIsSensorModalVisible(true)}
        >
          <Ionicons name="add" size={24} color="#1976D2" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={sensores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.sensorCard}>
            <Text style={styles.sensorTitle}>{item.tipo}</Text>
            <Text style={styles.sensorInfo}>Localização: {item.localizacao}</Text>
            <Text style={styles.sensorInfo}>
              Valor Atual: {item.valor} {item.unidadeMedida}
            </Text>
            <View style={[styles.statusTag, { backgroundColor: item.status === 'Ativo' ? '#4CAF50' : '#999' }]}>
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
          </View>
        )}
      />

      <NovoSensorModal
        visible={isSensorModalVisible}
        onClose={() => setIsSensorModalVisible(false)}
        onSave={handleSaveSensor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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
  sensorCard: {
    backgroundColor: '#FFF',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sensorTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  sensorInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  statusTag: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
  },
  statusText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
});