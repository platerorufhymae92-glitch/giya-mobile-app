// src/screens/auth/WelcomeScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton';
import { colors, fonts, spacing, radius } from '../../constants/theme';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Image source={require('../../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.tagline}>Peaceful mind, brighter life.</Text>
        <View style={styles.line} />
      </View>

      <Image source={require('../../../assets/images/splash-meadow.png')} style={styles.hero} resizeMode="cover" />

      <AppButton title="Get Started" onPress={() => navigation.navigate('Login')} />
      <Text style={styles.footer}>A GENTLER WAY FORWARD</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  top: { alignItems: 'center', marginTop: spacing.lg },
  logo: { width: 220, height: 80 },
  tagline: { fontFamily: fonts.heading, fontSize: 20, color: colors.textDark, marginTop: spacing.md },
  line: { width: 40, height: 2, backgroundColor: colors.peach, marginTop: spacing.md },
  hero: {
    flex: 1,
    width: '100%',
    borderRadius: radius.lg,
    marginVertical: spacing.lg,
  },
  footer: {
    fontFamily: fonts.body,
    fontSize: 12,
    color: colors.textMuted,
    textAlign: 'center',
    marginTop: spacing.md,
    letterSpacing: 1,
  },
});