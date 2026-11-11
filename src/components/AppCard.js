// src/components/AppCard.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, radius, spacing } from '../constants/theme';

// variant: 'plain' (white w/ border), 'sage' (green), 'peach' (soft peach), 'sand' (beige)
export default function AppCard({ children, variant = 'plain', style }) {
  return (
    <View
      style={[
        styles.base,
        variant === 'plain' && styles.plain,
        variant === 'sage' && { backgroundColor: colors.sage },
        variant === 'peach' && { backgroundColor: colors.peachSoft },
        variant === 'sand' && { backgroundColor: colors.sand },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radius.lg,
    padding: spacing.md,
  },
  plain: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },
});