import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {style} from './styles';
import {colors} from '../../helper/colors';
import {hp} from '../../helper/utils';
import {icons} from '../../helper/iconsConstants';

const CheckBox = ({onPress, containerStyle, value, isDisabled = false}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={1}
      onPress={onPress}
      style={[
        style.mainContainer,
        value
          ? {backgroundColor: isDisabled ? colors.grey : colors.lightParrot}
          : {
              borderColor: isDisabled ? colors.grey : colors.lightParrot,
              borderWidth: hp(0.123),
            },
        containerStyle,
      ]}>
      {value && (
        <Image
          source={icons.tick}
          resizeMode={'contain'}
          style={style.tickIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
