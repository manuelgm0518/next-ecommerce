"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ENDPOINTS = exports.API_PARAMS = exports.API_VERSIONS = void 0;
exports.API_VERSIONS = {
    V1: '1',
    V2: '2',
    V3: '3',
};
exports.API_PARAMS = {
    BY_ID: ':id',
    BY_USER: 'user/:user',
};
exports.API_ENDPOINTS = {
    USERS: {
        BASE_PATH: 'users',
        BY_ID: exports.API_PARAMS.BY_ID,
        SESSION: {
            BASE_PATH: 'session',
            LOG_IN: 'log-in',
            SIGN_UP: 'sign-up',
        },
    },
    PRODUCTS: {
        BASE_PATH: 'products',
        BY_ID: exports.API_PARAMS.BY_ID,
    },
};
//# sourceMappingURL=api-endpoints.constants.js.map