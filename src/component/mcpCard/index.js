import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {style} from './styles';
import {useNavigation} from '@react-navigation/native';

const McpCard = ({item}) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => navigate('McpDetails', item)}
      style={style.itemContainerStyle}>
      <Image
        source={item.image}
        style={style.imageStyle}
        resizeMode={'contain'}
      />

      <Text style={style.itemTextStyle}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default McpCard;
