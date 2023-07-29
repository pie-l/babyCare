import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {images} from '../../helper/iconsConstants';

const AboutApp = () => {
  return (
    <View style={style.container}>
      <BackIcon />

      <Text style={style.title}>About App</Text>
      <Image
        source={images.cmcLogo}
        resizeMode={'contain'}
        style={style.cmcLogoStyle}
      />

      <ScrollView contentContainerStyle={style.contentContainer}>
        <Text style={style.description}>
          This app is designed to provide information about a baby. It allows
          physicians to add and view baby details, including name, gender, date
          of birth, hospital number, weight, and more.
        </Text>

        <Text style={style.description}>
          The app is intended for physicians and healthcare professionals to
          conveniently access and manage baby records. It offers features such
          as adding new baby details, viewing a list of babies, and displaying
          comprehensive information about each baby.
        </Text>

        <Text style={style.description}>
          This app aims to streamline the process of managing baby records,
          making it easier for healthcare professionals to track and monitor the
          progress and health of newborns.
        </Text>

        <Text style={style.sectionTitle}>Immunization Schedules</Text>

        <Text style={style.description}>
          The app provides immunization schedules to help healthcare
          professionals and parents stay updated on the recommended vaccinations
          for babies. It sends notifications and reminders for upcoming
          immunizations based on the baby's age.
        </Text>

        <Text style={style.sectionTitle}>Baby Care Tips</Text>

        <Text style={style.description}>
          The app also offers helpful tips and guidelines for taking care of the
          baby. It covers various topics such as feeding, bathing, sleep
          patterns, and general safety measures to ensure the well-being of the
          baby.
        </Text>

        <Text style={style.sectionTitle}>OPD Visit</Text>

        <Text style={style.description}>
          The app also helps to schedule the OPD visit for the child for a
          successful visit.
        </Text>
      </ScrollView>
    </View>
  );
};

export default AboutApp;
