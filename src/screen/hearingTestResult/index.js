import React from 'react';
import {Text, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';

const HearingTestResult = () => {
  const {babyDetails} = useSelector(state => state.main);

  console.log('====>', babyDetails?.hearingResults);

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Hearing Test Result</Text>

      {isEmpty(babyDetails?.hearingResults) ? (
        <View style={style.pastOPDContainer}>
          <Text style={style.dateTitleTextStyle}>
            Sorry No Test Results Available..
          </Text>
        </View>
      ) : (
        babyDetails?.hearingResults.map(item => {
          return (
            <View style={style.upcomingOPDContainer}>
              <Text
                style={
                  style.dateTitleTextStyle
                }>{`Hearing Screen ${item.id} date`}</Text>

              {item.date1 && item.date2 && item.left && item.right ? (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text
                      style={style.dateTextStyle}>{`Left: ${item.left}`}</Text>
                    <Text
                      style={
                        style.dateTextStyle
                      }>{`Right: ${item.right}`}</Text>
                  </View>

                  <Text
                    style={
                      style.dateTextStyle
                    }>{`Next Hearing Test Date: ${item.date2}`}</Text>
                </>
              ) : (
                <Text style={style.dateTextStyle}>
                  Data to be Add by Physician!!
                </Text>
              )}
            </View>
          );
        })
      )}
    </View>
  );
};

export default HearingTestResult;
