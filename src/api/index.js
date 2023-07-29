import {startsWith} from 'lodash';
import {Alert} from 'react-native';
import axios from 'axios/index';
import {BASE_URL} from '../helper/apiConstants';
import {resetNavigationRoute} from '../navigation/navigationsServices';
import {ACCESS_TOKEN} from '../helper/applicationConstants';
import {getAsyncStorageData} from '../helper/global';

const defaultHeaders = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json;charset=utf-8',
};

const url = (path, params) => {
  const sections = path.split(':');
  const sectionsWithParams = sections.map(section =>
    startsWith(section, '/') ? section : params[section],
  );
  const pathWithParams = sectionsWithParams.join('');
  return BASE_URL + pathWithParams;
};

const getHeaders = async auth => {
  let headers = {...defaultHeaders};

  if (auth) {
    const token = await getAuthToken();
    headers = {...headers, Authorization: token};
  }
  return headers;
};

const apiService = axios.create({});

export const get = async (path, params = {}, auth = true) => {
  const headers = await getHeaders(auth);
  return apiService.get(url(path, params), {
    params,
    headers: headers,
  });
};

export const post = async (path, params = {}, auth = true) => {
  const headers = await getHeaders(auth);
  return apiService.post(url(path, params), params, {
    headers: headers,
  });
};

export const put = async (path, params = {}, auth = true) => {
  const headers = await getHeaders(auth);
  return apiService.put(url(path, params), params, {
    headers: headers,
  });
};

export const deleteRequest = async (path, params = {}, auth = true) => {
  const headers = await getHeaders(auth);
  return apiService.delete(url(path, params), {params, headers: headers});
};

export const upload = (path, params = {}, auth = true) =>
  apiService.post(url(path, params), params, {
    headers: {...getHeaders(auth), 'content-type': 'multipart/form-data'},
  });

export const download = (path, params = {}, auth = true) =>
  apiService.get(url(path, params), {
    responseType: 'blob',
    params,
    headers: getHeaders(auth),
  });

apiService.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.data && error.response.data.message) {
      Alert.alert(error.response.data.message);
    }
    if (error && error.response && error.response.data.code === 401) {
      resetNavigationRoute('Login');
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export const getAuthToken = async () => {
  const data = await getAsyncStorageData(ACCESS_TOKEN);
  if (data) {
    return data?.access?.token ? `Bearer ${data?.access?.token}` : '';
  }
  return null;
};

export const getRefreshToken = async () => {
  const data = await getAsyncStorageData(ACCESS_TOKEN);
  if (data) {
    return data?.refresh?.token ? `${data?.refresh?.token}` : '';
  }
  return null;
};
