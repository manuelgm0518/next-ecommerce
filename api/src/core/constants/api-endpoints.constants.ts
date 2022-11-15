export const API_VERSIONS = {
  V1: '1',
  V2: '2',
  V3: '3',
};

export const API_PARAMS = {
  BY_ID: ':id',
  BY_USER: ':userId',
};

export const API_ENDPOINTS = {
  USERS: {
    BASE_PATH: 'users',
    BY_ID: API_PARAMS.BY_ID,
    SESSION: {
      BASE_PATH: 'session',
      LOG_IN: 'log-in',
      SIGN_UP: 'sign-up',
    },
    SHOPPING_CART: {
      BASE_PATH: 'shopping-cart',
      ITEM: 'item',
    },
  },
  PRODUCTS: {
    BASE_PATH: 'products',
    BY_ID: API_PARAMS.BY_ID,
  },
};
