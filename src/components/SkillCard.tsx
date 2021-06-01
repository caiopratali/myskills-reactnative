import React from 'react';

import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.skillContainer} {...rest}>
      <Text style={styles.text}>
        {skill}
      </Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skillContainer: {
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    paddingVertical: 14,
    borderRadius: 30,
    marginBottom: 20
  },
  text: { 
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff'
  },
});