// src/screens/auth/ForgotPasswordScreen.js
import React, { useState } from 'react';
import { Text, StyleSheet, ScrollView, Alert } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import { colors, fonts, spacing } from '../../constants/theme';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      Alert.alert('Email needed', 'Palihug i-type ang husto nga school email.');
      return;
    }
    // DEMO: wala pay tinuod nga email nga ipadala. Supabase sa ulahi.
    Alert.alert(
      'Check your school email',
      'Kung naay account nga naggamit niini nga email, makadawat ka og reset link. (demo)',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Forgot password?</Text>
      <Text style={styles.subtitle}>
        It happens. Enter your school email and we'll help you get back in.
      </Text>

      <AppInput
        label="School Email"
        placeholder="you@school.edu.ph"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <AppButton title="Send reset link" onPress={handleSend} style={{ marginTop: spacing.md }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark },
  subtitle: { fontFamily: fonts.body, fontSize: 15, color: colors.textMuted, marginTop: spacing.sm, marginBottom: spacing.lg, lineHeight: 22 },
});