import {apiPath} from '../helper/apiConstants';
import {get} from './index';

const demonstrateDemoGetApi = async params => {
  return get(apiPath.demo, params, true);
};

export const mainApi = {
  demonstrateDemoGetApi,
};
