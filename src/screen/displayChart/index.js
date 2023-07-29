import React from 'react';
import {Image, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';

const DisplayChart = ({route}) => {
  const data = route.params;

  return (
    <View style={style.containerStyle}>
      <BackIcon />
      <Image
        source={data.image}
        resizeMode={'contain'}
        style={style.chartStyle}
      />
    </View>
  );
};

export default DisplayChart;
