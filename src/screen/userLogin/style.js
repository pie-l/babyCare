import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
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
  textInputTitleStyle: {
    fontSize: fontSizeValue(18),
    fontFamily: fontFamily.bentonRegular,
    color: colors.textTitle,
  },
  inputContainerStyle: {
    height: hp(7.02),
    backgroundColor: colors.white,
    borderColor: '#F4F4F4',
    marginTop: hp(2),
  },
  centerContainerStyle: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: hp(20),
    paddingHorizontal: wp(10),
  },
  loginButtonContainerStyle: {
    width: wp(50),
    marginTop: hp(3),
  },
});
