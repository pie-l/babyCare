import {StyleSheet} from 'react-native';
import {fontFamily, fontSize, fontSizeValue} from '../../helper/fontUtils';
import {hp, hpValue, wp, wpValue} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    // padding: wp(4),
    backgroundColor: 'white',
  },
  babyListItemContainerStyle: {
    width: wp(83.46),
    borderWidth: 2,
    borderRadius: hp(1.5),
  },
  cardTitle: {
    fontSize: fontSizeValue(18),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: hpValue(10),
    fontFamily: fontFamily.bentonRegular,
    color: '#3B3B3B',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: hpValue(10),
    borderWidth: 2,
    borderColor: '#ccc',
    padding: hpValue(10),
    margin: wp(6.67),
  },
  babyListItemGradientContainerStyle: {
    paddingVertical: hpValue(10),
    borderRadius: hp(1.2),
    paddingHorizontal: wpValue(10),
  },
  innerCard: {
    //backgroundColor: colors.danger10,
    borderRadius: hpValue(10),
    borderWidth: 2,
    //borderColor: 'white',
    //padding: hpValue(10),
    margin: wp(2),
  },
  label: {
    fontWeight: 'bold',
    fontSize: fontSize(1.72),
    lineHeight: hp(1.72),
    textAlignVertical: 'center',
    fontFamily: fontFamily.bentonRegular,
    letterSpacing: wp(0.13),
    color: '#3B3B3B',
    marginTop: hp(2),
  },
  value: {
    fontWeight: 'normal',
    fontSize: fontSize(1.72),
    marginBottom: hpValue(5),
    flexDirection: 'row',
    fontFamily: fontFamily.bentonRegular,
  },
  preventiveInjectionGivenDatesButton: {
    backgroundColor: colors.lightParrot10,
    borderWidth: 1,
    borderColor: colors.lightParrot,
    paddingVertical: hpValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hpValue(50),
    marginTop: hpValue(20),
  },
  preventiveInjectionGivenDatesButtonText: {
    fontFamily: fontFamily.bentonMedium,
    color: colors.textTitle,
    fontSize: fontSizeValue(16),
    lineHeight: hpValue(20),
  },
});
