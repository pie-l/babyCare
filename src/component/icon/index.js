import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {style} from './styles';

const Icon = ({
  isPressable,
  iconContainerStyle,
  onIconPress,
  iconStyle,
  icon,
  resizeMode = 'contain',
}) => {
  return (
    <>
      {isPressable ? (
        <TouchableOpacity
          activeOpacity={0.75}
          style={[style.containerStyle, iconContainerStyle]}
          onPress={onIconPress}>
          <Image
            style={[style.iconStyle, iconStyle]}
            source={icon}
            resizeMode={resizeMode}
          />
        </TouchableOpacity>
      ) : (
        <View style={[style.containerStyle, iconContainerStyle]}>
          <Image
            style={[style.iconStyle, iconStyle]}
            source={icon}
            resizeMode={resizeMode}
          />
        </View>
      )}
    </>
  );
};

export default Icon;
