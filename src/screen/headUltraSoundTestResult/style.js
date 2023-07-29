import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {hp, hpValue, wp, wpValue} from '../../helper/utils';
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
  pastOPDContainer: {
    backgroundColor: colors.danger10,
    marginHorizontal: wp(6.67),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hpValue(20),
    paddingHorizontal: wpValue(20),
    borderRadius: hpValue(15),
  },
  upcomingOPDContainer: {
    backgroundColor: colors.lightParrot10,
    marginHorizontal: wp(6.67),
    justifyContent: 'center',
    paddingVertical: hpValue(20),
    paddingHorizontal: wpValue(20),
    borderRadius: hpValue(15),
    marginTop: hpValue(20),
  },
  dateTitleTextStyle: {
    fontSize: fontSizeValue(18),
    fontFamily: fontFamily.bentonMedium,
    color: colors.textTitle,
    lineHeight: hpValue(18),
    marginBottom: hpValue(20),
    textAlign: 'center',
  },
  dateTextStyle: {
    fontSize: fontSizeValue(14),
    fontFamily: fontFamily.bentonRegular,
    color: colors.textTitle,
    lineHeight: hpValue(16),
    marginVertical: hpValue(2),
    textAlign: 'center',
  },
});
