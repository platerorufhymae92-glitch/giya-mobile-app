// src/screens/student/CheckInIntroScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AppButton from '../../components/AppButton';
import { TOTAL_QUESTIONS } from '../../constants/checkinQuestions';
import { colors, fonts, spacing, radius } from '../../constants/theme';

export default function CheckInIntroScreen({ navigation }) {
  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <Image
        source={require('../../../assets/images/checkin-intro.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.label}>LET'S SLOW DOWN</Text>
      <Text style={styles.title}>Let's take a quiet moment</Text>
      <Text style={styles.text}>
        This check-in has {TOTAL_QUESTIONS} gentle questions to understand how you've been feeling. There are no right or wrong answers.
      </Text>

      <View style={styles.chips}>
        <View style={[styles.chip, { backgroundColor: colors.sage }]}>
          <Text style={[styles.chipText, { color: colors.green }]}>{TOTAL_QUESTIONS} questions</Text>
        </View>
        <View style={[styles.chip, { backgroundColor: colors.sand }]}>
          <Text style={styles.chipText}>Go at your own pace</Text>
        </View>
      </View>

      <AppButton
        title="Begin Check-in  →"
        style={{ marginTop: spacing.xl }}
        onPress={() => navigation.navigate('CheckInQuestions')}
      />

      <Text style={styles.note}>
        Your answers help guide your next step. This check-in is not a diagnosis.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg },
  image: { width: '100%', height: 240, borderRadius: radius.lg },
  label: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.green, letterSpacing: 0.8, marginTop: spacing.lg },
  title: { fontFamily: fonts.heading, fontSize: 32, color: colors.textDark, marginTop: spacing.sm },
  text: { fontFamily: fonts.body, fontSize: 16, color: colors.textMuted, lineHeight: 24, marginTop: spacing.md },
  chips: { flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing.md },
  chip: { borderRadius: radius.pill, paddingHorizontal: 14, paddingVertical: 8, marginRight: spacing.sm, marginBottom: spacing.sm },
  chipText: { fontFamily: fonts.bodyMedium, fontSize: 13, color: colors.textMuted },
  note: { fontFamily: fonts.body, fontSize: 13, color: colors.textMuted, marginTop: spacing.md, lineHeight: 20 },
});