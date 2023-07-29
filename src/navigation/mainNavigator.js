import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ROLES} from '../helper/applicationConstants';

// Screens
import BottomBar from './bottomBar';
import UserLogin from '../screen/userLogin';
import Role from '../screen/role';
import PhysicianHome from '../screen/physicianHome';
import AddBabyDetails from '../screen/addBabyDetails';
import BabyDetailsScreen from '../screen/showBabyDetails';
import PreventiveInjectionsGivenDates from '../screen/preventiveInjectionsGivenDate';
import HearingTest from '../screen/hearingTest';
import OpdVisit from '../screen/opdVisit';
import DisplayChart from '../screen/displayChart';
import Setting from '../screen/setting';
import Help from '../screen/help';
import AboutApp from '../screen/aboutApp';
import HeadUltraSoundTest from '../screen/headUltraSoundTest';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Role" component={Role} />
      <Stack.Screen name="UserLogin" component={UserLogin} />
    </Stack.Navigator>
  );
};

const PhysicianStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PhysicianHome" component={PhysicianHome} />
      <Stack.Screen name="AddBabyDetails" component={AddBabyDetails} />
      <Stack.Screen name="BabyDetailsScreen" component={BabyDetailsScreen} />
      <Stack.Screen
        name="PreventiveInjectionsGivenDates"
        component={PreventiveInjectionsGivenDates}
      />
      <Stack.Screen name="HearingTest" component={HearingTest} />
      <Stack.Screen name="HeadUltraSoundTest" component={HeadUltraSoundTest} />
      <Stack.Screen name="OpdVisit" component={OpdVisit} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="AboutApp" component={AboutApp} />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomBar" component={BottomBar} />
      <Stack.Screen name="DisplayChart" component={DisplayChart} />
    </Stack.Navigator>
  );
};

const MainNavigator = ({refer}) => {
  const {role} = useSelector(state => state.main);

  return useMemo(() => {
    return (
      <NavigationContainer ref={refer}>
        {role ? (
          role === ROLES.physician ? (
            <PhysicianStack />
          ) : (
            <UserStack />
          )
        ) : (
          <RootStack />
        )}
      </NavigationContainer>
    );
  }, [role]);
};

export default MainNavigator;
