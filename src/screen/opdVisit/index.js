import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {BackIcon, GradientButton, Loader} from '../../component';
import {style} from './style';
import moment from 'moment/moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import firestore from '@react-native-firebase/firestore';
import {displayFlashMessage} from '../../helper/utils';
import {resetNavigationRoute} from '../../navigation/navigationsServices';

const OpdVisit = ({route}) => {
  const {babyDetails, docId} = route.params;

  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Calculate Expected Delivery Date
  const getExpectedDeliveryDate = (dateOfBirth, gestationalAge) => {
    return moment(dateOfBirth, 'DD/MM/YYYY')
      .clone()
      .add(280 - gestationalAge * 7, 'days')
      .format('DD/MM/YYYY');
  };

  // Calculate Corrected Gestational Age
  const getCorrectedGestationalAge = (dateOfBirth, gestationalAge) => {
    const expectedDeliveryDate = getExpectedDeliveryDate(
      dateOfBirth,
      gestationalAge,
    );
    const currentDate = moment();
    const duration = moment.duration(
      moment(currentDate, 'DD/MM/YYYY').diff(
        moment(expectedDeliveryDate, 'DD/MM/YYYY'),
      ),
    ); // Calculate the duration between the two dates
    const weeks = Math.floor(duration.asWeeks()); // Get the whole number of weeks
    const days = Math.floor(duration.asDays() % 7); // Get the remaining days

    return weeks + ' weeks ' + days + ' days';
  };

  // Calculate Actual Age const actualAge = moment(babyDetails.dateOfVisit, 'DD/MM/YYYY').diff(babyDetails.dateOfBirth, 'weeks').toString();
  const getActualAge = dateOfBirth => {
    const now = moment(); // Get the current date
    const age = moment.duration(now.diff(moment(dateOfBirth, 'DD/MM/YYYY'))); // Calculate the duration between the current date and date of birth
    const weeks = Math.floor(age.asWeeks()); // Get the whole number of weeks
    const days = Math.floor(age.asDays() % 7); // Get the remaining days

    return weeks + ' weeks ' + days + ' days';
  };

  const onAddAppointmentDataClicked = () => setIsCalenderOpen(true);

  const onDatePress = async date => {
    try {
      setIsLoading(true);

      const documentRef = firestore().collection('babies').doc(docId);
      let lastScheduledDate = '';

      await documentRef
        .get()
        .then(doc => {
          if (doc.exists) {
            const data = doc.data();
            lastScheduledDate = data?.nextOpdVisitScheduledDate || '';
          }
        })
        .catch(error => {
          console.error('Error getting document:', error);
        });

      if (lastScheduledDate) {
        documentRef
          .update({
            nextOpdVisitScheduledDate: moment(date).format('DD/MM/YYYY'),
            pastOpdVisitDates:
              firestore.FieldValue.arrayUnion(lastScheduledDate),
          })
          .then(() => {
            setIsLoading(false);
            Alert.alert(
              '',
              'New Appointment Date added successfully',
              [
                {
                  text: 'OK',
                  onPress: () => resetNavigationRoute('PhysicianHome'),
                },
              ],
              {cancelable: false},
            );
          })
          .catch(error => {
            setIsLoading(false);
            displayFlashMessage('Error adding date', 'danger');
            console.error('Error updating document:', error);
          });
      } else {
        documentRef
          .update({
            nextOpdVisitScheduledDate: moment(date).format('DD/MM/YYYY'),
          })
          .then(() => {
            setIsLoading(false);
            Alert.alert(
              '',
              'New Appointment Date added successfully',
              [
                {
                  text: 'OK',
                  onPress: () => resetNavigationRoute('PhysicianHome'),
                },
              ],
              {cancelable: false},
            );
          })
          .catch(error => {
            setIsLoading(false);
            displayFlashMessage('Error adding date', 'danger');
            console.error('Error updating document:', error);
          });
      }

      setIsCalenderOpen(false);
    } catch (e) {
      setIsCalenderOpen(false);
      setIsLoading(false);
      displayFlashMessage('Sorry Something Went Wrong..', 'danger');
      console.log('====>', e);
    }
  };

  return (
    <View style={style.container}>
      <BackIcon />

      <View style={style.card}>
        <Text style={style.cardTitle}>OPD Visit</Text>

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
          Hospital No: <Text style={style.value}>{babyDetails.hospitalNo}</Text>
        </Text>

        <Text style={style.label}>
          Inborn: <Text style={style.value}>{babyDetails.isInBorn}</Text>
        </Text>

        <Text style={style.label}>
          Weight: <Text style={style.value}>{babyDetails.weight}</Text>
        </Text>

        <Text style={style.label}>
          Gestational Age(in weeks):{' '}
          <Text style={style.value}>{babyDetails.gestationalAge}</Text>
        </Text>

        <Text style={style.label}>
          Date of Visit:{' '}
          <Text style={style.value}>{babyDetails.dateOfVisit}</Text>
        </Text>

        <Text style={style.label}>
          Corrected Gestational Age (in weeks):{' '}
          <Text style={style.value}>
            {getCorrectedGestationalAge(
              babyDetails.dateOfBirth,
              babyDetails.gestationalAge,
            )}
          </Text>
        </Text>

        <Text style={style.label}>
          Actual Age (in weeks):{' '}
          <Text style={style.value}>
            {getActualAge(babyDetails.dateOfBirth)}
          </Text>
        </Text>

        <Text style={style.label}>
          Expected Delivery Date:{' '}
          <Text style={style.value}>
            {getExpectedDeliveryDate(
              babyDetails.dateOfBirth,
              babyDetails.gestationalAge,
            )}
          </Text>
        </Text>

        {babyDetails?.pastOpdVisitDates && (
          <Text style={style.label}>
            Past Appointment Dates:{' '}
            <Text style={style.value}>
              {babyDetails?.pastOpdVisitDates.join(', ')}
            </Text>
          </Text>
        )}

        {babyDetails?.nextOpdVisitScheduledDate && (
          <Text style={style.label}>
            Upcoming Appointment Date:{' '}
            <Text style={style.value}>
              {babyDetails?.nextOpdVisitScheduledDate}
            </Text>
          </Text>
        )}

        <GradientButton
          buttonText={'Add Next Appointment Date'}
          onPress={onAddAppointmentDataClicked}
          activeOpacity={0.75}
          buttonContainerStyle={style.addNextAppointmentDate}
        />
      </View>

      <DateTimePicker
        isVisible={isCalenderOpen}
        onConfirm={onDatePress}
        onCancel={() => {
          setIsCalenderOpen(false);
        }}
      />

      {isLoading && <Loader />}
    </View>
  );
};

export default OpdVisit;
