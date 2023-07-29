import {StyleSheet} from 'react-native';
import {hp, wp} from '../../helper/utils';
import {colors} from '../../helper/colors';
import {fontFamily, fontSize} from '../../helper/fontUtils';

export const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: hp(0.123),
    borderRadius: hp(1.85),
    paddingVertical: wp(2.7),
    paddingHorizontal: wp(5.33),
  },
  shadowStyle: {
    shadowOffset: {
      width: wp(3.2),
      height: hp(3.2),
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    shadowColor: colors.blueShadowColor,
    elevation: 3,
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: fontSize(1.72),
    lineHeight: hp(1.72),
    textAlignVertical: 'center',
    fontFamily: fontFamily.bentonRegular,
    letterSpacing: wp(0.13),
    color: '#3B3B3B',
  },
  multiLine: {
    minHeight: hp(10),
    maxHeight: hp(15),
  },
  eyeIconStyle: {
    alignSelf: 'center',
    width: hp(2.71),
    height: hp(1.85),
  },
  iconStyle: {
    marginRight: wp(4.27),
  },
});
