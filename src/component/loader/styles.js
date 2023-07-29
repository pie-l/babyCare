import {StyleSheet} from 'react-native';
import {colors} from '../../helper/colors';
import {hpValue} from '../../helper/utils';
import {fontSizeValue} from '../../helper/fontUtils';

export const style = StyleSheet.create({
  containerStyle: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: colors.black23,
  },
  animationStyle: {
    width: hpValue(120),
    height: hpValue(120),
  },
  loadingTextStyle: {
    color: colors.textTitle,
    fontSize: fontSizeValue(16),
  },
});
