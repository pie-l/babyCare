import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import Home from '../screen/home';
import Notification from '../screen/notification';
import Setting from '../screen/setting';
import AboutApp from '../screen/aboutApp';
import Help from '../screen/help';
import HearingTestResult from '../screen/hearingTestResult';
import HeadUltraSoundTestResult from '../screen/headUltraSoundTestResult';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="HearingTestResult" component={HearingTestResult} />
      <Stack.Screen
        name="HeadUltraSoundTestResult"
        component={HeadUltraSoundTestResult}
      />
    </Stack.Navigator>
  );
};
