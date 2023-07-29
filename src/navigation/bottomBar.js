import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../helper/colors';
import {fontSize} from '../helper/fontUtils';
import {hp, wp} from '../helper/utils';
import {icons} from '../helper/iconsConstants';

// Bottom Navigation Stacks
import {ChartStack} from './chartStack';
import {HomeStack} from './homeStack';
import {ImmunizationStack} from './immunizationStack';
import {McpStack} from './mcpStack';
import {OpdStack} from './opdStack';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={[
        style.bottomBarContainerStyle,
        style.shadowStyle,
        {backgroundColor: colors.white},
      ]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[style.bottomBarItemContainerStyle, {flex: 1}]}>
            <View
              style={[
                style.iconLabelTextStyle,
                {
                  borderRadius: isFocused ? hp(3) : 0,
                  height: isFocused ? hp(6) : 0,
                  width: isFocused ? hp(6) : 0,
                  backgroundColor: isFocused ? colors.lightParrot10 : null,
                },
              ]}>
              <Image
                source={options.tabBarIcon}
                style={[style.iconStyle, {opacity: isFocused ? 1 : 0.5}]}
                resizeMode={'contain'}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomBar = () => {
  return (
    <Tab.Navigator
      initialRouteName={'HomeStack'}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={props => {
        return <MyTabBar {...props} />;
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: icons.home,
        }}
      />

      <Tab.Screen
        name={'ChartStack'}
        component={ChartStack}
        options={{
          title: 'Chart',
          tabBarShowLabel: false,
          tabBarIcon: icons.chart,
        }}
      />

      <Tab.Screen
        name={'ImmunizationStack'}
        component={ImmunizationStack}
        options={{
          title: 'Immunization',
          tabBarShowLabel: false,
          tabBarIcon: icons.calendar,
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name={'McpStack'}
        component={McpStack}
        options={{
          title: 'MCP',
          tabBarShowLabel: false,
          tabBarIcon: icons.mcp,
          tabBarVisible: false,
        }}
      />

      <Tab.Screen
        name={'OPDStack'}
        component={OpdStack}
        options={{
          tabBarLabel: 'OPD',
          tabBarShowLabel: false,
          tabBarIcon: icons.note,
        }}
      />
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  bottomBarContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    right: wp(2.67),
    left: wp(2.67),
    bottom: hp(1.23),
    height: hp(9.11),
    borderRadius: hp(2.71),
    paddingVertical: hp(1.85),
    paddingHorizontal: wp(4),
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    shadowColor: colors.blueShadowColor,
    elevation: 5,
  },
  darkShadowStyle: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    shadowColor: colors.black,
    elevation: 5,
  },
  bottomBarItemContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(5.42),
  },
  iconLabelTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(1.23),
    marginHorizontal: wp(4.53),
  },
  iconStyle: {
    alignSelf: 'center',
    width: hp(2.46),
    height: hp(2.46),
  },
});

export default BottomBar;
