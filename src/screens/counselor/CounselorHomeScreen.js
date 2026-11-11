// src/screens/counselor/CounselorHomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppCard from '../../components/AppCard';
import { referrals } from '../../constants/mockData';
import { colors, fonts, spacing, radius } from '../../constants/theme';

function getInitials(name) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase();
}

export default function CounselorHomeScreen({ navigation }) {
  const pending = referrals.filter((r) => r.status === 'Pending');

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Good morning, Ana</Text>
        <Text style={styles.subtitle}>A little guidance can make a big difference.</Text>

        {/* Stats (DEMO: ang 8 ug 5 kay sample numbers pa) */}
        <View style={styles.statsRow}>
          <AppCard variant="peach" style={styles.stat}>
            <Text style={styles.statNumber}>{pending.length}</Text>
            <Text style={styles.statLabel}>Pending Referrals</Text>
          </AppCard>
          <AppCard variant="sage" style={styles.stat}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Students Needing Support</Text>
          </AppCard>
          <AppCard variant="sand" style={styles.stat}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Consultations this week</Text>
          </AppCard>
        </View>

        <View style={styles.sectionRow}>
          <Text style={styles.section}>Waiting for your guidance</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Referrals')}>
            <Text style={styles.link}>View all</Text>
          </TouchableOpacity>
        </View>

        {pending.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('StudentDetails', { student: item })}
          >
            <AppCard style={styles.card}>
              <View style={styles.row}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>{getInitials(item.name)}</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.date}>{item.date}</Text>
                </View>
                <Text style={styles.arrow}>›</Text>
              </View>
              <View style={styles.bottomRow}>
                <Text style={styles.level}>{item.level}</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.status}</Text>
                </View>
              </View>
            </AppCard>
          </TouchableOpacity>
        ))}

        <AppCard variant="sage" style={styles.next}>
          <Text style={styles.nextTitle}>Your next consultation</Text>
          <Text style={styles.name}>Lia Cruz</Text>
          <Text style={styles.date}>Today, 10:30 AM · Guidance office</Text>
        </AppCard>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark },
  subtitle: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm, marginBottom: spacing.lg },
  statsRow: { flexDirection: 'row', marginBottom: spacing.lg },
  stat: { flex: 1, marginRight: spacing.sm, padding: 14, minHeight: 120, justifyContent: 'space-between' },
  statNumber: { fontFamily: fonts.heading, fontSize: 36, color: colors.textDark },
  statLabel: { fontFamily: fonts.body, fontSize: 12, color: colors.textDark },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md },
  section: { fontFamily: fonts.bodySemi, fontSize: 18, color: colors.textDark },
  link: { fontFamily: fonts.bodySemi, fontSize: 14, color: colors.accent },
  card: { marginBottom: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center' },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.sage,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarText: { fontFamily: fonts.headingSemi, fontSize: 18, color: colors.green },
  name: { fontFamily: fonts.bodySemi, fontSize: 17, color: colors.textDark },
  date: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, marginTop: 2 },
  arrow: { fontSize: 28, color: colors.textMuted },
  bottomRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.md },
  level: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, flex: 1 },
  badge: { backgroundColor: colors.peachSoft, borderRadius: radius.pill, paddingHorizontal: 14, paddingVertical: 6 },
  badgeText: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.accent },
  next: { marginTop: spacing.sm },
  nextTitle: { fontFamily: fonts.bodySemi, fontSize: 18, color: colors.textDark, marginBottom: spacing.sm },
});