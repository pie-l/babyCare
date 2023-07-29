import {StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/utils';
import {fontFamily, fontSize} from '../../helper/fontUtils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(7),
    borderRadius: hp(1.85),
    paddingHorizontal: wp(13.07),
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: fontSize(1.97),
    lineHeight: hp(2.57),
    color: colors.white,
    fontFamily: fontFamily.bentonBold,
  },
});
