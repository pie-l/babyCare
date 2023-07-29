import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import Mcp from '../screen/mcp';
import McpDetails from '../screen/mcpDetails';

const Stack = createStackNavigator();

export const McpStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mcp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Mcp" component={Mcp} />
      <Stack.Screen name="McpDetails" component={McpDetails} />
    </Stack.Navigator>
  );
};
