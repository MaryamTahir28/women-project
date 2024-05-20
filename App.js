import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SafetyTipsScreen from './screens/SafetyTipsScreen';
import LoginScreen from './screens/LoginScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import SettingsScreen from './screens/SettingsScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import LiveChatScreen from './screens/LiveChatScreen';
import AppVersionScreen from './screens/AppVersion';
import AboutApp from './screens/AboutApp';
import { ThemeProvider, useTheme } from './ThemeContext';

const Stack = createStackNavigator();

const App = () => {
  const { darkMode } = useTheme();
  return (
    <NavigationContainer theme={darkMode ? darkTheme : lightTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SafetyTips" component={SafetyTipsScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="LiveChat" component={LiveChatScreen} />
        <Stack.Screen name="AppVersion" component={AppVersionScreen} options={{ title: 'App Version' }} />
        <Stack.Screen name="AboutApp" component={AboutApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWrapper = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default AppWrapper;

const lightTheme = {
  dark: false,
  colors: {
    primary: '#f4511e',
    background: '#ffffff',
    card: '#f4511e',
    text: '#000000',
    border: '#f4511e',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#f4511e',
    background: '#000000',
    card: '#f4511e',
    text: '#ffffff',
    border: '#f4511e',
  },
};
