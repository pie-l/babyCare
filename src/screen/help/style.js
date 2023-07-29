import {StyleSheet} from 'react-native';
import {fontFamily, fontSize, fontSizeValue} from '../../helper/fontUtils';
import {hp, wp} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: fontSizeValue(22),
    fontWeight: 'bold',
    marginLeft: wp(6.67),
    marginVertical: hp(2.46),
    fontFamily: fontFamily.bentonBold,
    color: colors.textTitle,
  },
  contentContainer: {
    marginHorizontal: wp(6.67),
  },
  description: {
    fontSize: fontSize(1.72),
    lineHeight: hp(1.72),
    textAlignVertical: 'center',
    fontFamily: fontFamily.bentonRegular,
    letterSpacing: wp(0.13),
    color: '#3B3B3B',
    marginTop: hp(2),
  },
  supportDescription: {
    fontSize: fontSize(2.2),
    lineHeight: hp(2.4),
    color: colors.textTitle,
    letterSpacing: wp(0),
  },
  emailTextStyle: {
    fontSize: fontSize(2.5),
    lineHeight: hp(2.7),
    letterSpacing: wp(0),
    fontFamily: fontFamily.bentonBold,
    color: colors.info,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: fontFamily.bentonRegular,
    color: '#3B3B3B',
  },
});
