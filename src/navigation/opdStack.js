import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import OPD from '../screen/opd';

const Stack = createStackNavigator();

export const OpdStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OPD"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OPD" component={OPD} />
    </Stack.Navigator>
  );
};
