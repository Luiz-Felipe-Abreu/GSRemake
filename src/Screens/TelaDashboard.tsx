import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { DashboardAlerta, DashboardEvento, DashboardSensor } from '../Types/Types';



export default function TelaDashboard() {
  const [alertas] = useState<DashboardAlerta[]>([]);
  const [sensores] = useState<DashboardSensor[]>([]);
  const [eventos] = useState<DashboardEvento[]>([]);

  const getAlertColor = (tipo: string) => {
    switch (tipo) {
      case 'ALERTA':
        return '#FF4444';
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
        {/* Seção do título */}
        <View style={styles.titleSection}>
          <Text style={styles.contentTitle}>EcoSafe Dashboard</Text>
          <Text style={styles.contentSubtitle}>Monitoramento Ambiental em Tempo Real</Text>
        </View>

        {/* Alertas ativos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Alertas ativos ( {alertas.length} )</Text>
          
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

        {/* Leituras recentes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Leituras recentes</Text>
          
          {sensores.map((sensor) => (
            <View key={sensor.id} style={styles.sensorCard}>
              <View style={styles.sensorHeader}>
                <Text style={styles.sensorName}>{sensor.nome}</Text>
                <Text style={styles.sensorDate}>{sensor.data}, {sensor.hora}</Text>
              </View>
              <Text style={styles.sensorValue}>Valor: {sensor.valor}</Text>
            </View>
          ))}
        </View>

        {/* Eventos recentes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Eventos recentes</Text>
          
          {eventos.map((evento) => (
            <View key={evento.id} style={[styles.eventoCard, { borderLeftColor: evento.cor }]}>
              <Text style={styles.eventoTitulo}>{evento.tipo}</Text>
              <Text style={styles.eventoRisco}>Risco: {evento.risco} • {evento.data}, {evento.hora}</Text>
              <Text style={styles.eventoDescricao}>{evento.descricao}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  titleSection: {
    padding: 16,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    marginBottom: 16,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 4,
  },
  contentSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
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
  alertType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  alertDate: {
    fontSize: 12,
    color: '#666',
  },
  sensorCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#1976D2',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  sensorHeader: {
    marginBottom: 8,
  },
  sensorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  sensorDate: {
    fontSize: 12,
    color: '#666',
  },
  sensorValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1976D2',
  },
  eventoCard: {
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
  eventoTitulo: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  eventoRisco: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  eventoDescricao: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});
