// src/components/AppButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, fonts, radius } from '../constants/theme';

// variant: 'primary' (peach), 'green', 'outline'
export default function AppButton({ title, onPress, variant = 'primary', style, disabled = false }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.base,
        variant === 'primary' && styles.primary,
        variant === 'green' && styles.green,
        variant === 'outline' && styles.outline,
        disabled && styles.disabled,
        style,
      ]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.pill,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.peach },
  green: { backgroundColor: colors.sageButton },
  outline: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
  disabled: { opacity: 0.5 },
  text: {
    fontFamily: fonts.bodySemi,
    fontSize: 16,
    color: colors.textDark,
  },
});