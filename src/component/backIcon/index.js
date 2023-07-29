import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';
import {icons} from '../../helper/iconsConstants';
import {Icon} from '../index';

const BackIcon = ({iconContainerStyle}) => {
  const {goBack} = useNavigation();

  return (
    <Icon
      isPressable={true}
      icon={icons.back}
      iconStyle={style.backIconStyle}
      iconContainerStyle={[style.backIconContainerStyle, iconContainerStyle]}
      onIconPress={goBack}
    />
  );
};

export default BackIcon;
