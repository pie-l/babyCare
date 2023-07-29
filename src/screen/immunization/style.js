import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {
  hp,
  hpValue,
  isNotchDisplay,
  statusBarHeight,
  wp,
} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainerStyle: {
    flexDirection: 'row',
    marginBottom: hp(2),
    alignItems: 'center',
    marginTop: isNotchDisplay ? hp(4.68) : hp(4.68) - statusBarHeight,
  },
  backIconContainerStyle: {
    marginLeft: wp(4),
    marginTop: 0,
  },
  titleStyle: {
    fontSize: fontSizeValue(19),
    lineHeight: hpValue(22),
    fontFamily: fontFamily.bentonBold,
    color: colors.textTitle,
    marginLeft: wp(4),
  },
});
