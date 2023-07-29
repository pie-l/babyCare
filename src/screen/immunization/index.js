import React from 'react';
import {Text, View} from 'react-native';
import {BackIcon, ImmunizationTable} from '../../component';
import {style} from './style';
import {useSelector} from 'react-redux';

const Immunization = () => {
  const {babyDetails} = useSelector(state => state.main);

  const preventiveInjectionsDates =
    babyDetails?.preventiveInjections?.givenDates;

  return (
    <View style={style.containerStyle}>
      <View style={style.titleContainerStyle}>
        <BackIcon iconContainerStyle={style.backIconContainerStyle} />

        <Text style={style.titleStyle}>Schedule of Preventive Injections</Text>
      </View>

      <ImmunizationTable
        preventiveInjectionsDates={preventiveInjectionsDates}
      />
    </View>
  );
};

export default Immunization;
