// src/screens/student/StudentHomeScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import { TOTAL_QUESTIONS } from '../../constants/checkinQuestions';
import { colors, fonts, spacing, radius } from '../../constants/theme';

// DEMO: ang adlaw sa semana. done = naka-check-in, today = karon nga adlaw
const week = [
  { d: 'M', done: true },
  { d: 'T', done: true },
  { d: 'W' },
  { d: 'T' },
  { d: 'F', today: true },
  { d: 'S' },
  { d: 'S' },
];

export default function StudentHomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Good morning, Maya</Text>
        <Text style={styles.subtitle}>You don't have to have it all figured out.</Text>

        <AppCard variant="sage" style={styles.gap}>
          <View style={styles.row}>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>A MOMENT FOR YOU</Text>
              <Text style={styles.cardTitle}>How are you, really?</Text>
              <Text style={styles.small}>{TOTAL_QUESTIONS} gentle questions. Your own pace.</Text>
            </View>
            <Image source={require('../../../assets/images/splash-meadow.png')} style={styles.thumb} />
          </View>
          <AppButton
            title="Start Check-in  →"
            style={{ marginTop: spacing.md }}
            onPress={() => navigation.navigate('CheckInIntro')}
          />
        </AppCard>

        <View style={[styles.sectionRow, styles.gap]}>
          <Text style={styles.section}>Today's little tip</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Tips')}>
            <Text style={styles.link}>Explore tips</Text>
          </TouchableOpacity>
        </View>
        <AppCard>
          <Text style={styles.tipTitle}>Take a small breathing break</Text>
          <Text style={styles.small}>Breathe in for 4. Breathe out for 6.</Text>
        </AppCard>

        <View style={[styles.sectionRow, styles.gap]}>
          <Text style={styles.section}>Your week, gently</Text>
          <Text style={styles.link}>2 check-ins</Text>
        </View>
        <View style={styles.weekRow}>
          {week.map((w, i) => (
            <View key={i} style={styles.dayWrap}>
              <View style={[styles.day, w.done && styles.dayDone, w.today && styles.dayToday]}>
                <Text style={styles.dayMark}>{w.done ? '✓' : '•'}</Text>
              </View>
              <Text style={styles.dayLabel}>{w.d}</Text>
            </View>
          ))}
        </View>

        <AppButton variant="outline" title="Talk to AI" style={styles.gap} onPress={() => navigation.navigate('Chat')} />
        <AppButton
          variant="outline"
          title="Talk to a Guidance Counselor"
          style={styles.gapSm}
          onPress={() => Alert.alert('Coming soon', 'Counselor Request screen ang himuon nato sa ulahi.')}
        />

        <TouchableOpacity onPress={() => Alert.alert('Coming soon', 'Premium screen ang himuon nato sa ulahi.')}>
          <Text style={styles.premium}>✦ Explore a little more with GIYA Premium</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 30, color: colors.textDark },
  subtitle: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm },
  gap: { marginTop: spacing.lg },
  gapSm: { marginTop: spacing.sm },
  row: { flexDirection: 'row', alignItems: 'center' },
  label: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.green, letterSpacing: 0.5 },
  cardTitle: { fontFamily: fonts.heading, fontSize: 24, color: colors.textDark, marginVertical: 4 },
  small: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted },
  thumb: { width: 84, height: 84, borderRadius: radius.md, marginLeft: spacing.md },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.sm },
  section: { fontFamily: fonts.bodySemi, fontSize: 18, color: colors.textDark },
  link: { fontFamily: fonts.bodySemi, fontSize: 14, color: colors.accent },
  tipTitle: { fontFamily: fonts.bodySemi, fontSize: 16, color: colors.textDark, marginBottom: 4 },
  weekRow: { flexDirection: 'row', justifyContent: 'space-between' },
  dayWrap: { alignItems: 'center' },
  day: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.sand,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayDone: { backgroundColor: colors.sage },
  dayToday: { backgroundColor: colors.peachSoft },
  dayMark: { fontSize: 14, color: colors.green },
  dayLabel: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, marginTop: 4 },
  premium: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.accent, textAlign: 'center', marginTop: spacing.lg },
});