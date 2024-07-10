import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; 
import { useFonts } from 'expo-font'; 
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen'; 


// Screens 

import Onboarding from './src/screens/Onboarding';
import SignIn from './src/screens/SignIn'; 
import SignUp from './src/screens/SignUp';
import MainDashboard from './src/screens/MainDashboard';

const RootStack = createStackNavigator(); 

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
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}} initialRouteName='Onboarding'>
        <RootStack.Screen name='Onboarding' component={Onboarding} />
        <RootStack.Screen name='SignIn' component={SignIn} /> 
        <RootStack.Screen name='SignUp' component={SignUp} /> 
        <RootStack.Screen name='MainDashboard' component={MainDashboard} /> 
      </RootStack.Navigator> 
    </NavigationContainer>
  );
} 

export default () => {
  return (
    <App />
  ) 
} 