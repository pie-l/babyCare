import {StyleSheet} from 'react-native';
import {fontFamily, fontSize} from '../../helper/fontUtils';
import {hp, wp} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    width: wp(89.33),
    paddingVertical: hp(2),
    borderRadius: hp(1),
    shadowOffset: {
      width: wp(3.2),
      height: hp(3.2),
    },
    shadowOpacity: 0.07,
    shadowRadius: 50,
    shadowColor: colors.blueShadowColor,
    elevation: 3,
    backgroundColor: colors.white,
  },
  textContainerStyle: {
    marginHorizontal: wp(4.65),
    width: wp(46.67),
  },
  settingCardNameTextStyle: {
    fontSize: fontSize(1.85),
    lineHeight: hp(2.46),
    fontFamily: fontFamily.bentonMedium,
    textAlignVertical: 'center',
    color: colors.textTitle,
  },
});
