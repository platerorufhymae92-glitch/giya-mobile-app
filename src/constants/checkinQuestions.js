// src/constants/checkinQuestions.js

// Ang 4 ka answer choices. Ang value (0-3) gamiton sa scoring sa sunod nga step.
export const answerOptions = [
  { label: "I've been doing okay", value: 0 },
  { label: "It's been a little heavy", value: 1 },
  { label: "It's been quite difficult", value: 2 },
  { label: "I've been finding it hard to cope", value: 3 },
];

const sectionData = [
  {
    title: 'Sleep & Rest',
    subtitle: "Let's begin with how you've been resting.",
    questions: [
      'How have you been sleeping over the past week?',
      'Do you usually wake up feeling rested?',
      'Do you often wake up during the night?',
    ],
  },
  {
    title: 'Energy & Physical Feeling',
    subtitle: 'Notice what your body has been telling you.',
    questions: [
      'How is your energy level when you start the day?',
      'Do you often feel tired even after resting?',
      'Do you feel your body is more tense than usual?',
    ],
  },
  {
    title: 'Academic Pressure & Schoolwork',
    subtitle: 'Make room for how school has been feeling.',
    questions: [
      'How do you usually feel when you think about your school tasks?',
      'How manageable does your current school workload feel?',
      'Do you often feel there is not enough time to finish everything?',
      'How often do you worry about your academic performance?',
      'Do you feel pressure to meet certain grades or expectations?',
    ],
  },
  {
    title: 'Focus & Concentration',
    subtitle: 'A gentle look at your headspace lately.',
    questions: [
      'How easy has it been for you to focus on your tasks lately?',
      'Do your thoughts often wander while studying?',
      'Do you find it harder to finish tasks you used to complete easily?',
    ],
  },
  {
    title: 'Emotions & Inner Feeling',
    subtitle: "Whatever you're feeling, there's room for it here.",
    questions: [
      'How have you been feeling emotionally these past few days?',
      'Do you often feel a heaviness in your chest or mind?',
      'Do small things sometimes feel more overwhelming than before?',
      'Do you find it harder to enjoy things you used to like?',
      'How hopeful do you feel about the coming days?',
    ],
  },
  {
    title: 'Support & Connection',
    subtitle: 'Think about the people in your corner.',
    questions: [
      'How supported do you feel by the people around you right now?',
      'Do you feel comfortable sharing what is on your mind with someone?',
      'How alone do you sometimes feel with what you are carrying?',
    ],
  },
  {
    title: 'Daily Rhythm & Self-Care',
    subtitle: 'And finally, a little kindness toward yourself.',
    questions: [
      'Have you been able to take short breaks during the day?',
      'How balanced does your daily routine feel right now?',
      'Is there anything that has been quietly weighing on your mind more than usual?',
    ],
  },
];

// Butangan og number (1-25) ug id ang matag question
let counter = 0;
export const sections = sectionData.map((s) => ({
  ...s,
  questions: s.questions.map((text) => {
    counter += 1;
    return { id: counter, text };
  }),
}));

export const TOTAL_QUESTIONS = counter; // 25