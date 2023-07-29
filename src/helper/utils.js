import {Platform, Dimensions} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {showMessage} from 'react-native-flash-message';
import {
  STANDARD_SCREEN_HEIGHT,
  STANDARD_SCREEN_WIDTH,
} from './applicationConstants';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {colors} from './colors';
import {hasNotch} from 'react-native-device-info';
import moment from 'moment/moment';

/**
 * @param val {number} expect width in percentage
 * @return {number} responsive width
 */
export const wp = val => widthPercentageToDP(val);

/**
 * @param val {number} expect height in percentage
 * @return {number} responsive height
 */
export const hp = val => heightPercentageToDP(val);

/**
 * @param val {number} expect original width value
 * @return {number} responsive width
 */
export const wpValue = val => {
  const valInPercentage = (val * 100) / STANDARD_SCREEN_WIDTH;
  return widthPercentageToDP(valInPercentage);
};

/**
 * @param val {number} expect original height value
 * @return {number} responsive height
 */
export const hpValue = val => {
  const valInPercentage = (val * 100) / STANDARD_SCREEN_HEIGHT;
  return heightPercentageToDP(valInPercentage);
};

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;

export const isAndroid = Platform.OS === 'android';

export const isIOS = Platform.OS === 'ios';

export const statusBarHeight = getStatusBarHeight();

export const isNotchDisplay = hasNotch();

export const validateEmail = text => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/.test(text);
};

export const validatePassword = text => {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
    text,
  );
};

export const validateMobileNumber = text => {
  return /^\d{10}$/.test(text);
};

/**
 * display flash message
 *
 * @param {string} message
 * @param {"none" | "default" | "info" | "success" | "danger" | "warning"} type
 * @param {string} iconPosition
 */
export function displayFlashMessage(
  message,
  type = 'default',
  iconPosition = 'left',
) {
  const bgColor = colors[type] || colors.grey;

  showMessage({
    message,
    backgroundColor: bgColor,
    icon: {icon: type, position: iconPosition},
  });
}

export const getDateAfterWeeks = (date, weeks) => {
  return moment(date, 'DD/MM/YYYY')
    .clone()
    .add(weeks, 'weeks')
    .format('DD/MM/YYYY');
};

export const getDateAfterMonths = (date, months) => {
  return moment(date, 'DD/MM/YYYY')
    .clone()
    .add(months, 'months')
    .format('DD/MM/YYYY');
};

export const getDateAfterYears = (date, years) => {
  return moment(date, 'DD/MM/YYYY')
    .clone()
    .add(years, 'years')
    .format('DD/MM/YYYY');
};
