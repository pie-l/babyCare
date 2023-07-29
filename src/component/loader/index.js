import React from 'react';
import {Text, View} from 'react-native';
import {style} from './styles';
import {lottie} from '../../helper/iconsConstants';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View style={style.containerStyle}>
      <LottieView
        source={lottie.babyLoading}
        autoPlay
        loop
        style={style.animationStyle}
      />

      <Text style={style.loadingTextStyle}>Loading..</Text>
    </View>
  );
};

export default Loader;
