// src/screens/counselor/StudentDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import { colors, fonts, spacing } from '../../constants/theme';

export default function StudentDetailsScreen({ route, navigation }) {
  // PARAMETER PASSING: kuhaon ang gipadala gikan sa Referrals screen
  const { student } = route.params;
  const [status, setStatus] = useState(student.status);

  const initials = student.name.split(' ').map((n) => n[0]).join('').toUpperCase();
  const firstName = student.name.split(' ')[0];

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.title}>Student details</Text>

      <View style={styles.profileRow}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{student.name}</Text>
          <Text style={styles.small}>{student.email}</Text>
          <Text style={styles.small}>{student.school} · {student.year}</Text>
        </View>
      </View>

      <AppCard variant="peach" style={styles.gap}>
        <View style={styles.statusRow}>
          <Text style={styles.cardTitle}>{student.level}</Text>
          <Text style={styles.status}>{status}</Text>
        </View>
        <Text style={styles.small}>
          Recommended for prompt counselor support. This check-in reflection is not a diagnosis.
        </Text>
      </AppCard>

      <AppCard style={styles.gap}>
        <Text style={styles.cardTitle}>{firstName}'s referral note</Text>
        <Text style={styles.noteText}>"{student.note}"</Text>
        <Text style={styles.small}>Shared by {firstName} · {student.date}</Text>
      </AppCard>

      <AppButton
        title={status === 'Contacted' ? 'Already Contacted ✓' : 'Mark as Contacted ✓'}
        disabled={status === 'Contacted'}
        style={styles.gap}
        onPress={() => setStatus('Contacted')}
      />

      <View style={[styles.row, styles.gap]}>
        <AppButton
          variant="outline"
          title="Add Note"
          style={{ flex: 1, marginRight: spacing.sm }}
          // PARAMETER PASSING: ipasa ang estudyante paingon sa AddNote
          onPress={() => navigation.navigate('AddNote', { student })}
        />
        <AppButton
          variant="outline"
          title="Schedule"
          style={{ flex: 1 }}
          onPress={() => Alert.alert('Coming soon', 'Schedule Consultation screen ang himuon nato sa ulahi.')}
        />
      </View>

      <Text style={styles.footer}>
        Shared with your guidance team by the student's choice. Keep consultation records confidential.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark, marginBottom: spacing.md },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.sage,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarText: { fontFamily: fonts.headingSemi, fontSize: 24, color: colors.green },
  name: { fontFamily: fonts.bodySemi, fontSize: 22, color: colors.textDark },
  small: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, marginTop: 4 },
  gap: { marginTop: spacing.md },
  row: { flexDirection: 'row' },
  statusRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.sm },
  cardTitle: { fontFamily: fonts.bodySemi, fontSize: 17, color: colors.textDark, flex: 1 },
  status: { fontFamily: fonts.bodySemi, fontSize: 13, color: colors.accent },
  noteText: { fontFamily: fonts.body, fontSize: 16, color: colors.textDark, marginVertical: spacing.sm, lineHeight: 24 },
  footer: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, marginTop: spacing.lg },
});