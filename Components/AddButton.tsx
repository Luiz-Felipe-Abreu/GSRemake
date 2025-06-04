import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AddButtonProps {
  onPress: () => void;
}

export const AddButton = ({ onPress }: AddButtonProps) => {
  return (
    <TouchableOpacity style={styles.addButton} onPress={onPress}>
      <Ionicons name="add" size={24} color="#1976D2" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
