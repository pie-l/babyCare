import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
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
  scrollViewContainerStyle: {
    padding: 16,
  },
  bulletItemStyle: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  bulletIconStyle: {
    marginRight: 8,
    height: hpValue(16),
    width: hpValue(16),
    tintColor: '#4F8EF7',
    marginTop: hpValue(4),
  },
  bulletTextStyle: {
    flex: 1,
    fontSize: fontSizeValue(18),
    color: '#333',
    lineHeight: hpValue(22),
    fontFamily: fontFamily.bentonRegular,
  },
});
