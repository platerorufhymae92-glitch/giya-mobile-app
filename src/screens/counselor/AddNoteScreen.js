// src/screens/counselor/AddNoteScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import { colors, fonts, spacing, radius } from '../../constants/theme';

export default function AddNoteScreen({ route, navigation }) {
  // PARAMETER PASSING: kuhaon ang estudyante gikan sa StudentDetails
  const { student } = route.params;

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const initials = student.name.split(' ').map((n) => n[0]).join('').toUpperCase();

  const handleSave = () => {
    if (title.trim() === '') {
      Alert.alert('Note title needed', 'Palihug butangi og title ang note.');
      return;
    }
    if (note.trim() === '') {
      Alert.alert('Note is empty', 'Palihug isulat ang imong consultation note.');
      return;
    }

    // DEMO: dili pa ni ma-save sa database. Supabase/AsyncStorage sa ulahi.
    Alert.alert('Note saved', `Ang note para kang ${student.name} na-save (demo).`, [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Add Consultation Note</Text>

        <AppCard variant="sage" style={styles.studentCard}>
          <View style={styles.row}>
            <Text style={styles.initials}>{initials}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{student.name}</Text>
              <Text style={styles.small}>{student.date} · {student.school}</Text>
            </View>
          </View>
        </AppCard>

        <Text style={styles.label}>Note title</Text>
        <TextInput
          style={styles.input}
          placeholder="Initial referral review"
          placeholderTextColor={colors.textMuted}
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Private consultation note</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write your observations and plan..."
          placeholderTextColor={colors.textMuted}
          value={note}
          onChangeText={setNote}
          multiline
          textAlignVertical="top"
        />
        <View style={styles.metaRow}>
          <Text style={styles.small}>Draft · Not yet saved</Text>
          <Text style={styles.small}>Ana Dela Cruz</Text>
        </View>

        <Text style={styles.footer}>
          For authorized guidance staff only. Record relevant observations with care and respect.
        </Text>

        <AppButton title="Save Note" onPress={handleSave} style={{ marginTop: spacing.lg }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 30, color: colors.textDark, marginBottom: spacing.md },
  studentCard: { marginBottom: spacing.lg },
  row: { flexDirection: 'row', alignItems: 'center' },
  initials: { fontFamily: fonts.headingSemi, fontSize: 18, color: colors.green, marginRight: spacing.md },
  name: { fontFamily: fonts.bodySemi, fontSize: 17, color: colors.textDark },
  small: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, marginTop: 2 },
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
  textArea: { minHeight: 200, marginBottom: spacing.sm },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.md },
  footer: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted },
});