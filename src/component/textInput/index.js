import React, {useState} from 'react';
import {Image, View, TextInput} from 'react-native';
import _ from 'lodash';
import {style} from './styles';
import {colors} from '../../helper/colors';
import {Icon} from '../index';
import {icons} from '../../helper/iconsConstants';

const TextInputComp = ({
  placeholder,
  value,
  isIconAvailable,
  icon,
  iconStyle,
  maxLength,
  onChangeText,
  autoCapitalize,
  multiLine,
  secureTextEntry = false,
  mainContainerStyle,
  keyboardType,
  inputStyle,
  placeholderTextColor,
  eyeColor,
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  const onButtonPress = () => setIsSecureTextEntry(!isSecureTextEntry);

  return (
    <View style={[style.mainContainer, style.shadowStyle, mainContainerStyle]}>
      {isIconAvailable && (
        <Image source={icon} style={[style.iconStyle, iconStyle]} />
      )}
      <TextInput
        style={[style.input, inputStyle, multiLine ? style.multiLine : {}]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor || colors.placeholderColor}
        value={value}
        maxLength={maxLength}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        multiline={multiLine}
        secureTextEntry={isSecureTextEntry}
        keyboardType={keyboardType}
      />
      {secureTextEntry && !_.isEmpty(value) ? (
        <Icon
          icon={icons.eye}
          isPressable={true}
          iconStyle={[
            style.eyeIconStyle,
            {tintColor: isSecureTextEntry ? eyeColor : null},
          ]}
          onIconPress={onButtonPress}
        />
      ) : null}
    </View>
  );
};

export default TextInputComp;
