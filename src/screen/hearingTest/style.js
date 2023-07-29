import {StyleSheet} from 'react-native';
import {fontFamily, fontSize, fontSizeValue} from '../../helper/fontUtils';
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
  contentContainerStyle: {
    marginHorizontal: wp(6.67),
  },
  hearingScreenInstructionConStyle: {
    marginLeft: wp(6.67),
    marginVertical: hp(2.46),
  },
  hearingScreenTitleTextStyle: {
    fontSize: fontSizeValue(18),
    color: colors.textTitle,
    fontFamily: fontFamily.bentonBold,
  },
  hearingScreenTextStyle: {
    fontSize: fontSizeValue(15),
    color: colors.textTitle,
    fontFamily: fontFamily.bentonRegular,
  },
  hearingInstructionsTextStyle: {
    fontSize: fontSizeValue(16),
    color: colors.textTitle,
  },
  buttonContainerStyle: {
    height: hp(5),
    marginVertical: hp(2),
    backgroundColor: colors.white,
    borderWidth: hpValue(1),
    borderColor: colors.lightParrot,
  },
  disabledButtonContainerStyle: {
    backgroundColor: colors.grey,
    borderWidth: hpValue(0),
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: fontSizeValue(16),
    lineHeight: hpValue(22),
    fontFamily: fontFamily.bentonRegular,
    color: colors.textTitle,
  },
  checkboxTitleStyle: {
    fontSize: fontSize(1.72),
    lineHeight: hp(1.72),
    textAlignVertical: 'center',
    fontFamily: fontFamily.bentonRegular,
    letterSpacing: wp(0.13),
    color: '#3B3B3B',
    marginTop: hp(1),
  },
  checkboxesContainerStyle: {
    flexDirection: 'row',
    marginTop: hp(0.75),
  },
  checkboxTextStyle: {
    fontSize: fontSize(1.72),
    lineHeight: hp(1.72),
    textAlignVertical: 'center',
    fontFamily: fontFamily.bentonRegular,
    letterSpacing: wp(0.13),
    color: '#3B3B3B',
    marginLeft: wp(2),
  },
  checkboxSecTextStyle: {
    flexDirection: 'row',
    marginLeft: wp(8.27),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
