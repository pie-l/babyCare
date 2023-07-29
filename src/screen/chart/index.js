import React from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {icons, images} from '../../helper/iconsConstants';
import {useNavigation} from '@react-navigation/native';

const boysChart = [
  {
    id: 1,
    image: images.boyWeightChart,
    title: 'Weight-for-age BOYS(Birth to 2 years)',
  },
  {
    id: 2,
    image: images.girlWeightChart,
    title: 'Weight-for-age GIRLS(Birth to 2 years)',
  },
  {
    id: 3,
    image: images.boyLengthChart,
    title: 'Height-for-age BOYS(Birth to 2 years)',
  },
  {
    id: 4,
    image: images.girlLengthChart,
    title: 'Height-for-age GIRLS(Birth to 2 years)',
  },
  {
    id: 5,
    image: images.boyHCFAChart,
    title: 'Head-circumference-for-age BOYS(Birth to 2 years)',
  },
  {
    id: 6,
    image: images.girlHCFAChart,
    title: 'Head-circumference-for-age GIRLS(Birth to 2 years)',
  },
];

const Chart = () => {
  const {navigate} = useNavigation();
  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Growth Chart</Text>

      {boysChart.map(item => {
        const isOddIndex = item.id % 2 !== 0;

        return (
          <TouchableOpacity
            key={item.id}
            activeOpacity={0.9}
            style={[
              style.itemContainerStyle,
              isOddIndex ? style.boysContainerStyle : style.girlsContainerStyle,
            ]}
            onPress={() => {
              navigate('DisplayChart', item);
            }}>
            <Image
              source={isOddIndex ? icons.babyBoy : icons.babyGirl}
              resizeMode={'contain'}
              style={style.iconStyle}
            />

            <Text style={style.itemTextStyle}>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Chart;
