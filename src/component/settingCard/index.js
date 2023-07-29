import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from './styles';

const SettingCard = ({
  cardContainerStyle,
  item,
  settingCardNameTextStyle,
  onCardPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[style.containerStyle, cardContainerStyle]}
      onPress={onCardPress}>
      <View style={style.textContainerStyle}>
        <Text
          style={[style.settingCardNameTextStyle, settingCardNameTextStyle]}
          numberOfLines={1}>
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingCard;
