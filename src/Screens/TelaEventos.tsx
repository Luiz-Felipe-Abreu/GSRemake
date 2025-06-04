import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NovoEventoModal } from '../Components/NovoEventoModal';
import { Evento } from '../Types/Types';



export default function TelaEventos() {
  const [isEventoModalVisible, setIsEventoModalVisible] = useState(false);
  // Dados virão da API Java
  const eventos: Evento[] = [];

  const handleSaveEvento = (eventoData: any) => {
    // TODO: Enviar dados para API Java
    console.log('Dados do evento para API:', eventoData);
    
    setIsEventoModalVisible(false);
    // Após salvar na API, recarregar a lista de eventos
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
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Eventos Ambientais</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Eventos</Text>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => setIsEventoModalVisible(true)}
          >
            <Ionicons name="add" size={20} color="#1976D2" />
          </TouchableOpacity>
        </View>

        {eventos.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum evento registrado</Text>
          </View>
        ) : (
          <FlatList
            data={eventos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.eventoCard}>
                <View style={styles.eventoContent}>
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
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>

      <NovoEventoModal
        visible={isEventoModalVisible}
        onClose={() => setIsEventoModalVisible(false)}
        onSave={handleSaveEvento}
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
  eventoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  eventoContent: {
    flex: 1,
  },
  eventoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  eventoTipo: {
    fontSize: 16,
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
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  eventoDetalhes: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  eventoData: {
    fontSize: 12,
    color: '#999',
  },
});
