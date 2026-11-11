// src/screens/auth/RegisterScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import { colors, fonts, spacing, radius } from '../../constants/theme';

const schools = ['ADSSU', 'San Isidro College'];

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [school, setSchool] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [role, setRole] = useState('Student');

  const handleCreate = () => {
    if (!fullName.trim() || !email.trim() || !school || !password || !confirm) {
      Alert.alert('Missing details', 'Palihug kompletoha ang tanang fields.');
      return;
    }
    // DEMO check: institutional email kinahanglan mu-end sa .edu.ph
    const emailOk = /^\S+@\S+\.\S+$/.test(email.trim()) && email.trim().toLowerCase().endsWith('.edu.ph');
    if (!emailOk) {
      Alert.alert('School email needed', 'Gamita ang imong official school email (pananglitan you@school.edu.ph).');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Password too short', 'Ang password kinahanglan labing menos 6 ka letra.');
      return;
    }
    if (password !== confirm) {
      Alert.alert('Passwords do not match', 'Dili parehas ang Password ug Confirm Password.');
      return;
    }

    // DEMO: dili pa ni ma-save sa database. Supabase sa ulahi.
    Alert.alert('Account created', `Welcome, ${fullName.trim()}! (${role}) Pwede ka na mo-login.`, [
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ]);
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Register Institutional Account</Text>
      <Text style={styles.subtitle}>Only official school accounts are allowed</Text>

      <AppInput label="Full Name" placeholder="Your full name" value={fullName} onChangeText={setFullName} autoCapitalize="words" />
      <AppInput
        label="School Email"
        placeholder="you@school.edu.ph"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>School Name</Text>
      <View style={styles.schoolRow}>
        {schools.map((s) => (
          <TouchableOpacity
            key={s}
            onPress={() => setSchool(s)}
            style={[styles.chip, school === s && styles.chipActive]}
          >
            <Text style={[styles.chipText, school === s && styles.chipTextActive]}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <AppInput label="Password" placeholder="Create a password" value={password} onChangeText={setPassword} secure autoCapitalize="none" />
      <AppInput label="Confirm Password" placeholder="Re-enter your password" value={confirm} onChangeText={setConfirm} secure autoCapitalize="none" />

      <Text style={styles.label}>Choose your role</Text>
      {['Student', 'Guidance Counselor'].map((r) => (
        <TouchableOpacity
          key={r}
          activeOpacity={0.8}
          onPress={() => setRole(r)}
          style={[styles.roleBox, role === r && styles.roleBoxActive]}
        >
          <View style={[styles.radio, role === r && styles.radioActive]}>
            {role === r && <View style={styles.radioDot} />}
          </View>
          <Text style={styles.roleText}>I am a {r}</Text>
        </TouchableOpacity>
      ))}

      <AppButton title="Create Account" onPress={handleCreate} style={{ marginTop: spacing.lg }} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.footer}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, paddingBottom: spacing.xl },
  title: { fontFamily: fonts.heading, fontSize: 30, color: colors.textDark },
  subtitle: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm, marginBottom: spacing.lg },
  label: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.textDark, marginBottom: spacing.sm },
  schoolRow: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: spacing.md },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: spacing.sm,
    marginBottom: spacing.sm,
  },
  chipActive: { backgroundColor: colors.sage, borderColor: colors.green },
  chipText: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.textMuted },
  chipTextActive: { color: colors.green },
  roleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 16,
    marginBottom: spacing.sm,
  },
  roleBoxActive: { backgroundColor: colors.sage, borderColor: colors.green },
  radio: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  radioActive: { borderColor: colors.green },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.green },
  roleText: { fontFamily: fonts.body, fontSize: 15, color: colors.textDark },
  footer: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, textAlign: 'center', marginTop: spacing.lg },
});