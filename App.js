import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Ionicons } from '@expo/vector-icons'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { useFonts } from 'expo-font'; 
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'; 

import { Provider as AuthProvider } from './src/context/AuthContext'; 

import { navigationRef } from './src/utilities/navigationRef'; 

// Screens 

import Onboarding from './src/screens/Onboarding';
import SignIn from './src/screens/SignIn'; 
import SignUp from './src/screens/SignUp';
import MainDashboard from './src/screens/MainDashboard';
import Search from './src/screens/Search'; 
import Profile from './src/screens/Profile'; 

const RootStack = createStackNavigator(); 
const AuthStack = createStackNavigator(); 
const Tab = createBottomTabNavigator(); 

const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
      <AuthStack.Screen name="Onboarding" component={Onboarding} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

const MainTabs = () => {
  return (
   <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false, 
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Dashboard') {
          iconName = focused ? 'home' : 'home-outline';  
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';  
        } else if (route.name === 'Profile') {
          iconName = focused ? 'accessibility' : 'accessibility-outline';  
        } 
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#4CAF50',
      tabBarInactiveTintColor: 'gray',
    })}> 
      <Tab.Screen name="Dashboard" component={MainDashboard} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [loaded, error] = useFonts({
    'Regular': require('./assets/fonts/Poppins-Regular.ttf'), 
    'Bold': require('./assets/fonts/Poppins-Bold.ttf') 
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName='Onboarding'>
        <RootStack.Screen name='AuthStack' component={AuthStackScreens} />
        <RootStack.Screen name='MainTab' component={MainTabs} /> 
      </RootStack.Navigator> 
    </NavigationContainer>
  );
} 

export default () => {
  return (
    <AuthProvider>
      <App /> 
    </AuthProvider>
  ) 
} 