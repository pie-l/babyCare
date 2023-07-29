import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {fontFamily, fontSize, fontSizeValue} from '../../helper/fontUtils';
import {hp, wp} from '../../helper/utils';

export const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  notificationTextStyle: {
    fontSize: fontSizeValue(22),
    fontFamily: fontFamily.bentonBold,
    marginLeft: wp(6.67),
    marginVertical: hp(2.46),
    color: colors.textTitle,
  },
  notificationItemContainerStyle: {
    marginHorizontal: hp(4),
    marginVertical: hp(0.75),
    padding: hp(1),
    alignItems: 'center',
    borderRadius: hp(1),
    backgroundColor: colors.mango10,
  },
  notificationItemTextStyle: {
    fontSize: fontSize(1.5),
    lineHeight: hp(2),
    fontFamily: fontFamily.viga,
    letterSpacing: wp(0.1),
    color: colors.lightOrange,
  },
});
