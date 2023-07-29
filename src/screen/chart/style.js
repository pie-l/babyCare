import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {hp, hpValue, wp, wpValue} from '../../helper/utils';
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
  itemContainerStyle: {
    flexDirection: 'row',
    marginTop: hpValue(20),
    marginHorizontal: wpValue(26),
    alignItems: 'center',
    paddingVertical: hpValue(8),
    borderRadius: hpValue(15),
    borderWidth: 2,
    paddingHorizontal: wpValue(10),
  },
  boysContainerStyle: {
    backgroundColor: '#d6eef9',
    borderColor: '#9adaef',
  },
  itemTextStyle: {
    flex: 1,
    fontSize: fontSizeValue(16),
    fontFamily: fontFamily.bentonMedium,
    color: colors.textTitle,
    marginLeft: wpValue(5),
    lineHeight: hpValue(18),
  },
  girlsContainerStyle: {
    backgroundColor: '#f5ebec',
    borderColor: '#ebd1d4',
  },
  iconStyle: {
    height: hpValue(24),
    width: hpValue(24),
  },
});
