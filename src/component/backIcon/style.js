import {StyleSheet} from 'react-native';
import {hp, isNotchDisplay, statusBarHeight, wp} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  backIconContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(5.54),
    height: hp(5.54),
    borderRadius: hp(1.87),
    marginLeft: wp(6.67),
    marginTop: isNotchDisplay ? hp(4.68) : hp(4.68) - statusBarHeight,
    backgroundColor: colors.lightOrange10,
  },
  backIconStyle: {
    width: hp(1.23),
    height: hp(2.01),
  },
});
