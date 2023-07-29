import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {icons} from '../../helper/iconsConstants';

const McpDetails = ({route}) => {
  const params = route.params;

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>{params.text || ''}</Text>

      <ScrollView contentContainerStyle={style.scrollViewContainerStyle}>
        {params.list.map((bullet, index) => {
          return (
            <View key={index} style={style.bulletItemStyle}>
              <Image source={icons.billetPoint} style={style.bulletIconStyle} />

              <Text style={style.bulletTextStyle}>{bullet.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default McpDetails;
