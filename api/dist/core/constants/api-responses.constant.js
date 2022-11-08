"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_RESPONSES = void 0;
exports.API_RESPONSES = {
    COMMON_ERROR: {
        description: 'A response body representing a runtime error',
        schema: {
            type: 'object',
            properties: {
                status: { type: 'number', description: 'The HTTP response status code' },
                name: { type: 'string', description: 'The name of the found exception' },
                error: { type: 'string', description: 'General purpose error code' },
                messages: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'The human-readable messages provided for the error',
                },
                path: { type: 'string', description: 'The path to the called API' },
                timestamp: { type: 'string', description: 'The request timestamp' },
                stack: { type: 'string', description: 'The call stack leading to the error' },
            },
        },
        status: 400,
    },
    BASIC_MESSAGE: {
        description: 'A basic success response body with a message',
        schema: {
            type: 'object',
            properties: {
                message: { type: 'string' },
            },
        },
        status: 200,
    },
    VALIDATION: {
        description: 'A success response body indicating the result of a validation request',
        schema: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        valid: { type: 'boolean' },
                    },
                },
            },
        },
        status: 200,
    },
    DELETION: {
        description: 'A success response body indicating the result of a deletion request',
        schema: {
            type: 'object',
            properties: {
                data: {
                    type: 'object',
                    properties: {
                        raw: { type: 'object' },
                        affected: { type: 'number' },
                    },
                },
            },
        },
    },
};
//# sourceMappingURL=api-responses.constant.js.map