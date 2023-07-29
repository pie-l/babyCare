import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {displayFlashMessage} from '../../helper/utils';
import {openComposer} from 'react-native-email-link';

const Help = () => {
  const onEmailPress = () => {
    openComposer({
      to: 'support@example.com',
      subject: 'Help',
      body: 'Hi, can you help me with...',
    }).catch(err => {
      console.log('====>', err);
      displayFlashMessage('Sorry! Something went wrong..', 'danger');
    });
  };

  return (
    <View style={style.container}>
      <BackIcon />

      <Text style={style.title}>Help</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={style.contentContainer}>
        <Text style={style.description}>
          1. Select your role (Physician or User) to access the respective
          features and functionalities of the app.
        </Text>
        <Text style={style.description}>
          2. For Physicians: The Physician Home screen provides an overview of
          upcoming immunizations and options to add and view baby details. Use
          the Add Baby Details screen to record the baby's information and the
          Show Baby Details screen to view the recorded details.
        </Text>
        <Text style={style.description}>
          3. For Users: The User Home screen displays the bottom bar navigation
          with options for the immunization schedule, Growth Chart, Care of the
          infant, OPd Visits. The Settings icon has options of help, about App
          and Logout. Use the immunization schedule to view the recommended
          vaccines at different ages. The Care of the infant also provides
          information on feeding and parenting do's and don'ts for high-risk
          newborns. This information is valuable for parents and caregivers who
          need guidance on providing proper nutrition and adopting safe and
          healthy parenting practices for their high-risk newborns.The OPD Visit
          to display next appointment dates. The About App screen provides
          information about the app, and the Settings screen allows you to
          customize app preferences.
        </Text>

        <Text style={style.sectionTitle}>Additional Assistance:</Text>
        <Text style={[style.description, style.supportDescription]}>
          If you have any questions or need further assistance, please reach out
          to our support team at
        </Text>

        <TouchableOpacity activeOpacity={0.75} onPress={onEmailPress}>
          <Text style={[style.description, style.emailTextStyle]}>
            support@example.com
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Help;
