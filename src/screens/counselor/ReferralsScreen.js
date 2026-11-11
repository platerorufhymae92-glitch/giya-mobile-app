// src/screens/counselor/ReferralsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppCard from '../../components/AppCard';
import { referrals } from '../../constants/mockData';
import { colors, fonts, spacing, radius } from '../../constants/theme';

function getInitials(name) {
  return name.split(' ').map((n) => n[0]).join('').toUpperCase();
}

export default function ReferralsScreen({ navigation }) {
  const [filter, setFilter] = useState('All');

  const pendingCount = referrals.filter((r) => r.status === 'Pending').length;
  const filters = ['All', 'Pending', 'Contacted'];

  const visible = referrals.filter((r) => filter === 'All' || r.status === filter);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Student referrals</Text>
        <Text style={styles.subtitle}>San Isidro College · Every request matters.</Text>

        <View style={styles.filters}>
          {filters.map((f) => (
            <TouchableOpacity
              key={f}
              onPress={() => setFilter(f)}
              style={[styles.chip, filter === f && styles.chipActive]}
            >
              <Text style={[styles.chipText, filter === f && styles.chipTextActive]}>
                {f === 'Pending' ? `Pending · ${pendingCount}` : f}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {visible.map((item) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.8}
            // PARAMETER PASSING: ipadala ang napili nga estudyante paingon sa StudentDetails
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
                <View style={[styles.badge, item.status === 'Contacted' && styles.badgeContacted]}>
                  <Text style={[styles.badgeText, item.status === 'Contacted' && styles.badgeTextContacted]}>
                    {item.status}
                  </Text>
                </View>
              </View>
            </AppCard>
          </TouchableOpacity>
        ))}

        <Text style={styles.footer}>
          Only students who chose to send a referral appear here. Handle their information with care.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark },
  subtitle: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm, marginBottom: spacing.md },
  filters: { flexDirection: 'row', marginBottom: spacing.md },
  chip: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: spacing.sm,
  },
  chipActive: { backgroundColor: colors.sage, borderColor: colors.green },
  chipText: { fontFamily: fonts.bodyMedium, fontSize: 14, color: colors.textMuted },
  chipTextActive: { color: colors.green },
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
  badgeContacted: { backgroundColor: colors.sage },
  badgeText: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.accent },
  badgeTextContacted: { color: colors.green },
  footer: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, marginTop: spacing.md },
});