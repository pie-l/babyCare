import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {GradientButton, Icon, Loader, TextInputComp} from '../../component';
import {icons} from '../../helper/iconsConstants';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {
  displayFlashMessage,
  hp,
  validateMobileNumber,
} from '../../helper/utils';
import {colors} from '../../helper/colors';
import {firebase} from '@react-native-firebase/firestore';

const Home = () => {
  const {navigate} = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const {babyDetails, docId} = useSelector(state => state.main);
  const isFemale = babyDetails.gender === 'Female';

  useEffect(() => {
    firebase
      .firestore()
      .collection('babies')
      .doc(docId)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          const documentData = documentSnapshot.data();
          if (documentData.hasOwnProperty('parentName')) {
            console.log('The field exists in the document.');
          } else {
            setIsModalVisible(true);
            console.log('The field does not exist in the document.');
          }
        } else {
          console.log('The document does not exist.');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);

  const onSavePress = () => {
    if (!name) {
      displayFlashMessage('Please Enter Your Name', 'danger');
    } else if (!mobileNo) {
      displayFlashMessage('Please Enter Number', 'danger');
    } else if (!validateMobileNumber(mobileNo)) {
      displayFlashMessage('Please Enter Valid Mobile Number', 'danger');
    } else {
      setIsLoading(true);
      firebase
        .firestore()
        .collection('babies')
        .doc(docId)
        .update({
          parentName: name,
          parentMobileNo: mobileNo,
        })
        .then(() => {
          setIsLoading(false);
          displayFlashMessage('Details Added successfully', 'success');
          setIsModalVisible(false);
          console.log('Fields added successfully.');
        })
        .catch(error => {
          setIsLoading(false);
          setIsModalVisible(false);
          displayFlashMessage('Sorry Something Went Wrong...', 'success');
          console.error('Error adding fields:', error);
        });
    }
  };

  return (
    <View style={style.containerStyle}>
      <View>
        <Text style={style.titleTextStyle}>BabyCare</Text>

        <View style={style.iconsWrapperStyle}>
          <Icon
            isPressable={true}
            icon={icons.notification}
            iconStyle={style.iconStyle}
            iconContainerStyle={style.iconContainerStyle}
            resizeMode={'contain'}
            onIconPress={() => {
              navigate('Notification');
            }}
          />

          <Icon
            isPressable={true}
            icon={icons.settings}
            iconStyle={style.iconStyle}
            iconContainerStyle={[
              style.iconContainerStyle,
              style.settingIconContainerStyle,
            ]}
            resizeMode={'contain'}
            onIconPress={() => {
              navigate('Setting');
            }}
          />
        </View>
      </View>
      <View
        style={[style.card, {borderColor: isFemale ? '#ffe4e8' : '#dff1ff'}]}>
        <LinearGradient
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}
          style={style.babyListItemContainerStyle}
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
        onPress={() => navigate('HearingTestResult')}
        style={style.seeHearingResultsButton}>
        <Text style={style.seeHearingResultsButtonText}>
          See Hearing Test Results
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigate('HeadUltraSoundTestResult')}
        style={style.seeHearingResultsButton}>
        <Text style={style.seeHearingResultsButtonText}>
          See Head Ultra Sound Test Results
        </Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        coverScreen={false}
        backdropOpacity={0.5}
        // hasBackdrop
        // onBackdropPress={() => setIsModalVisible(false)}
        onModalHide={() => setIsModalVisible(false)}
        style={{margin: 0}}>
        <View style={style.contentContainerStyle}>
          <Text style={style.modalTitleTextStyle}>Add Parent Details</Text>

          <Icon
            isPressable={true}
            onIconPress={() => {
              setIsModalVisible(false);
            }}
            icon={icons.close}
            resizeMode={'contain'}
            iconStyle={style.closeIconStyle}
            iconContainerStyle={style.closeIconContainerStyle}
          />

          <View>
            <Text style={style.inputTitleTextStyle}>Name :</Text>

            <TextInputComp
              isIconAvailable={false}
              value={name}
              onChangeText={text => setName(text)}
              placeholder={'Enter Name :'}
              mainContainerStyle={style.inputContainerStyle}
              placeholderTextColor={colors.placeholderColor}
            />

            <Text style={style.inputTitleTextStyle}>Mobile Number :</Text>

            <TextInputComp
              isIconAvailable={false}
              value={mobileNo}
              onChangeText={text => setMobileNo(text)}
              placeholder={'Enter Mobile No :'}
              mainContainerStyle={style.inputContainerStyle}
              keyboardType={'numeric'}
              placeholderTextColor={colors.placeholderColor}
            />

            <GradientButton
              buttonText={'Save Details'}
              onPress={onSavePress}
              buttonContainerStyle={{marginTop: hp(4)}}
            />
          </View>

          {isLoading && <Loader />}
        </View>
      </Modal>
    </View>
  );
};

export default Home;
