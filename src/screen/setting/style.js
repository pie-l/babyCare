import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {hp, wp} from '../../helper/utils';

export const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white50,
  },
  titleTextStyle: {
    fontSize: fontSizeValue(22),
    fontFamily: fontFamily.bentonBold,
    marginLeft: wp(6.67),
    marginVertical: hp(2.46),
    color: colors.textTitle,
  },
  settingListContainerStyle: {
    alignItems: 'center',
    paddingTop: hp(0.25),
  },
  settingListItemSeparatorComponentStyle: {
    height: hp(2.46),
  },
  settingListFooterComponentStyle: {
    height: hp(11.58),
  },
});
