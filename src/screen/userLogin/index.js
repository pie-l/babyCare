import React, {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {BackIcon, GradientButton, Loader, TextInputComp} from '../../component';
import {colors} from '../../helper/colors';
import {style} from './style';
import {firebase} from '@react-native-firebase/firestore';
import {displayFlashMessage} from '../../helper/utils';
import {useDispatch} from 'react-redux';
import {setBabyDetails, setDocId, setRole} from '../../actions/mainAction';
import {ROLES} from '../../helper/applicationConstants';

const UserLogin = () => {
  const [hospNo, setHospNo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const onLoginPress = async () => {
    try {
      setIsLoading(true);
      const babiesRef = firebase.firestore().collection('babies');
      const query = babiesRef.where('hospitalNo', '==', hospNo);
      const snapshot = await query.get();

      if (!snapshot.empty) {
        let babyDetail;
        let docId;
        snapshot.forEach(doc => {
          docId = doc.id;
          babyDetail = doc.data();
        });
        setIsLoading(false);
        displayFlashMessage('Logged in successfully', 'success');
        dispatch(setRole(ROLES.user));
        dispatch(setBabyDetails(babyDetail));
        dispatch(setDocId(docId));
      } else {
        setIsLoading(false);
        Alert.alert(
          'No Data Found!',
          `No Parent User found with Hospital No ${hospNo}. Ask Physician to add the details and try again..`,
          [{text: 'OK', onPress: () => {}}],
          {cancelable: false},
        );
      }
    } catch (error) {
      Alert.alert(
        'Sorry',
        'Something went wrong! Please try again..',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
      console.log('====>', error);
    }
  };

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Parent Login</Text>

      <View style={style.centerContainerStyle}>
        <Text style={style.textInputTitleStyle}>
          Enter Hospital No to Login
        </Text>

        <TextInputComp
          isIconAvailable={false}
          value={hospNo}
          onChangeText={text => setHospNo(text)}
          placeholder={'Enter Hospital No to Login'}
          mainContainerStyle={style.inputContainerStyle}
          placeholderTextColor={colors.placeholderColor}
        />

        <GradientButton
          buttonText={'Login'}
          onPress={onLoginPress}
          activeOpacity={0.75}
          buttonContainerStyle={style.loginButtonContainerStyle}
        />
      </View>

      {isLoading && <Loader />}
    </View>
  );
};

export default UserLogin;
