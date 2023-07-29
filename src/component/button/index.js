import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {style} from './style';

const Button = ({
  buttonText,
  isIcon,
  icon,
  onPress,
  iconStyle,
  buttonTextStyle,
  buttonContainerStyle,
  isDisabled = false,
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={0.75}
      onPress={onPress}
      style={[style.containerStyle, buttonContainerStyle]}>
      {isIcon && <Image source={icon} style={[style.iconStyle, iconStyle]} />}
      <Text style={[style.buttonTextStyle, buttonTextStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;
