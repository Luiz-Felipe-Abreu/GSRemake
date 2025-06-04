import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

interface NovoSensorModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (sensorData: any) => void;
}

export const NovoSensorModal = ({ visible, onClose, onSave }: NovoSensorModalProps) => {
  const [tipo, setTipo] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [unidadeMedida, setUnidadeMedida] = useState('');
  const [status, setStatus] = useState('Ativo');

  const handleSave = () => {
    onSave({
      tipo,
      localizacao,
      unidadeMedida,
      status
    });
    setTipo('');
    setLocalizacao('');
    setUnidadeMedida('');
    setStatus('Ativo');
    onClose();
  };

  const handleCancel = () => {
    setTipo('');
    setLocalizacao('');
    setUnidadeMedida('');
    setStatus('Ativo');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Novo Sensor</Text>
            <TouchableOpacity onPress={handleCancel} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Tipo do Sensor *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Temperatura, Umidade, Pressão..."
              value={tipo}
              onChangeText={setTipo}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Localização *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Prédio A - Sala 101"
              value={localizacao}
              onChangeText={setLocalizacao}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Unidade de Medida *</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: °C, %, mmHg..."
              value={unidadeMedida}
              onChangeText={setUnidadeMedida}
              placeholderTextColor="#999"
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
                style={[styles.statusButton, status === 'Inativo' && styles.statusButtonInactive]}
                onPress={() => setStatus('Inativo')}>
                <Text style={[styles.statusButtonText, status === 'Inativo' && styles.statusButtonTextInactive]}>
                  Inativo
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.statusButton, status === 'Manutenção' && styles.statusButtonMaintenance]}
                onPress={() => setStatus('Manutenção')}>
                <Text style={[styles.statusButtonText, status === 'Manutenção' && styles.statusButtonTextMaintenance]}>
                  Manutenção
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
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
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  closeButton: {
    padding: 4,
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#FAFAFA',
    color: '#333',
  },
  statusGroup: {
    marginBottom: 24,
  },
  statusButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  statusButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  statusButtonActive: {
    backgroundColor: '#1976D2',
    borderColor: '#1976D2',
  },
  statusButtonInactive: {
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
  },
  statusButtonMaintenance: {
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
  },
  statusButtonText: {
    fontSize: 14,
    color: '#666',
  },
  statusButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  statusButtonTextInactive: {
    color: '#666',
  },
  statusButtonTextMaintenance: {
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  cancelButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});
