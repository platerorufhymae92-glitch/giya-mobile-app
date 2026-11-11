// src/screens/counselor/NotesScreen.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppCard from '../../components/AppCard';
import { colors, fonts, spacing } from '../../constants/theme';

// DEMO DATA lang ni. Ilisan nato sa Supabase sa ulahi.
const notes = [
  {
    id: '1',
    student: 'Maya Santos',
    title: 'Initial referral review',
    date: 'Oct 23, 2026',
    text: "Reviewed Maya's request for support with sleep and schoolwork. Plan: reach out through her school email.",
  },
  {
    id: '2',
    student: 'Lia Cruz',
    title: 'First consultation',
    date: 'Oct 21, 2026',
    text: 'Scheduled a consultation at the guidance office.',
  },
];

export default function NotesScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Consultation notes</Text>
        <Text style={styles.subtitle}>Private notes. For authorized guidance staff only.</Text>

        {notes.map((n) => (
          <TouchableOpacity
            key={n.id}
            activeOpacity={0.8}
            onPress={() => Alert.alert(n.title, n.text)}
          >
            <AppCard style={styles.card}>
              <Text style={styles.noteTitle}>{n.title}</Text>
              <Text style={styles.student}>{n.student} · {n.date}</Text>
              <Text style={styles.text} numberOfLines={2}>{n.text}</Text>
            </AppCard>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark },
  subtitle: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm, marginBottom: spacing.lg },
  card: { marginBottom: spacing.md },
  noteTitle: { fontFamily: fonts.bodySemi, fontSize: 17, color: colors.textDark },
  student: { fontFamily: fonts.body, fontSize: 13, color: colors.green, marginTop: 4 },
  text: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm, lineHeight: 20 },
});