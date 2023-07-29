import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text, View} from 'react-native';
import {BackIcon, Button, GradientButton, Loader} from '../../component';
import {style} from './style';
import moment from 'moment/moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {displayFlashMessage, hp, wp} from '../../helper/utils';
import CheckBox from '../../component/checkBox';
import {firebase} from '@react-native-firebase/firestore';
import {isEmpty} from 'lodash';
import {resetNavigationRoute} from '../../navigation/navigationsServices';
import {colors} from '../../helper/colors';

const HeadUltraSoundTest = ({route}) => {
  const {babyDetails, docId} = route.params;

  const [headUltraSoundScreens, setHeadUltraSoundScreens] = useState([
    {
      id: 1,
      date1: '',
      date2: '',
      left: '',
      right: '',
      openDatePicker1: false,
      openDatePicker2: false,
    },
    {
      id: 2,
      date1: '',
      date2: '',
      left: '',
      right: '',
      openDatePicker1: false,
      openDatePicker2: false,
    },
    {
      id: 3,
      date1: '',
      date2: '',
      left: '',
      right: '',
      openDatePicker1: false,
      openDatePicker2: false,
    },
    {
      id: 4,
      date1: '',
      date2: '',
      left: '',
      right: '',
      openDatePicker1: false,
      openDatePicker2: false,
    },
    {
      id: 5,
      date1: '',
      date2: '',
      left: '',
      right: '',
      openDatePicker1: false,
      openDatePicker2: false,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isEmpty(babyDetails?.headUltraSoundTestResults)) {
      setHeadUltraSoundScreens(
        babyDetails?.headUltraSoundTestResults.map(item => ({
          ...item,
          openDatePicker1: false,
          openDatePicker2: false,
        })),
      );
    }
  }, []);

  const onResetPress = () => {
    console.log('2====>', babyDetails.headUltraSoundTestResults);
    if (!isEmpty(babyDetails?.headUltraSoundTestResults)) {
      setHeadUltraSoundScreens(
        babyDetails?.headUltraSoundTestResults.map(item => ({
          ...item,
          openDatePicker1: false,
          openDatePicker2: false,
        })),
      );
    } else {
      setHeadUltraSoundScreens(
        [1, 2, 3, 4, 5].map(item => {
          return {
            id: item,
            date1: '',
            date2: '',
            left: '',
            right: '',
            openDatePicker1: false,
            openDatePicker2: false,
          };
        }),
      );
    }
  };

  const handleDatePickerConfirm = (date, setDate) => {
    setDate(moment(date).format('DD/MM/YYYY'));
  };

  const onSavePress = () => {
    setIsLoading(true);
    const results = headUltraSoundScreens.map(item => {
      return {
        date1: item.date1,
        date2: item.date2,
        id: item.id,
        left: item.left,
        right: item.right,
      };
    });

    firebase
      .firestore()
      .collection('babies')
      .doc(docId)
      .update({
        headUltraSoundTestResults: results,
      })
      .then(() => {
        setIsLoading(false);
        Alert.alert(
          '',
          'Head Ultra Sound Results Added Successfully',
          [{text: 'OK', onPress: () => resetNavigationRoute('PhysicianHome')}],
          {cancelable: false},
        );
        console.log('Fields added successfully.');
      })
      .catch(error => {
        setIsLoading(false);
        displayFlashMessage('Sorry Something Went Wrong...', 'success');
        console.error('Error adding fields:', error);
      });
  };

  const renderHeadUltraSoundScreens = headUltraSoundScreen => {
    const {id, date1, date2, left, right, openDatePicker1, openDatePicker2} =
      headUltraSoundScreen;

    return (
      <View key={id} style={{marginTop: hp(3)}}>
        <Text style={style.hearingScreenTextStyle}>
          Head Ultra Sound Screen {id}
        </Text>

        <Button
          buttonText={date1 ? date1 : `Add Head Ultra Sound Screen ${id} date`}
          onPress={() =>
            setHeadUltraSoundScreens(prevState => {
              const updateHeadUltraSoundScreens = [...prevState];
              updateHeadUltraSoundScreens[id - 1].openDatePicker1 = true;
              return updateHeadUltraSoundScreens;
            })
          }
          isDisabled={!isEmpty(date1)}
          buttonContainerStyle={[
            style.buttonContainerStyle,
            !isEmpty(date1) && style.disabledButtonContainerStyle,
          ]}
          buttonTextStyle={style.buttonTextStyle}
        />

        <View style={{marginTop: hp(0)}}>
          <Text style={style.checkboxTitleStyle}>Left</Text>

          <View style={style.checkboxesContainerStyle}>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                isDisabled={!isEmpty(left)}
                value={left === 'Passed'}
                onPress={() =>
                  setHeadUltraSoundScreens(prevState => {
                    const updateHeadUltraSoundScreens = [...prevState];
                    updateHeadUltraSoundScreens[id - 1].left = 'Passed';
                    return updateHeadUltraSoundScreens;
                  })
                }
              />
              <Text style={style.checkboxTextStyle}>Passed</Text>
            </View>

            <View style={style.checkboxSecTextStyle}>
              <CheckBox
                isDisabled={!isEmpty(left)}
                value={left === 'Refer'}
                onPress={() =>
                  setHeadUltraSoundScreens(prevState => {
                    const updateHeadUltraSoundScreens = [...prevState];
                    updateHeadUltraSoundScreens[id - 1].left = 'Refer';
                    return updateHeadUltraSoundScreens;
                  })
                }
              />
              <Text style={style.checkboxTextStyle}>Refer</Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: hp(1)}}>
          <Text style={style.checkboxTitleStyle}>Right</Text>

          <View style={style.checkboxesContainerStyle}>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                isDisabled={!isEmpty(right)}
                value={right === 'Passed'}
                onPress={() =>
                  setHeadUltraSoundScreens(prevState => {
                    const updateHeadUltraSoundScreens = [...prevState];
                    updateHeadUltraSoundScreens[id - 1].right = 'Passed';
                    return updateHeadUltraSoundScreens;
                  })
                }
              />
              <Text style={style.checkboxTextStyle}>Passed</Text>
            </View>

            <View style={style.checkboxSecTextStyle}>
              <CheckBox
                isDisabled={!isEmpty(right)}
                value={right === 'Refer'}
                onPress={() =>
                  setHeadUltraSoundScreens(prevState => {
                    const updateHeadUltraSoundScreens = [...prevState];
                    updateHeadUltraSoundScreens[id - 1].right = 'Refer';
                    return updateHeadUltraSoundScreens;
                  })
                }
              />
              <Text style={style.checkboxTextStyle}>Refer</Text>
            </View>
          </View>
        </View>

        <Button
          buttonText={date2 ? date2 : 'To Repeat on date'}
          onPress={() =>
            setHeadUltraSoundScreens(prevState => {
              const updateHeadUltraSoundScreens = [...prevState];
              updateHeadUltraSoundScreens[id - 1].openDatePicker2 = true;
              return updateHeadUltraSoundScreens;
            })
          }
          isDisabled={!isEmpty(date2)}
          buttonContainerStyle={[
            style.buttonContainerStyle,
            !isEmpty(date2) && style.disabledButtonContainerStyle,
          ]}
          buttonTextStyle={style.buttonTextStyle}
        />

        <DateTimePicker
          isVisible={openDatePicker1}
          onConfirm={date =>
            handleDatePickerConfirm(
              date,
              setHeadUltraSoundScreens(prevState => {
                const updateHeadUltraSoundScreens = [...prevState];
                updateHeadUltraSoundScreens[id - 1].date1 =
                  moment(date).format('DD/MM/YYYY');
                updateHeadUltraSoundScreens[id - 1].openDatePicker1 = false;
                return updateHeadUltraSoundScreens;
              }),
            )
          }
          onCancel={() => {
            setHeadUltraSoundScreens(prevState => {
              const updateHeadUltraSoundScreens = [...prevState];
              updateHeadUltraSoundScreens[id - 1].openDatePicker1 = false;
              return updateHeadUltraSoundScreens;
            });
          }}
        />

        <DateTimePicker
          isVisible={openDatePicker2}
          onConfirm={date =>
            handleDatePickerConfirm(
              date,
              setHeadUltraSoundScreens(prevState => {
                const updateHeadUltraSoundScreens = [...prevState];
                updateHeadUltraSoundScreens[id - 1].date2 =
                  moment(date).format('DD/MM/YYYY');
                updateHeadUltraSoundScreens[id - 1].openDatePicker2 = false;
                return updateHeadUltraSoundScreens;
              }),
            )
          }
          onCancel={() => {
            setHeadUltraSoundScreens(prevState => {
              const updateHeadUltraSoundScreens = [...prevState];
              updateHeadUltraSoundScreens[id - 1].openDatePicker2 = false;
              return updateHeadUltraSoundScreens;
            });
          }}
        />
      </View>
    );
  };

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Head Ultra Sound Test</Text>

      <View style={style.hearingScreenInstructionConStyle}>
        <Text style={style.hearingScreenTitleTextStyle}>Instructions:</Text>
        <Text style={style.hearingScreenTextStyle}>
          Grey color means it's disabled and you can't change it after you save{' '}
        </Text>
      </View>

      <ScrollView contentContainerStyle={style.contentContainerStyle}>
        {headUltraSoundScreens.map(headUltraSoundScreen =>
          renderHeadUltraSoundScreens(headUltraSoundScreen),
        )}
      </ScrollView>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <GradientButton
          buttonText={'Reset Not Saved Details'}
          isSecondary={true}
          onPress={onResetPress}
          buttonContainerStyle={{
            marginVertical: 20,
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: colors.lightParrot,
            paddingHorizontal: wp(1),
            width: wp(40),
          }}
          buttonTextStyle={{
            color: colors.lightParrot,
          }}
        />
        <GradientButton
          buttonText={'Save'}
          onPress={onSavePress}
          buttonContainerStyle={{marginVertical: 20, width: wp(40)}}
        />
      </View>

      {isLoading && <Loader />}
    </View>
  );
};

export default HeadUltraSoundTest;
