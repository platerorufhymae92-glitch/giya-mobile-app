// src/screens/student/OnboardingScreen.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton';
import { colors, fonts, spacing, radius } from '../../constants/theme';

const slides = [
  {
    label: 'YOUR LITTLE PAUSE',
    title: 'A quiet space for you',
    text: 'Sometimes school and life can feel heavy. GIYA is here to walk with you.',
    image: require('../../../assets/images/onboarding-1.png'),
  },
  {
    label: 'ONE STEP AT A TIME',
    title: 'Check in. Get support.',
    text: 'Take a short check-in, receive helpful tips, and connect with a guidance counselor when you need more support.',
    image: require('../../../assets/images/onboarding-2.png'),
  },
  {
    label: 'CARE, ON YOUR TERMS',
    title: 'Safe and private',
    text: 'Your responses are private. We only help connect you to a guidance counselor when you choose to.',
    image: require('../../../assets/images/onboarding-3.png'),
  },
];

export default function OnboardingScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const isLast = index === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      navigation.replace('StudentTabs');
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {index > 0 ? (
          <TouchableOpacity onPress={() => setIndex(index - 1)}>
            <Text style={styles.back}>←</Text>
          </TouchableOpacity>
        ) : (
          <View style={{ width: 24 }} />
        )}
        <Image source={require('../../../assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={{ width: 24 }} />
      </View>

      <Image source={slide.image} style={styles.image} resizeMode="cover" />

      <View style={styles.textBlock}>
        <Text style={styles.label}>{slide.label}</Text>
        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.text}>{slide.text}</Text>
      </View>

      <AppButton title={isLast ? 'Get Started  →' : 'Next  →'} onPress={handleNext} />

      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View key={i} style={[styles.dot, i === index && styles.dotActive]} />
        ))}
        <Text style={styles.count}>{index + 1} of {slides.length}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  back: { fontSize: 26, color: colors.textDark, width: 24 },
  logo: { width: 120, height: 44 },
  image: { width: '100%', height: 280, borderRadius: radius.lg, marginTop: spacing.md },
  textBlock: { flex: 1, alignItems: 'center', paddingTop: spacing.lg },
  label: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.green, letterSpacing: 0.8 },
  title: { fontFamily: fonts.heading, fontSize: 30, color: colors.textDark, textAlign: 'center', marginTop: spacing.sm },
  text: { fontFamily: fonts.body, fontSize: 15, color: colors.textMuted, textAlign: 'center', marginTop: spacing.md, lineHeight: 22 },
  dots: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: spacing.md },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: colors.border, marginRight: 6 },
  dotActive: { width: 28, backgroundColor: colors.accent },
  count: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, marginLeft: spacing.sm },
});