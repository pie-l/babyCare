import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {BackIcon} from '../../component';
import {style} from './style';
import {useSelector} from 'react-redux';
import {isEmpty} from 'lodash';
import {hpValue} from '../../helper/utils';

const HeadUltraSoundTestResult = () => {
  const {babyDetails} = useSelector(state => state.main);

  return (
    <View style={style.containerStyle}>
      <BackIcon />

      <Text style={style.titleStyle}>Head Ultra Sound Test Result</Text>

      <ScrollView contentContainerStyle={{paddingBottom: hpValue(120)}}>
        {isEmpty(babyDetails?.headUltraSoundTestResults) ? (
          <View style={style.pastOPDContainer}>
            <Text style={style.dateTitleTextStyle}>
              Sorry No Test Results Available..
            </Text>
          </View>
        ) : (
          babyDetails?.headUltraSoundTestResults.map(item => {
            return (
              <View style={style.upcomingOPDContainer}>
                <Text
                  style={
                    style.dateTitleTextStyle
                  }>{`Head Ultra Sound Screen ${item.id} date`}</Text>

                {item.date1 && item.date2 && item.left && item.right ? (
                  <>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <Text
                        style={
                          style.dateTextStyle
                        }>{`Left: ${item.left}`}</Text>
                      <Text
                        style={
                          style.dateTextStyle
                        }>{`Right: ${item.right}`}</Text>
                    </View>

                    <Text
                      style={
                        style.dateTextStyle
                      }>{`Next Head Ultra Sound Test Date: ${item.date2}`}</Text>
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
      </ScrollView>
    </View>
  );
};

export default HeadUltraSoundTestResult;
