const BASE_URL = 'https://kcdz71ab75.execute-api.us-east-1.amazonaws.com/dev';

const AUTH = '/api/v1/auth';
const PRODUCT = '/api/v1/product';

const apiPath = {
  demo: `${PRODUCT}`,
  login: `${AUTH}/login`,
  logout: `${AUTH}/logout`,
};

export {BASE_URL, apiPath};
