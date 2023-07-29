import React from 'react';
import {Text, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {useSelector} from 'react-redux';

const OPD = () => {
  const {babyDetails} = useSelector(state => state.main);

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>OPD Visits</Text>

      {babyDetails?.pastOpdVisitDates && (
        <View style={style.pastOPDContainer}>
          <Text style={style.dateTitleTextStyle}>
            Past OPD Visit Appointment Dates
          </Text>

          {babyDetails?.pastOpdVisitDates.map(date => {
            return <Text style={style.dateTextStyle}>{date}</Text>;
          })}
        </View>
      )}

      {babyDetails?.nextOpdVisitScheduledDate && (
        <View style={style.upcomingOPDContainer}>
          <Text style={style.dateTitleTextStyle}>
            Upcoming OPD Visit Appointment Dates
          </Text>

          <Text style={style.dateTextStyle}>
            {babyDetails?.nextOpdVisitScheduledDate}
          </Text>
        </View>
      )}

      {!babyDetails?.pastOpdVisitDates &&
        !babyDetails?.nextOpdVisitScheduledDate && (
          <View style={style.pastOPDContainer}>
            <Text style={style.dateTitleTextStyle}>
              Sorry No Visits Date Available..
            </Text>
          </View>
        )}
    </View>
  );
};

export default OPD;
