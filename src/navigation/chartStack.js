import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import Chart from '../screen/chart';

const Stack = createStackNavigator();

export const ChartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chart"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Chart" component={Chart} />
    </Stack.Navigator>
  );
};
