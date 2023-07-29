import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';

const Notification = () => {
  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.notificationTextStyle}>Notification</Text>

      <TouchableOpacity
        activeOpacity={0.9}
        style={style.notificationItemContainerStyle}
        onPress={() => {}}>
        <Text style={style.notificationItemTextStyle}>
          Your baby was scheduled to attend OPD vaccination on 24/06/23
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={style.notificationItemContainerStyle}
        onPress={() => {}}>
        <Text style={style.notificationItemTextStyle}>
          Your baby have not attended the scheduled appointment
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.9}
        style={style.notificationItemContainerStyle}
        onPress={() => {}}>
        <Text style={style.notificationItemTextStyle}>
          Please Attend OPD/vaccination ASAP.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
