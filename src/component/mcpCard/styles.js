import {StyleSheet} from 'react-native';
import {hpValue, wpValue} from '../../helper/utils';
import {fontFamily, fontSizeValue} from '../../helper/fontUtils';
import {colors} from '../../helper/colors';

export const style = StyleSheet.create({
  itemContainerStyle: {
    flex: 1,
    marginVertical: hpValue(8),
    marginHorizontal: wpValue(8),
    borderWidth: 1,
    aspectRatio: 1, // Maintain a square shape
    borderRadius: hpValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    padding: hpValue(10),
  },
  imageStyle: {
    width: hpValue(100),
    height: hpValue(100),
    aspectRatio: 1, // Maintain image aspect ratio
  },
  itemTextStyle: {
    fontSize: fontSizeValue(18),
    lineHeight: hpValue(20),
    fontFamily: fontFamily.bentonMedium,
    marginTop: hpValue(10),
    color: colors.textTitle,
    textAlign: 'center',
  },
});
