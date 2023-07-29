import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BackIcon, Icon, Loader} from '../../component';
import {style} from './style';
import firestore from '@react-native-firebase/firestore';
import {Row, Rows, Table} from 'react-native-table-component';
import {icons} from '../../helper/iconsConstants';
import {isEmpty} from 'lodash';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {displayFlashMessage} from '../../helper/utils';

const TABLE_HEAD = ['Prophylactic Injection', 'Date Given'];

const PreventiveInjectionsGivenDates = ({route}) => {
  const hospitalNo = route.params.hospitalNo;
  const [givenDates, setGivenDates] = useState([
    ['BCG', ''],
    ['OPV 0', ''],
    ['Hep- B1(v)', ''],
    ['DTwP 1/DTap', ''],
    ['Hep- B2', ''],
    ['Hib 1', ''],
    ['IPV 1/OPV', ''],
    ['Rotavirus 1', ''],
    ['(a)PCV 1', ''],
    ['DTwP 2/DTap', ''],
    ['Hib 2', ''],
    ['IPV 2/OPV', ''],
    ['Rotavirus 2', ''],
    ['(a)PCV 2', ''],
    ['DTwP 3/DTap', ''],
    ['Hib 3', ''],
    ['IPV 3/OPV', ''],
    ['Rotavirus 3', ''],
    ['(a)PCV 3', ''],
    ['OPV 1#', ''],
    ['Hep- B3', ''],
    ['FLU**', ''],
    ['TCV', ''],
    ['MMR 1', ''],
    ['OPV 2#', ''],
    ['Hep -A1', ''],
    ['MMR 2', ''],
    ['Varicella 1', ''],
    ['(a) PCV Booster', ''],
    ['DTwP B1/DTap B1', ''],
    ['Hib B11', ''],
    ['IPV B1', ''],
    ['Hep- A2', ''],
    ['TPSV^', ''],
  ]);
  const [isCalenderOpen, setIsCalenderOpen] = useState(false);
  const [dateId, setDateId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [documentId, setDocumentId] = useState('');

  useEffect(() => {
    const subscriber = firestore()
      .collection('babies')
      .onSnapshot(documentSnapshot => {
        const data = documentSnapshot.docs.find(
          item => item._data.hospitalNo === hospitalNo,
        );

        setDocumentId(data.id);

        const dates = givenDates.map(([key, value], index) => {
          const item =
            data._data.preventiveInjections.givenDates['i' + (index + 1)];
          return [
            key,
            isEmpty(item)
              ? element(key, 'i' + (index + 1))
              : data._data.preventiveInjections.givenDates['i' + (index + 1)],
          ];
        });

        setGivenDates(dates);
      });

    return () => subscriber();
  }, []);

  const element = (item, index) => {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon
          isPressable
          onIconPress={() => {
            setIsCalenderOpen(true);
            setDateId(index);
          }}
          icon={icons.calendar}
        />
      </View>
    );
  };

  const onDatePress = date => {
    setIsLoading(true);
    firestore()
      .collection('babies')
      .doc(documentId)
      .update({
        ['preventiveInjections.givenDates.' + dateId]:
          moment(date).format('DD/MM/YYYY'),
      })
      .then(() => {
        setIsLoading(false);
        displayFlashMessage('Date Added successfully.', 'success');
      })
      .catch(error => {
        setIsLoading(false);
        displayFlashMessage('Error adding date', 'danger');
        console.log('Error updating document field:', error);
      });
    setIsCalenderOpen(false);
    setDateId('');
  };

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Preventive Injections Given Dates</Text>

      <ScrollView contentContainerStyle={style.tableContainerStyle}>
        <Table borderStyle={style.tableStyle}>
          <Row data={TABLE_HEAD} style={style.head} textStyle={style.text} />

          <Rows data={givenDates} textStyle={style.text} />
        </Table>
      </ScrollView>

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

export default PreventiveInjectionsGivenDates;
