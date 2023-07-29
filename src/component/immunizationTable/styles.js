import {StyleSheet} from 'react-native';
import {hpValue, wp, wpValue} from '../../helper/utils';
import {colors} from '../../helper/colors';
import {fontSizeValue} from '../../helper/fontUtils';

export const style = StyleSheet.create({
  containerStyle: {
    paddingBottom: hpValue(20),
    marginHorizontal: wp(2),
  },
  tableStyle: {
    borderWidth: 1,
    borderColor: colors.info,
  },
  head: {
    height: hpValue(50),
    backgroundColor: '#f1f8ff',
  },
  wrapper: {
    flexDirection: 'row',
  },
  rowStyle: {
    height: hpValue(30),
  },
  tableHeadTextStyle: {
    textAlign: 'center',
    fontSize: fontSizeValue(16),
    color: colors.textTitle,
    fontWeight: '600',
  },
  tableTitleTextStyle: {
    textAlign: 'center',
    fontSize: fontSizeValue(14),
    color: colors.textTitle,
    fontWeight: '500',
  },
  rowTextStyle: {
    textAlign: 'center',
    fontSize: fontSizeValue(14),
    color: colors.textTitle,
    fontWeight: '400',
  },
  cellStyle: {width: wpValue(100)},
});
