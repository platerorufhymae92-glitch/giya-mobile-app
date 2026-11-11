// src/components/PlaceholderScreen.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from './AppButton';
import { colors, fonts, spacing } from '../constants/theme';

// Temporary nga screen. Ilisan nato kini sa tinuod nga screen sa sunod nga mga step.
export default function PlaceholderScreen({ title, subtitle, navigation, showLogout = false }) {
  const handleLogout = () => {
    navigation.getParent().reset({ index: 0, routes: [{ name: 'Welcome' }] });
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      {showLogout && (
        <AppButton variant="outline" title="Logout" onPress={handleLogout} style={{ marginTop: spacing.lg }} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark, marginTop: spacing.md },
  subtitle: { fontFamily: fonts.body, fontSize: 15, color: colors.textMuted, marginTop: spacing.sm },
});