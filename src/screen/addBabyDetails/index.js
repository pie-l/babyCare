import React, {useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import {BackIcon, GradientButton, Loader, TextInputComp} from '../../component';
import {style} from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {displayFlashMessage, hp, wp} from '../../helper/utils';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {fontFamily, fontSize} from '../../helper/fontUtils';
import CheckBox from '../../component/checkBox';
import {colors} from '../../helper/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import {isEmpty} from 'lodash';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import HeadUltraSoundTest from '../headUltraSoundTest';

const AddBabyDetails = () => {
  const [name, setName] = useState('');
  const [hospitalNo, setHospitalNo] = useState('');
  const [motherHospitalNo, setMotherHospitalNo] = useState('');
  const [isInBorn, setIsInBorn] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfDischarge, setDateOfDischarge] = useState('');
  const [dateOfVisit, setDateOfVisit] = useState('');
  const [timeOfBirth, setTimeOfBirth] = useState('');
  const [weight, setWeight] = useState('');
  const [openReasonNewbornPicker, setOpenReasonNewbornPicker] = useState(false);
  const [reasonNewborn, setReasonNewborn] = useState('');
  const [newbornReasons, setNewbornReasons] = useState([
    {label: 'Preterm', value: 'Preterm'},
    {label: 'Neuromuscular', value: 'Neuromuscular'},
    {label: 'Sepsis', value: 'Sepsis'},
    {label: 'Ventilation', value: 'Ventilation'},
    {label: 'Surgery', value: 'Surgery'},
    {label: 'Miscellaneous', value: 'Miscellaneous'},
  ]);
  const [miscellaneousReason, setMiscellaneousReason] = useState('');
  const [isDOBCalenderOpen, setIsDOBCalenderOpen] = useState(false);
  const [isDODCalenderOpen, setIsDODCalenderOpen] = useState(false);
  const [isDOVCalenderOpen, setIsDOVCalenderOpen] = useState(false);
  const [isTOBCalenderOpen, setIsTOBCalenderOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [gestationalAge, setGestationalAge] = useState('');

  const {goBack} = useNavigation();

  const db = firestore();

  const onSavePress = async () => {
    let givenDates = {};
    for (let i = 1; i <= 34; i++) {
      const key = 'i' + i;
      givenDates[key] = '';
    }

    if (!reasonNewborn) {
      displayFlashMessage(
        'Please Select Reason of New born to require folow up:',
        'danger',
      );
    } else if (reasonNewborn === 'Miscellaneous' && !miscellaneousReason) {
      displayFlashMessage(
        'Please Enter the reason for the Miscellaneous',
        'danger',
      );
    } else if (!name) {
      displayFlashMessage('Please Enter the Name', 'danger');
    } else if (!hospitalNo) {
      displayFlashMessage('Please Enter the Hospital No.', 'danger');
    } else if (!motherHospitalNo) {
      displayFlashMessage('Please Enter the Mother Hospital No.', 'danger');
    } else if (!isInBorn) {
      displayFlashMessage('Please Select Baby is In born or not', 'danger');
    } else if (!gender) {
      displayFlashMessage('Please Select Baby Gender', 'danger');
    } else if (!weight) {
      displayFlashMessage('Please Select Birth Weight', 'danger');
    } else if (!dateOfBirth) {
      displayFlashMessage('Please Select Date of Birth', 'danger');
    } else if (!timeOfBirth) {
      displayFlashMessage('Please Select Time of Birth', 'danger');
    } else if (!dateOfDischarge) {
      displayFlashMessage('Please Select Date of Discharge', 'danger');
    } else if (!dateOfVisit) {
      displayFlashMessage('Please Select Date of Visit', 'danger');
    } else if (!gestationalAge) {
      displayFlashMessage('Please Enter the Gestational Age', 'danger');
    } else {
      try {
        setIsUploading(true);
        await db.collection('babies').add({
          dateOfBirth,
          dateOfDischarge,
          dateOfVisit,
          gender,
          hospitalNo,
          isInBorn,
          miscellaneousReason,
          motherHospitalNo,
          name,
          reasonForNewborn: reasonNewborn,
          timeOfBirth,
          weight,
          gestationalAge,
          preventiveInjections: {
            givenDates,
          },
          hearingResults: [],
          headUltraSoundTestResults: [],
        });
        setIsUploading(false);
        Alert.alert(
          '',
          'Details Added Successfully',
          [{text: 'OK', onPress: () => goBack()}],
          {cancelable: false},
        );
      } catch (error) {
        setIsUploading(false);
        displayFlashMessage('Error while adding details', 'danger');
      }
    }
  };

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Add Baby Details</Text>

      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'handled'}
        contentContainerStyle={style.scrollViewContainerStyle}>
        <Text style={style.inputTitleTextStyle}>
          Reason For New born to require Follow up
        </Text>

        <DropDownPicker
          listMode={'SCROLLVIEW'}
          scrollViewProps={{nestedScrollEnabled: true}}
          open={openReasonNewbornPicker}
          value={reasonNewborn}
          items={newbornReasons}
          setOpen={setOpenReasonNewbornPicker}
          setValue={value => {
            setReasonNewborn(value);
            setMiscellaneousReason('');
          }}
          setItems={setNewbornReasons}
          placeholder={
            'Please Select a reason for Newborn to require follow up'
          }
          containerStyle={{
            zIndex: 999,
            marginTop: hp(0.75),
          }}
          style={{
            backgroundColor: colors.lightParrot10,
            borderWidth: 1,
            borderColor: colors.lightParrot,
            zIndex: 9999,
          }}
          dropDownContainerStyle={{
            backgroundColor: '#c3ffd9',
            borderBottomWidth: 1,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderColor: colors.lightParrot,
            zIndex: 9999,
          }}
          labelStyle={{
            fontSize: fontSize(1.72),
            lineHeight: hp(1.72),
            fontFamily: fontFamily.bentonRegular,
            color: colors.textTitle,
          }}
          listItemLabelStyle={{
            fontSize: fontSize(1.72),
            lineHeight: hp(1.72),
            fontFamily: fontFamily.bentonRegular,
            color: colors.textTitle,
          }}
          listItemContainerStyle={{
            backgroundColor: '#ebffe9',
            height: hp(4),
          }}
        />

        {reasonNewborn === 'Miscellaneous' && (
          <TextInputComp
            isIconAvailable={false}
            value={miscellaneousReason}
            onChangeText={text => setMiscellaneousReason(text)}
            placeholder={'Please enter reason of Miscellaneous'}
            mainContainerStyle={style.inputContainerStyle}
            placeholderTextColor={colors.placeholderColor}
          />
        )}

        <Text style={style.inputTitleTextStyle}>Name</Text>
        <TextInputComp
          isIconAvailable={false}
          value={name}
          onChangeText={text => setName(text)}
          placeholder={'Enter Name'}
          mainContainerStyle={style.inputContainerStyle}
          placeholderTextColor={colors.placeholderColor}
        />

        <Text style={style.inputTitleTextStyle}>Hosp. No.</Text>
        <TextInputComp
          isIconAvailable={false}
          value={hospitalNo}
          onChangeText={text => setHospitalNo(text)}
          placeholder={'Enter Hosp. No.'}
          mainContainerStyle={style.inputContainerStyle}
          placeholderTextColor={colors.placeholderColor}
        />

        <Text style={style.inputTitleTextStyle}>Mother Hosp. No</Text>
        <TextInputComp
          isIconAvailable={false}
          value={motherHospitalNo}
          onChangeText={text => setMotherHospitalNo(text)}
          placeholder={'Enter Mother Hosp. No.'}
          mainContainerStyle={style.inputContainerStyle}
          placeholderTextColor={colors.placeholderColor}
        />

        <View style={{marginTop: hp(2)}}>
          <Text style={style.inputTitleTextStyle}>Inborn (Y/N)</Text>

          <View style={style.genderCheckboxesContainerStyle}>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                value={isInBorn === 'Yes'}
                onPress={() => setIsInBorn('Yes')}
              />
              <Text style={style.checkboxTextStyle}>Yes</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp(8.27),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CheckBox
                value={isInBorn === 'No'}
                onPress={() => setIsInBorn('No')}
              />
              <Text style={style.checkboxTextStyle}>No</Text>
            </View>
          </View>
        </View>

        <View style={{marginTop: hp(2)}}>
          <Text style={style.inputTitleTextStyle}>Gender</Text>

          <View style={style.genderCheckboxesContainerStyle}>
            <View style={{flexDirection: 'row'}}>
              <CheckBox
                value={gender === 'Male'}
                onPress={() => setGender('Male')}
              />
              <Text style={style.checkboxTextStyle}>Male</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp(8.27),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CheckBox
                value={gender === 'Female'}
                onPress={() => setGender('Female')}
              />
              <Text style={style.checkboxTextStyle}>Female</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginLeft: wp(8.27),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <CheckBox
                value={gender === 'Ambiguous'}
                onPress={() => setGender('Ambiguous')}
              />
              <Text style={style.checkboxTextStyle}>Ambiguous</Text>
            </View>
          </View>
        </View>

        <Text style={style.inputTitleTextStyle}>Birth Weight (g) :</Text>

        <TextInputComp
          isIconAvailable={false}
          value={weight}
          onChangeText={text => setWeight(text)}
          placeholder={'Enter Birth Weight (g) :'}
          mainContainerStyle={style.inputContainerStyle}
          keyboardType={'numeric'}
          placeholderTextColor={colors.placeholderColor}
        />

        <Text style={style.inputTitleTextStyle}>
          Date of birth (DD/MM/YYYY)
        </Text>

        <TouchableOpacity
          style={style.datePickerContainerStyle}
          activeOpacity={0.75}
          onPress={() => setIsDOBCalenderOpen(true)}>
          <Text>
            {isEmpty(dateOfBirth) ? 'Select Date of Birth' : dateOfBirth}
          </Text>
        </TouchableOpacity>

        <DateTimePicker
          isVisible={isDOBCalenderOpen}
          onConfirm={date => {
            setDateOfBirth(moment(date).format('DD/MM/YYYY'));
            setIsDOBCalenderOpen(false);
          }}
          onCancel={() => {
            setIsDOBCalenderOpen(false);
          }}
        />

        <Text style={style.inputTitleTextStyle}>
          Time of birth (HH:MM am/pm)
        </Text>

        <TouchableOpacity
          style={style.datePickerContainerStyle}
          activeOpacity={0.75}
          onPress={() => setIsTOBCalenderOpen(true)}>
          <Text>
            {isEmpty(timeOfBirth) ? 'Select Time of birth' : timeOfBirth}
          </Text>
        </TouchableOpacity>

        <DateTimePicker
          mode={'time'}
          isVisible={isTOBCalenderOpen}
          onConfirm={time => {
            setTimeOfBirth(moment(time).format('hh:mm A'));
            setIsTOBCalenderOpen(false);
          }}
          onCancel={() => {
            setIsTOBCalenderOpen(false);
          }}
        />

        <Text style={style.inputTitleTextStyle}>
          Date of discharge (DD/MM/YYYY)
        </Text>

        <TouchableOpacity
          style={style.datePickerContainerStyle}
          activeOpacity={0.75}
          onPress={() => setIsDODCalenderOpen(true)}>
          <Text>
            {isEmpty(dateOfDischarge)
              ? 'Select Date of Discharge'
              : dateOfDischarge}
          </Text>
        </TouchableOpacity>

        <DateTimePicker
          isVisible={isDODCalenderOpen}
          onConfirm={date => {
            setDateOfDischarge(moment(date).format('DD/MM/YYYY'));
            setIsDODCalenderOpen(false);
          }}
          onCancel={() => {
            setIsDODCalenderOpen(false);
          }}
        />

        <Text style={style.inputTitleTextStyle}>
          Date of visit (DD/MM/YYYY)
        </Text>

        <TouchableOpacity
          style={style.datePickerContainerStyle}
          activeOpacity={0.75}
          onPress={() => setIsDOVCalenderOpen(true)}>
          <Text>
            {isEmpty(dateOfVisit) ? 'Select Date of Visit' : dateOfVisit}
          </Text>
        </TouchableOpacity>

        <DateTimePicker
          isVisible={isDOVCalenderOpen}
          onConfirm={date => {
            setDateOfVisit(moment(date).format('DD/MM/YYYY'));
            setIsDOVCalenderOpen(false);
          }}
          onCancel={() => {
            setIsDOVCalenderOpen(false);
          }}
        />

        <Text style={style.inputTitleTextStyle}>
          Gestational Age (in Weeks) :
        </Text>

        <TextInputComp
          isIconAvailable={false}
          value={gestationalAge}
          onChangeText={text => setGestationalAge(text)}
          placeholder={'Enter Gestational Age (in weeks) :'}
          mainContainerStyle={style.inputContainerStyle}
          keyboardType={'numeric'}
          placeholderTextColor={colors.placeholderColor}
        />

        <GradientButton
          buttonText={'Save'}
          onPress={onSavePress}
          buttonContainerStyle={{marginTop: hp(4)}}
        />
      </KeyboardAwareScrollView>

      {isUploading && <Loader />}
    </View>
  );
};

export default AddBabyDetails;
