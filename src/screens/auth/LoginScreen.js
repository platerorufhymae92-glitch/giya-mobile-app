// src/screens/auth/LoginScreen.js
import React, { useState } from 'react';
import { Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import AppButton from '../../components/AppButton';
import { colors, fonts, spacing, radius } from '../../constants/theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Missing details', 'Palihug i-type ang imong email ug password.');
      return;
    }

    // DEMO RULE: ang email nga naay "counselor" = Counselor. Kung wala = Student.
    // Ang tinuod nga role makuha gikan sa Supabase sa ulahi.
    if (email.toLowerCase().includes('counselor')) {
      navigation.replace('CounselorTabs');
    } else {
      navigation.replace('Onboarding');
    }
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Image source={require('../../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
      <Image source={require('../../../assets/images/login-banner.png')} style={styles.banner} resizeMode="cover" />

      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Welcome back. A gentler day starts here.</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="you@school.edu.ph"
        placeholderTextColor={colors.textMuted}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor={colors.textMuted}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>

      <AppButton title="Login" onPress={handleLogin} />

      <Text style={styles.note}>Only institutional accounts can access GIYA</Text>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.note}>
          New to GIYA? <Text style={styles.register}>Register</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg },
  logo: { width: 160, height: 56, alignSelf: 'center' },
  banner: {
    width: '100%',
    height: 150,
    borderRadius: radius.lg,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  title: { fontFamily: fonts.heading, fontSize: 34, color: colors.textDark },
  subtitle: { fontFamily: fonts.body, fontSize: 15, color: colors.textMuted, marginTop: spacing.sm, marginBottom: spacing.lg },
  label: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.textDark, marginBottom: spacing.sm },
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: 16,
    fontFamily: fonts.body,
    fontSize: 15,
    color: colors.textDark,
    marginBottom: spacing.md,
  },
  link: {
    fontFamily: fonts.bodySemi,
    fontSize: 14,
    color: colors.accent,
    textAlign: 'right',
    marginBottom: spacing.lg,
  },
  note: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, textAlign: 'center', marginTop: spacing.lg },
  register: { fontFamily: fonts.bodySemi, color: colors.accent },
});