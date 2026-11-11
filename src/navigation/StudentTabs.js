// src/navigation/StudentTabs.js
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import StudentHomeScreen from '../screens/student/StudentHomeScreen';
import PlaceholderScreen from '../components/PlaceholderScreen';
import { colors, fonts } from '../constants/theme';

const Tab = createBottomTabNavigator();

// Ang Check-in tab dili tinuod nga screen. Kung i-tap, mo-open ang CheckInIntro sa stack.
const CheckInTab = () => <View style={{ flex: 1, backgroundColor: colors.background }} />;

// PLACEHOLDER: ilisan nato kini sa tinuod nga screens sa sunod nga mga step
const TipsTab = ({ navigation }) => (
  <PlaceholderScreen title="Small things, softer days" subtitle="Ang Tips screen ang sunod nato himuon." navigation={navigation} />
);
const ChatTab = ({ navigation }) => (
  <PlaceholderScreen title="GIYA AI" subtitle="Ang Chat screen ang sunod nato himuon." navigation={navigation} />
);
const ProfileTab = ({ navigation }) => (
  <PlaceholderScreen title="Your little corner" subtitle="Ang Profile screen ang sunod nato himuon." navigation={navigation} showLogout />
);

const icons = {
  Home: ['home', 'home-outline'],
  'Check-in': ['heart', 'heart-outline'],
  Tips: ['leaf', 'leaf-outline'],
  Chat: ['chatbubble', 'chatbubble-outline'],
  Profile: ['person', 'person-outline'],
};

export default function StudentTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.accent,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: { backgroundColor: colors.card, borderTopColor: colors.border },
        tabBarLabelStyle: { fontFamily: fonts.bodyMedium, fontSize: 12 },
        tabBarIcon: ({ focused, color, size }) => (
          <Ionicons
            name={focused ? icons[route.name][0] : icons[route.name][1]}
            size={size}
            color={color}
          />
        ),
      })}
    >
      <Tab.Screen name="Home" component={StudentHomeScreen} />
      <Tab.Screen
        name="Check-in"
        component={CheckInTab}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault(); // ayaw i-open ang tab
            navigation.navigate('CheckInIntro'); // i-open ang Intro sa stack
          },
        })}
      />
      <Tab.Screen name="Tips" component={TipsTab} />
      <Tab.Screen name="Chat" component={ChatTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}