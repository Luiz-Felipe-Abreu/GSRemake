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

  const tiposEvento = [
    { id: 'enchente', label: 'Enchente', icon: 'water-outline' },
    { id: 'vento-forte', label: 'Vento Forte', icon: 'rainy-outline' },
    { id: 'incendio', label: 'Incêndio Florestal', icon: 'flame-outline' }
  ];
  
  const niveisUrgencia = [
    { id: 'baixo', label: 'Baixo' },
    { id: 'medio', label: 'Médio' },
    { id: 'alto', label: 'Alto' },
    { id: 'critico', label: 'Crítico' }
  ];

  const handleSave = () => {
    onSave({
      evento,
      mensagem,
      nivelUrgencia
    });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Novo Alerta</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Evento *</Text>            <View style={styles.buttonGroup}>
              {tiposEvento.map(({ id, label, icon }) => (
                <TouchableOpacity
                  key={id}
                  style={[styles.button, evento === label && styles.buttonActive]}
                  onPress={() => setEvento(label)}>
                  <Ionicons 
                    name={icon} 
                    size={24} 
                    style={[styles.eventIcon, evento === label && styles.iconActive]} 
                  />
                  <Text style={[styles.buttonText, evento === label && styles.buttonTextActive]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Mensagem *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Digite a mensagem do alerta..."
              value={mensagem}
              onChangeText={setMensagem}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nível de Urgência</Text>
            <View style={styles.buttonGrid}>              {niveisUrgencia.map(({ id, label }) => (
                <TouchableOpacity
                  key={id}
                  style={[
                    styles.urgencyButton,
                    nivelUrgencia === label && styles.buttonActive
                  ]}
                  onPress={() => setNivelUrgencia(label)}>
                  <Text
                    style={[
                      styles.buttonText,
                      nivelUrgencia === label && styles.buttonTextActive
                    ]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
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
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  button: {
    flex: 1,
    margin: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#1976D2',
    borderColor: '#1976D2',
  },
  buttonText: {
    color: '#666',
  },
  buttonTextActive: {
    color: 'white',
  },
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  urgencyButton: {
    flex: 1,
    margin: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
    minWidth: '45%',
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
  eventIcon: {
    marginBottom: 4,
    color: '#666',
  },
  iconActive: {
    color: '#FFF',
  },
});
