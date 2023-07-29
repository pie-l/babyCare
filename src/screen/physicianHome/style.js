import {StyleSheet} from 'react-native';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {hp, hpValue, wp, wpValue} from '../../helper/utils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleContainerStyle: {
    marginVertical: hp(2.46),
    marginHorizontal: wp(8.27),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontFamily: fontFamily.bentonBold,
    color: colors.textTitle,
    fontSize: fontSizeValue(24),
    lineHeight: hp(5.05),
    textAlignVertical: 'center',
  },
  logoutIconContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: hpValue(45),
    height: hpValue(45),
    borderRadius: hp(1),
    shadowOffset: {
      width: wp(1),
      height: hp(1),
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: 'rgba(20, 78, 90, 0.2)',
    elevation: 5,
    backgroundColor: '#f4fcff',
  },
  logoutIconStyle: {
    width: hpValue(24),
    height: hpValue(24),
  },
  addBabyDetailsButton: {
    backgroundColor: colors.lightParrot10,
    borderWidth: 2,
    borderColor: colors.lightParrot,
    paddingVertical: hpValue(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(8.27),
    borderRadius: hpValue(5),
  },
  addBabyDetailsButtonText: {
    fontFamily: fontFamily.manropeRegular,
    color: colors.textTitle,
    fontSize: fontSizeValue(18),
    lineHeight: hpValue(22),
  },
  babyListTextStyle: {
    fontFamily: fontFamily.bentonMedium,
    marginVertical: hp(2),
    color: colors.textTitle,
    marginLeft: wp(8.27),
    fontSize: fontSizeValue(20),
    lineHeight: hpValue(22),
  },
  babyListContainerStyle: {
    alignItems: 'center',
  },
  babyListItemSeparatorComponentStyle: {
    height: hp(2),
  },
  babyListFooterComponentStyle: {
    height: hp(5),
  },
  babyListItemContainerStyle: {
    width: wp(83.46),
    borderWidth: 2,
    borderRadius: hp(1.5),
  },
  babyListItemGradientContainerStyle: {
    paddingVertical: hpValue(10),
    borderRadius: hp(1.2),
    paddingHorizontal: wpValue(10),
  },
  babyListItemLabelContainerStyle: {
    flexDirection: 'row',
    marginVertical: hpValue(3),
  },
  babyListItemContainerLabelTextStyle: {
    fontFamily: fontFamily.bentonMedium,
    color: colors.textTitle,
    fontSize: fontSizeValue(16),
    lineHeight: hpValue(18),
  },
  babyListItemContainerValueTextStyle: {
    fontFamily: fontFamily.bentonRegular,
    color: colors.textTitle,
    fontSize: fontSizeValue(16),
    lineHeight: hpValue(18),
  },
  searchInputContainerStyle: {
    height: hp(6),
    backgroundColor: colors.white,
    borderColor: '#F4F4F4',
    marginBottom: hp(2),
    marginHorizontal: wp(8.27),
  },
});
