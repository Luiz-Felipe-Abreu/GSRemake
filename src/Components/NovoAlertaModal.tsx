import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NovoAlertaModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (alertaData: any) => void;
}

export const NovoAlertaModal = ({ visible, onClose, onSave }: NovoAlertaModalProps) => {
  const [evento, setEvento] = useState('Enchente');
  const [mensagem, setMensagem] = useState('');
  const [nivelUrgencia, setNivelUrgencia] = useState('Baixo');

  const tiposEvento = ['Enchente', 'Vento Forte', 'Incêndio Florestal'];
  const niveisUrgencia = ['Baixo', 'Médio', 'Alto', 'Crítico'];

  const handleSave = () => {
    onSave({
      evento,
      mensagem,
      nivelUrgencia
    });
    setEvento('Enchente');
    setMensagem('');
    setNivelUrgencia('Baixo');
    onClose();
  };

  const handleCancel = () => {
    setEvento('Enchente');
    setMensagem('');
    setNivelUrgencia('Baixo');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Novo Alerta</Text>
            <TouchableOpacity onPress={handleCancel} style={styles.closeButton}>
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Evento *</Text>
            <View style={styles.buttonGroup}>
              {tiposEvento.map((tipo) => (
                <TouchableOpacity
                  key={tipo}
                  style={[styles.button, evento === tipo && styles.buttonActive]}
                  onPress={() => setEvento(tipo)}>
                  <Text style={[styles.buttonText, evento === tipo && styles.buttonTextActive]}>
                    {tipo}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Mensagem *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder=""
              value={mensagem}
              onChangeText={setMensagem}
              multiline
              numberOfLines={4}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nível de Urgência</Text>
            <View style={styles.buttonGrid}>
              {niveisUrgencia.map((nivel) => (
                <TouchableOpacity
                  key={nivel}
                  style={[
                    styles.urgencyButton,
                    nivelUrgencia === nivel && styles.buttonActive
                  ]}
                  onPress={() => setNivelUrgencia(nivel)}>
                  <Text
                    style={[
                      styles.buttonText,
                      nivelUrgencia === nivel && styles.buttonTextActive
                    ]}>
                    {nivel}
                  </Text>
                </TouchableOpacity>
              ))}
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
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 12,
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonActive: {
    backgroundColor: '#1976D2',
    borderColor: '#1976D2',
  },
  buttonText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  buttonTextActive: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  urgencyButton: {
    width: '48%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
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
