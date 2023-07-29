import {StyleSheet} from 'react-native';
import {hp, hpValue, wp, wpValue} from '../../helper/utils';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: hp(7),
    width: wpValue(325),
    borderRadius: hp(1.85),
    shadowOffset: {
      width: wp(3.2),
      height: hp(3.2),
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    shadowColor: colors.blueShadowColor,
    elevation: 3,
    backgroundColor: colors.lightParrot,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: fontSizeValue(20),
    lineHeight: hpValue(23),
    letterSpacing: wp(0.13),
    fontFamily: fontFamily.bentonBold,
    color: colors.textTitle,
  },
  iconStyle: {
    width: hp(3.08),
    height: hp(3.08),
    marginRight: wp(3.47),
  },
});
