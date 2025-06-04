import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

interface NovoSensorModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (sensorData: any) => void;
}

export const NovoSensorModal = ({ visible, onClose, onSave }: NovoSensorModalProps) => {
  const [tipoSensor, setTipoSensor] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [unidadeMedida, setUnidadeMedida] = useState('');
  const [status, setStatus] = useState('Ativo');

  const statusOptions = ['Ativo', 'Inativo', 'Manutenção'];

  const handleSave = () => {
    onSave({
      tipoSensor,
      localizacao,
      unidadeMedida,
      status
    });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Novo Sensor</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Tipo do Sensor *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Temperatura, Umidade, Pressão..."
              value={tipoSensor}
              onChangeText={setTipoSensor}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Localização *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Prédio A - Sala 101"
              value={localizacao}
              onChangeText={setLocalizacao}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Unidade de Medida *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: °C, %, mmHg..."
              value={unidadeMedida}
              onChangeText={setUnidadeMedida}
            />
          </View>

          <View style={styles.statusGroup}>
            <Text style={styles.label}>Status</Text>
            <View style={styles.statusButtons}>
              <TouchableOpacity
                style={[styles.statusButton, status === 'Ativo' && styles.statusButtonActive]}
                onPress={() => setStatus('Ativo')}>
                <Text style={[styles.statusButtonText, status === 'Ativo' && styles.statusButtonTextActive]}>
                  Ativo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.statusButton, status === 'Inativo' && styles.statusButtonActive]}
                onPress={() => setStatus('Inativo')}>
                <Text style={[styles.statusButtonText, status === 'Inativo' && styles.statusButtonTextActive]}>
                  Inativo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.statusButton, status === 'Manutenção' && styles.statusButtonActive]}
                onPress={() => setStatus('Manutenção')}>
                <Text style={[styles.statusButtonText, status === 'Manutenção' && styles.statusButtonTextActive]}>
                  Manutenção
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    maxWidth: 500,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  statusGroup: {
    marginBottom: 16,
  },
  statusButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusButton: {
    flex: 1,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 4,
    borderRadius: 4,
    alignItems: 'center',
  },
  statusButtonActive: {
    backgroundColor: '#1976D2',
    borderColor: '#1976D2',
  },
  statusButtonText: {
    color: '#666',
  },
  statusButtonTextActive: {
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  cancelButtonText: {
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  saveButtonText: {
    color: 'white',
  },
});
