import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/screens/LoginScreen"
import HomeScreen from "./src/screens/Home"
import SignUpScreen from './src/screens/SignUp';
import RecentsScreen from './src/screens/Recents'
import FavoritesScreen from './src/screens/Favorites'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='Recents' component={RecentsScreen} />
        <Stack.Screen name='Favorites' component={FavoritesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}