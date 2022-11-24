export const API_URL = "http://localhost:3001/api/v1/";

export const API_ENDPOINTS = {
  SESSION: {
    LOG_IN: API_URL + "session/log-in",
    SIGN_UP: API_URL + "session/sign-up",
  },
  PRODUCTS: {
    BASE_PATH: API_URL + "products",
  },
  USERS: {
    BASE_PATH: API_URL + "users",
  },
  SALES: {
    BASE_PATH: API_URL + "sales",
    OWN: API_URL + "sales/own",
  },
  SHOPPING_CART: {
    BASE_PATH: API_URL + "shopping-cart",
    ITEM: API_URL + "shopping-cart/item",
  },
};
