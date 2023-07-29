import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from '../../component';
import {images} from '../../helper/iconsConstants';
import {strings} from '../../helper/strings';
import {style} from './style';
import {useDispatch} from 'react-redux';
import {setRole} from '../../actions/mainAction';
import {ROLES} from '../../helper/applicationConstants';
import {useNavigation} from '@react-navigation/native';

const Role = () => {
  const dispatch = useDispatch();

  const {navigate} = useNavigation();

  const onPhysiciansButtonPress = () => {
    dispatch(setRole(ROLES.physician));
  };

  const onUserButtonPress = () => {
    navigate('UserLogin');
  };

  return (
    <View style={style.containerStyle}>
      <Image
        source={images.logo}
        resizeMode={'contain'}
        style={style.logoStyle}
      />

      <Text style={style.titleStyle}>BabyCare</Text>

      <Text style={style.descriptionStyle}>{strings.appDescription}</Text>

      <Text style={style.continueUsStyle}>Continue as</Text>

      <Button buttonText={'Physician'} onPress={onPhysiciansButtonPress} />

      <Text style={style.orTextStyle}>- or -</Text>

      <Button buttonText={'Parent'} onPress={onUserButtonPress} />
    </View>
  );
};

export default Role;
