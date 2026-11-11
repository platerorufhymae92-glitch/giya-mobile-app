// src/screens/counselor/CounselorProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton';
import AppCard from '../../components/AppCard';
import { colors, fonts, spacing, radius } from '../../constants/theme';

const menu = ['Account settings', 'Consultation availability', 'Notifications', 'Privacy & confidentiality'];

export default function CounselorProfileScreen({ navigation }) {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Yes, Logout',
        onPress: () =>
          // balik sa Welcome ug tanggalon ang tanang gi-open nga screens
          navigation.getParent().reset({ index: 0, routes: [{ name: 'Welcome' }] }),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Your profile</Text>

        <AppCard style={styles.gap}>
          <View style={styles.row}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>AD</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>Ana Dela Cruz</Text>
              <Text style={styles.small}>ana.delacruz@sic.edu.ph</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Guidance Counselor</Text>
              </View>
            </View>
          </View>
          <Text style={styles.school}>San Isidro College</Text>
          <Text style={styles.small}>Guidance & Student Support Office</Text>
        </AppCard>

        <AppCard style={styles.gap}>
          {menu.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.menuItem}
              onPress={() => Alert.alert('Coming soon', `${item} nga screen ang himuon nato sa ulahi.`)}
            >
              <Text style={styles.menuText}>{item}</Text>
              <Text style={styles.arrow}>›</Text>
            </TouchableOpacity>
          ))}
        </AppCard>

        <Text style={styles.footer}>
          Student records are confidential. Access only the information needed to provide guidance and support.
        </Text>

        <AppButton variant="outline" title="Logout" style={styles.gap} onPress={handleLogout} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark },
  gap: { marginTop: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: spacing.md },
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
  name: { fontFamily: fonts.bodySemi, fontSize: 20, color: colors.textDark },
  small: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, marginTop: 4 },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.sage,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginTop: 6,
  },
  badgeText: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.green },
  school: { fontFamily: fonts.bodySemi, fontSize: 16, color: colors.textDark },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
  },
  menuText: { fontFamily: fonts.body, fontSize: 16, color: colors.textDark },
  arrow: { fontSize: 24, color: colors.textMuted },
  footer: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, marginTop: spacing.md },
});