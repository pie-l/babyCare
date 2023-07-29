import {StyleSheet} from 'react-native';
import {fontFamily, fontSize, fontSizeValue} from '../../helper/fontUtils';
import {hp, hpValue, wp} from '../../helper/utils';
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
    paddingBottom: hpValue(100),
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
  sectionTitle: {
    fontSize: 20,
    marginTop: 20,
    fontFamily: fontFamily.bentonRegular,
    color: '#3B3B3B',
  },
  cmcLogoStyle: {
    alignSelf: 'center',
    height: hpValue(150),
    width: hpValue(150),
  },
});
