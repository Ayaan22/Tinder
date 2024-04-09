import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import Welcome from '../screens/Welcome/Welcome';
import BottomTabs from '../screens/BottomTabs/BottomTabs';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import FirstName from '../screens/Welcome/FirstName';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="FirstName"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="FirstName" component={FirstName} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
