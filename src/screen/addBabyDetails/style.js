import {StyleSheet} from 'react-native';
import {fontFamily, fontSize, fontSizeValue} from '../../helper/fontUtils';
import {hp, wp} from '../../helper/utils';
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
  scrollViewContainerStyle: {
    paddingHorizontal: wp(8.27),
    paddingTop: hp(1),
    paddingBottom: hp(15),
  },
  inputTitleTextStyle: {
    fontSize: fontSize(1.72),
    lineHeight: hp(1.72),
    textAlignVertical: 'center',
    fontFamily: fontFamily.bentonRegular,
    letterSpacing: wp(0.13),
    color: '#3B3B3B',
    marginTop: hp(2),
  },
  inputContainerStyle: {
    height: hp(7.02),
    backgroundColor: colors.white,
    borderColor: '#F4F4F4',
    marginTop: hp(0.75),
  },
  datePickerContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: hp(0.123),
    borderRadius: hp(1.85),
    backgroundColor: colors.white,
    borderColor: '#F4F4F4',
    marginTop: hp(0.75),
    paddingVertical: hp(1),
    elevation: 3,
    shadowOffset: {
      width: wp(3.2),
      height: hp(3.2),
    },
    shadowOpacity: 0.1,
    shadowRadius: 50,
    shadowColor: colors.blueShadowColor,
  },
  genderCheckboxesContainerStyle: {
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
});
