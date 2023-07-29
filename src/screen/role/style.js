import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {hp, hpValue, wp} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: wp(10),
  },
  logoStyle: {
    marginTop: hp(5),
  },
  titleStyle: {
    fontSize: fontSizeValue(25),
    lineHeight: hpValue(28),
    fontFamily: fontFamily.bentonBold,
    color: colors.textTitle,
  },
  descriptionStyle: {
    fontSize: fontSizeValue(18),
    lineHeight: hpValue(21),
    fontFamily: fontFamily.bentonRegular,
    color: colors.textTitle,
    marginTop: hpValue(20),
    textAlign: 'center',
  },
  continueUsStyle: {
    fontSize: fontSizeValue(18),
    lineHeight: hpValue(21),
    fontFamily: fontFamily.bentonRegular,
    color: colors.textTitle,
    marginTop: hpValue(80),
    marginBottom: hpValue(20),
    textAlign: 'center',
  },
  orTextStyle: {
    fontSize: fontSizeValue(16),
    lineHeight: hpValue(19),
    fontFamily: fontFamily.bentonMedium,
    color: colors.lightParrot,
    marginVertical: hpValue(10),
    textAlign: 'center',
  },
});
