import React from 'react';
import {Alert, FlatList, Text, View} from 'react-native';
import {BackIcon, SettingCard} from '../../component';
import {useDispatch} from 'react-redux';
import {setRole} from '../../actions/mainAction';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';

const SETTING_LIST = [
  {
    id: 1,
    name: 'Help',
  },
  {
    id: 3,
    name: 'About App',
  },
  {
    id: 4,
    name: 'Logout',
  },
];

const Setting = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const renderSettingItem = ({item}) => {
    return (
      <SettingCard
        item={item}
        onCardPress={() => {
          if (item.name === 'Logout') {
            Alert.alert('', 'Are you sure you want to logout', [
              {
                text: 'No',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Yes',
                onPress: () => {
                  dispatch(setRole(''));
                },
              },
            ]);
          }
          if (item.name === 'About App') {
            navigate('AboutApp');
          }
          if (item.name === 'Help') {
            navigate('Help');
          }
        }}
      />
    );
  };

  const settingListItemSeparatorComponent = () => (
    <View style={style.settingListItemSeparatorComponentStyle} />
  );

  const settingListFooterComponent = () => (
    <View style={style.settingListFooterComponentStyle} />
  );

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleTextStyle}>Settings</Text>

      <FlatList
        data={SETTING_LIST}
        renderItem={renderSettingItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={settingListItemSeparatorComponent}
        contentContainerStyle={style.settingListContainerStyle}
        ListFooterComponent={settingListFooterComponent}
      />
    </View>
  );
};

export default Setting;
