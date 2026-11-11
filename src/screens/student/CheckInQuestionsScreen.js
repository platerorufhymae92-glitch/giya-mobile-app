// src/screens/student/CheckInQuestionsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../../components/AppButton';
import { sections, answerOptions, TOTAL_QUESTIONS } from '../../constants/checkinQuestions';
import { colors, fonts, spacing, radius } from '../../constants/theme';

export default function CheckInQuestionsScreen({ navigation }) {
  // answers = { 1: 0, 2: 3, ... }  (id sa question: value sa napili nga answer)
  const [answers, setAnswers] = useState({});

  const answeredCount = Object.keys(answers).length;
  const allDone = answeredCount === TOTAL_QUESTIONS;
  const progress = (answeredCount / TOTAL_QUESTIONS) * 100;

  const choose = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = () => {
    if (!allDone) {
      Alert.alert(
        'Almost there',
        `Naa pay ${TOTAL_QUESTIONS - answeredCount} ka question nga wala pa na-answer-an.`
      );
      return;
    }

    const total = Object.values(answers).reduce((sum, v) => sum + v, 0);

    // DEMO: total score lang ang gipakita. Ang tinuod nga scoring ug Results himuon nato sa sunod nga step.
    Alert.alert(
      'Check-in submitted (demo)',
      `Total score: ${total} out of ${TOTAL_QUESTIONS * 3}`,
      [{ text: 'OK', onPress: () => navigation.navigate('StudentTabs') }]
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      {/* Progress (naa sa taas, dili mo-scroll) */}
      <View style={styles.progressWrap}>
        <View style={styles.progressTextRow}>
          <Text style={styles.progressText}>{answeredCount} of {TOTAL_QUESTIONS} answered</Text>
          <Text style={styles.progressText}>At your own pace</Text>
        </View>
        <View style={styles.barBg}>
          <View style={[styles.barFill, { width: `${progress}%` }]} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>A LITTLE SPACE FOR YOU</Text>
        <Text style={styles.title}>GIYA Gentle Check-in</Text>
        <Text style={styles.subtitle}>Take your time. There are no right or wrong answers.</Text>
        <Text style={styles.subtitle2}>
          Think about your past week. Choose the answer that feels closest, one question at a time.
        </Text>

        {sections.map((section, sIndex) => (
          <View key={section.title}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionLabel}>
                SECTION {sIndex + 1} OF {sections.length} · {section.questions[0].id}–
                {section.questions[section.questions.length - 1].id} · {section.questions.length} questions
              </Text>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
            </View>

            {section.questions.map((q) => (
              <View key={q.id} style={styles.questionCard}>
                <Text style={styles.questionText}>
                  {q.id}. {q.text}
                </Text>
                {answerOptions.map((opt) => {
                  const selected = answers[q.id] === opt.value;
                  return (
                    <TouchableOpacity
                      key={opt.value}
                      activeOpacity={0.8}
                      onPress={() => choose(q.id, opt.value)}
                      style={[styles.option, selected && styles.optionSelected]}
                    >
                      <View style={[styles.radio, selected && styles.radioSelected]}>
                        {selected && <View style={styles.radioDot} />}
                      </View>
                      <Text style={[styles.optionText, selected && styles.optionTextSelected]}>
                        {opt.label}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}
          </View>
        ))}

        <Text style={styles.endTitle}>Every small check-in matters.</Text>
        <Text style={styles.endText}>
          You don't have to have it all figured out. Just start with where you are.
        </Text>
      </ScrollView>

      {/* Submit (naa sa ubos, dili mo-scroll) */}
      <View style={styles.submitWrap}>
        <AppButton
          title="Submit Check-in"
          onPress={handleSubmit}
          style={!allDone && styles.submitDisabled}
        />
        {!allDone && (
          <Text style={styles.submitHint}>Choose an answer for each question to submit.</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  progressWrap: { paddingHorizontal: spacing.lg, paddingBottom: spacing.sm },
  progressTextRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  progressText: { fontFamily: fonts.bodyMedium, fontSize: 13, color: colors.textMuted },
  barBg: { height: 8, borderRadius: 4, backgroundColor: colors.sand },
  barFill: { height: 8, borderRadius: 4, backgroundColor: colors.green },

  container: { padding: spacing.lg, paddingBottom: spacing.xl },
  label: { fontFamily: fonts.bodySemi, fontSize: 12, color: colors.green, letterSpacing: 0.8 },
  title: { fontFamily: fonts.heading, fontSize: 30, color: colors.textDark, marginTop: spacing.sm },
  subtitle: { fontFamily: fonts.bodyMedium, fontSize: 15, color: colors.textDark, marginTop: spacing.sm },
  subtitle2: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm, lineHeight: 21 },

  sectionHeader: { marginTop: spacing.xl, marginBottom: spacing.md },
  sectionLabel: { fontFamily: fonts.bodySemi, fontSize: 11, color: colors.green, letterSpacing: 0.5 },
  sectionTitle: { fontFamily: fonts.heading, fontSize: 24, color: colors.textDark, marginTop: 4 },
  sectionSubtitle: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: 4 },

  questionCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  questionText: { fontFamily: fonts.bodySemi, fontSize: 16, color: colors.textDark, marginBottom: spacing.sm, lineHeight: 22 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginTop: 8,
    backgroundColor: colors.background,
  },
  optionSelected: { backgroundColor: colors.sage, borderColor: colors.green },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  radioSelected: { borderColor: colors.green },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.green },
  optionText: { fontFamily: fonts.body, fontSize: 14, color: colors.textDark, flex: 1 },
  optionTextSelected: { fontFamily: fonts.bodyMedium },

  endTitle: { fontFamily: fonts.heading, fontSize: 22, color: colors.textDark, marginTop: spacing.lg, textAlign: 'center' },
  endText: { fontFamily: fonts.body, fontSize: 14, color: colors.textMuted, marginTop: spacing.sm, textAlign: 'center', lineHeight: 21 },

  submitWrap: { paddingHorizontal: spacing.lg, paddingTop: spacing.sm, backgroundColor: colors.background },
  submitDisabled: { opacity: 0.5 },
  submitHint: { fontFamily: fonts.body, fontSize: 12, color: colors.textMuted, textAlign: 'center', marginTop: 6 },
});