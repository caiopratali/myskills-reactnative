import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Platform, Text, StyleSheet } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string
};

export function Button({ text, ...rest } : ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest} activeOpacity={0.8}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#a370f7',
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
})