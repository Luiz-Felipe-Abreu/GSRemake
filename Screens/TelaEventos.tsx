import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NovoEventoModal } from '../Components/NovoEventoModal';

export default function TelaEventos() {
  const [isEventoModalVisible, setIsEventoModalVisible] = useState(false);
  const [eventos, setEventos] = useState([
    {
      id: '1',
      tipo: 'Enchente',
      local: 'Centro de São Paulo',
      nivelRisco: 'Alto',
      detalhes: 'Alerta de enchente na região central',
      data: '04/06/2025',
      hora: '14:30'
    }
  ]);

  const handleSaveEvento = (eventoData: any) => {
    const novoEvento = {
      id: (eventos.length + 1).toString(),
      ...eventoData,
      data: new Date().toLocaleDateString('pt-BR'),
      hora: new Date().toLocaleTimeString('pt-BR')
    };
    setEventos([...eventos, novoEvento]);
    setIsEventoModalVisible(false);
  };

  const getNivelRiscoCor = (nivel: string) => {
    switch (nivel.toLowerCase()) {
      case 'crítico':
        return '#FF4444';
      case 'alto':
        return '#FF8800';
      case 'médio':
        return '#FFBB33';
      default:
        return '#00C851';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Eventos Monitorados</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setIsEventoModalVisible(true)}
        >
          <Ionicons name="add" size={24} color="#1976D2" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventoCard}>
            <View style={styles.eventoHeader}>
              <Text style={styles.eventoTipo}>{item.tipo}</Text>
              <View style={[styles.riskTag, { backgroundColor: getNivelRiscoCor(item.nivelRisco) }]}>
                <Text style={styles.riskText}>{item.nivelRisco}</Text>
              </View>
            </View>
            <Text style={styles.eventoLocal}>{item.local}</Text>
            <Text style={styles.eventoDetalhes}>{item.detalhes}</Text>
            <Text style={styles.eventoData}>
              Registrado em: {item.data} às {item.hora}
            </Text>
          </View>
        )}
      />

      <NovoEventoModal
        visible={isEventoModalVisible}
        onClose={() => setIsEventoModalVisible(false)}
        onSave={handleSaveEvento}
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
  eventoCard: {
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
  eventoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventoTipo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  riskTag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  riskText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '500',
  },
  eventoLocal: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  eventoDetalhes: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  eventoData: {
    fontSize: 12,
    color: '#999',
  },
});
