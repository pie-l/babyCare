import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {STANDARD_SCREEN_HEIGHT} from './applicationConstants';
import {Platform} from 'react-native';

/**
 * @param heightInPercentage {number} expect fontsize in percentage
 * @return {number} responsive fontsize
 */
export const fontSize = heightInPercentage => RFPercentage(heightInPercentage);

/**
 * @param heightValue {number} expect original fontsize
 * @return {number} responsive fontsize
 */
export const fontSizeValue = heightValue =>
  RFValue(heightValue, STANDARD_SCREEN_HEIGHT);

export const fontFamily = {
  bentonBlack: Platform.OS === 'ios' ? 'BentonSans Black' : 'benton_sans_black',
  bentonBold: Platform.OS === 'ios' ? 'BentonSans Bold' : 'benton_sans_bold',
  bentonBook: Platform.OS === 'ios' ? 'BentonSans Book' : 'benton_sans_book',
  bentonMedium:
    Platform.OS === 'ios' ? 'BentonSans Medium' : 'benton_sans_medium',
  bentonRegular:
    Platform.OS === 'ios' ? 'BentonSans Regular' : 'benton_sans_regular',
  viga: Platform.OS === 'ios' ? 'Viga-Regular' : 'viga_regular',
  manropeRegular: Platform.OS === 'ios' ? 'Manrope Regular' : 'manrope_regular',
};
