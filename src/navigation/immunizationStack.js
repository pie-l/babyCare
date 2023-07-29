import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import Immunization from '../screen/immunization';

const Stack = createStackNavigator();

export const ImmunizationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Immunization"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Immunization" component={Immunization} />
    </Stack.Navigator>
  );
};
