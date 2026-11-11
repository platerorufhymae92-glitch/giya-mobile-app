// src/navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/auth/WelcomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen';
import OnboardingScreen from '../screens/student/OnboardingScreen';
import CheckInIntroScreen from '../screens/student/CheckInIntroScreen';
import CheckInQuestionsScreen from '../screens/student/CheckInQuestionsScreen';
import StudentTabs from './StudentTabs';
import CounselorTabs from './CounselorTabs';
import StudentDetailsScreen from '../screens/counselor/StudentDetailsScreen';
import AddNoteScreen from '../screens/counselor/AddNoteScreen';
import { colors, fonts } from '../constants/theme';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerShadowVisible: false,
          headerTintColor: colors.textDark,
          headerTitleStyle: { fontFamily: fonts.headingSemi },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Forgot Password' }} />

        {/* Student side */}
        <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StudentTabs" component={StudentTabs} options={{ headerShown: false }} />
        <Stack.Screen name="CheckInIntro" component={CheckInIntroScreen} options={{ title: '' }} />
        <Stack.Screen name="CheckInQuestions" component={CheckInQuestionsScreen} options={{ title: 'Check-in' }} />

        {/* Counselor side */}
        <Stack.Screen name="CounselorTabs" component={CounselorTabs} options={{ headerShown: false }} />
        <Stack.Screen name="StudentDetails" component={StudentDetailsScreen} options={{ title: 'Student Details' }} />
        <Stack.Screen name="AddNote" component={AddNoteScreen} options={{ title: 'Add Note' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}