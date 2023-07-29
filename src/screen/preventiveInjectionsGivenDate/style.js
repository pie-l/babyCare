import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {hp, hpValue, wp} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleStyle: {
    fontSize: fontSizeValue(22),
    fontFamily: fontFamily.bentonBold,
    marginLeft: wp(6.67),
    marginVertical: hp(2.46),
    color: colors.textTitle,
  },
  tableContainerStyle: {
    paddingBottom: hpValue(20),
    marginHorizontal: wp(2),
  },
  tableStyle: {
    borderWidth: 2,
    borderColor: '#c8e1ff',
  },
  head: {
    height: hpValue(40),
    backgroundColor: '#f1f8ff',
  },
  text: {
    margin: hpValue(5),
  },
});
