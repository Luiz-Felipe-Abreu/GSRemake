import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NovoEventoModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (eventoData: any) => void;
}

export const NovoEventoModal = ({ visible, onClose, onSave }: NovoEventoModalProps) => {
  const [tipoEvento, setTipoEvento] = useState('Enchente');
  const [local, setLocal] = useState('Centro de São Paulo');
  const [nivelRisco, setNivelRisco] = useState('Baixo');
  const [tipoPersonalizado, setTipoPersonalizado] = useState('');
  const [detalhes, setDetalhes] = useState('');

  const tiposEvento = [
    { id: 'enchente', label: 'Enchente', icon: "water-outline" },
    { id: 'incendio', label: 'Incêndio Florestal', icon: 'flame-outline' },
    { id: 'vento', label: 'Vento Forte', icon: 'cloudy-outline' },
    { id: 'tempestade', label: 'Tempestade', icon: 'thunderstorm-outline' }
  ];

  const locais = [
    { id: 'sp-centro', label: 'Centro de São Paulo', sublabel: 'São Paulo, SP' },
    { id: 'rj-sul', label: 'Zona Sul do Rio', sublabel: 'Rio de Janeiro, RJ' }
  ];

  const niveisRisco = ['Baixo', 'Médio', 'Alto', 'Crítico'];

  const handleSave = () => {
    onSave({
      tipoEvento,
      local,
      nivelRisco,
      tipoPersonalizado,
      detalhes
    });
    setTipoEvento('Enchente');
    setLocal('Centro de São Paulo');
    setNivelRisco('Baixo');
    setTipoPersonalizado('');
    setDetalhes('');
    onClose();
  };

  const handleCancel = () => {
    setTipoEvento('Enchente');
    setLocal('Centro de São Paulo');
    setNivelRisco('Baixo');
    setTipoPersonalizado('');
    setDetalhes('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Novo Evento</Text>
            <TouchableOpacity onPress={handleCancel} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Tipo de Evento *</Text>
            <View style={styles.buttonGrid}>
              {tiposEvento.map(({ id, label, icon }) => (
                <TouchableOpacity
                  key={id}
                  style={[styles.eventButton, tipoEvento === label && styles.buttonActive]}
                  onPress={() => setTipoEvento(label)}>
                  <Ionicons 
                    name={icon} 
                    size={20} 
                    style={[styles.eventIcon, tipoEvento === label && styles.iconActive]} 
                  />
                  <Text style={[styles.buttonText, tipoEvento === label && styles.buttonTextActive]}>
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Tipo Personalizado</Text>
            <TextInput
              style={styles.input}
              placeholder=""
              value={tipoPersonalizado}
              onChangeText={setTipoPersonalizado}
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Local *</Text>
            <View style={styles.locationButtons}>
              {locais.map(({ id, label, sublabel }) => (
                <TouchableOpacity
                  key={id}
                  style={[styles.locationButton, local === label && styles.buttonActive]}
                  onPress={() => setLocal(label)}>
                  <Text style={[styles.locationLabel, local === label && styles.buttonTextActive]}>
                    {label}
                  </Text>
                  <Text style={[styles.locationSubLabel, local === label && styles.buttonTextActive]}>
                    {sublabel}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Nível de Risco</Text>
            <View style={styles.buttonGrid}>
              {niveisRisco.map((nivel) => (
                <TouchableOpacity
                  key={nivel}
                  style={[styles.riskButton, nivelRisco === nivel && styles.buttonActive]}
                  onPress={() => setNivelRisco(nivel)}>
                  <Text style={[styles.buttonText, nivelRisco === nivel && styles.buttonTextActive]}>
                    {nivel}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Detalhes</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder=""
              value={detalhes}
              onChangeText={setDetalhes}
              multiline
              numberOfLines={4}
              placeholderTextColor="#999"
            />
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
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  eventButton: {
    width: '48%',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  eventIcon: {
    color: '#666',
  },
  iconActive: {
    color: '#FFFFFF',
  },
  locationButtons: {
    gap: 8,
  },
  locationButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  locationLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  locationSubLabel: {
    fontSize: 12,
    color: '#666',
  },
  riskButton: {
    width: '48%',
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
