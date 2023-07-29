import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const BabyDetailsScreen = ({route}) => {
  const {babyDetails, docId} = route.params;
  const isFemale = babyDetails.gender === 'Female';

  const {navigate} = useNavigation();

  return (
    <View style={style.container}>
      <BackIcon />
      <View style={style.card}>
        <Text style={style.cardTitle}>Baby Details</Text>

        <View
          style={[
            style.innerCard,
            {borderColor: isFemale ? '#ffe4e8' : '#dff1ff'},
          ]}>
          <LinearGradient
            start={{x: 0, y: 1}}
            end={{x: 1, y: 1}}
            style={style.babyListItemGradientContainerStyle}
            colors={isFemale ? ['#ffe4e8', '#fff0f0'] : ['#dff1ff', '#f0f3ff']}>
            <Text style={style.label}>
              Name: <Text style={style.value}>{babyDetails.name}</Text>
            </Text>
            <Text style={style.label}>
              Gender: <Text style={style.value}>{babyDetails.gender}</Text>
            </Text>
            <Text style={style.label}>
              Date of Birth:{' '}
              <Text style={style.value}>{babyDetails.dateOfBirth}</Text>
            </Text>
            <Text style={style.label}>
              Hospital No:{' '}
              <Text style={style.value}>{babyDetails.hospitalNo}</Text>
            </Text>
            <Text style={style.label}>
              Inborn: <Text style={style.value}>{babyDetails.isInBorn}</Text>
            </Text>
            <Text style={style.label}>
              Weight(gms): <Text style={style.value}>{babyDetails.weight}</Text>
            </Text>
            <Text style={style.label}>
              Date of Discharge:{' '}
              <Text style={style.value}>{babyDetails.dateOfDischarge}</Text>
            </Text>
            <Text style={style.label}>
              Time of Birth:{' '}
              <Text style={style.value}>{babyDetails.timeOfBirth}</Text>
            </Text>
            <Text style={style.label}>
              Gestational Age(in weeks):{' '}
              <Text style={style.value}>{babyDetails.gestationalAge}</Text>
            </Text>
            <Text style={style.label}>
              Date of Visit:{' '}
              <Text style={style.value}>{babyDetails.dateOfVisit}</Text>
            </Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() =>
            navigate('PreventiveInjectionsGivenDates', {
              hospitalNo: babyDetails.hospitalNo,
            })
          }
          style={style.preventiveInjectionGivenDatesButton}>
          <Text style={style.preventiveInjectionGivenDatesButtonText}>
            Add Preventive Injection Given Dates
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigate('HearingTest', {babyDetails, docId})}
          style={style.preventiveInjectionGivenDatesButton}>
          <Text style={style.preventiveInjectionGivenDatesButtonText}>
            Add Hearing Test Results
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigate('HeadUltraSoundTest', {babyDetails, docId})}
          style={style.preventiveInjectionGivenDatesButton}>
          <Text style={style.preventiveInjectionGivenDatesButtonText}>
            Add Head Ultra Sound Test Results
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigate('OpdVisit', {babyDetails, docId})}
          style={style.preventiveInjectionGivenDatesButton}>
          <Text style={style.preventiveInjectionGivenDatesButtonText}>
            OPD Visit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BabyDetailsScreen;
