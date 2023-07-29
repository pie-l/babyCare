import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {style} from './style';
import {colors} from '../../helper/colors';

const GradientButton = ({
  buttonText,
  onPress,
  mainContainerStyle,
  buttonContainerStyle,
  buttonTextStyle,
  activeOpacity,
  isSecondary = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity || 0.75}
      onPress={onPress}
      style={mainContainerStyle}>
      <LinearGradient
        start={{x: 0, y: 1}}
        end={{x: 1, y: 1}}
        style={[style.containerStyle, buttonContainerStyle]}
        colors={[
          isSecondary ? colors.white : colors.lightParrot,
          isSecondary ? colors.white : colors.parrot,
        ]}>
        <Text style={[style.buttonTextStyle, buttonTextStyle]}>
          {buttonText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;
