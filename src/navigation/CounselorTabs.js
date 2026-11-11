// src/navigation/CounselorTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CounselorHomeScreen from '../screens/counselor/CounselorHomeScreen';
import ReferralsScreen from '../screens/counselor/ReferralsScreen';
import NotesScreen from '../screens/counselor/NotesScreen';
import CounselorProfileScreen from '../screens/counselor/CounselorProfileScreen';
import { colors, fonts } from '../constants/theme';

const Tab = createBottomTabNavigator();

// [icon kung active, icon kung dili]
const icons = {
  Home: ['home', 'home-outline'],
  Referrals: ['people', 'people-outline'],
  Notes: ['document-text', 'document-text-outline'],
  Profile: ['person', 'person-outline'],
};

export default function CounselorTabs() {
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
      <Tab.Screen name="Home" component={CounselorHomeScreen} />
      <Tab.Screen name="Referrals" component={ReferralsScreen} />
      <Tab.Screen name="Notes" component={NotesScreen} />
      <Tab.Screen name="Profile" component={CounselorProfileScreen} />
    </Tab.Navigator>
  );
}