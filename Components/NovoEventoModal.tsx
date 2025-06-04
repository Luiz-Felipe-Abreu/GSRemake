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
    { id: 'enchente', label: 'Enchente', icon: 'water-outline' },
    { id: 'incendio', label: 'Incêndio Florestal', icon: 'flame-outline' },
    { id: 'vento', label: 'Vento Forte', icon: 'rainy-outline' },
    { id: 'tempestade', label: 'Tempestade', icon: 'warning-outline' }
  ];

  const locais = [
    { id: 'sp-centro', label: 'Centro de São Paulo', cidade: 'São Paulo, SP' },
    { id: 'rj-copa', label: 'Copacabana', cidade: 'Rio de Janeiro, RJ' },
    { id: 'poa', label: 'Porto Alegre', cidade: 'Porto Alegre, RS' }
  ];
  const niveisRisco = [
    { id: 'baixo', label: 'Baixo' },
    { id: 'medio', label: 'Médio' },
    { id: 'alto', label: 'Alto' },
    { id: 'critico', label: 'Crítico' }
  ];

  const handleSave = () => {
    onSave({
      tipoEvento,
      local,
      nivelRisco,
      detalhes
    });
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Novo Evento</Text>
            <TouchableOpacity onPress={onClose}>
              <Text style={styles.closeButton}>×</Text>
            </TouchableOpacity>
          </View>          <View style={styles.formGroup}>
            <Text style={styles.label}>Tipo de Evento *</Text>
            <View style={styles.buttonGrid}>
              {tiposEvento.map(({ id, label, icon }) => (
                <TouchableOpacity
                  key={id}
                  style={[styles.eventButton, tipoEvento === label && styles.buttonActive]}
                  onPress={() => setTipoEvento(label)}>                  <Ionicons name={icon} size={24} style={[styles.eventIcon, tipoEvento === label && styles.iconActive]} />
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
              placeholder="Digite um tipo personalizado..."
              value={tipoPersonalizado}
              onChangeText={setTipoPersonalizado}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Local *</Text>
            <View style={styles.locationButtons}>
              {locais.map(({ id, label, subLabel }) => (
                <TouchableOpacity
                  key={id}
                  style={[styles.locationButton, local === label && styles.buttonActive]}
                  onPress={() => setLocal(label)}>
                  <Text style={[styles.locationLabel, local === label && styles.buttonTextActive]}>
                    {label}
                  </Text>
                  <Text style={[styles.locationSubLabel, local === label && styles.buttonTextActive]}>
                    {subLabel}
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
                  key={nivel}                  style={[styles.riskButton, nivelRisco === nivel.label && styles.buttonActive]}
                  onPress={() => setNivelRisco(nivel.label)}>
                  <Text style={[styles.buttonText, nivelRisco === nivel.label && styles.buttonTextActive]}>
                    {nivel.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Detalhes</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Digite os detalhes do evento..."
              value={detalhes}
              onChangeText={setDetalhes}
              multiline
              numberOfLines={4}
            />
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
  buttonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  eventButton: {
    width: '48%',
    margin: 4,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
  },  eventIcon: {
    marginBottom: 4,
    color: '#666',
  },
  iconActive: {
    color: '#FFF',
  },
  locationButtons: {
    marginHorizontal: -4,
  },
  locationButton: {
    margin: 4,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  locationLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  locationSubLabel: {
    fontSize: 12,
    color: '#666',
  },
  riskButton: {
    flex: 1,
    margin: 4,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    alignItems: 'center',
    minWidth: '45%',
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
