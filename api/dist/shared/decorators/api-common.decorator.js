"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiDelete = exports.ApiPut = exports.ApiPatch = exports.ApiGet = exports.ApiPost = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const lodash_1 = require("lodash");
const constants_1 = require("../../core/constants");
const decorators_1 = require("../../modules/users/decorators");
const decorators_2 = require("../../integrations/authentication/decorators");
const guards_1 = require("../../integrations/authentication/guards");
function ApiMethod(params) {
    var _a;
    const roles = (params === null || params === void 0 ? void 0 : params.roles) ? '[' + params.roles.map((e) => (0, lodash_1.startCase)(e)).join('/') + '] ' : '';
    const decorators = [
        (0, swagger_1.ApiOperation)({
            summary: roles + ((_a = params === null || params === void 0 ? void 0 : params.summary) !== null && _a !== void 0 ? _a : ''),
            description: params === null || params === void 0 ? void 0 : params.description,
        }),
        (0, swagger_1.ApiOkResponse)({
            type: params === null || params === void 0 ? void 0 : params.responseType,
            description: params === null || params === void 0 ? void 0 : params.responseDescription,
        }),
        (0, swagger_1.ApiResponse)(constants_1.API_RESPONSES.COMMON_ERROR),
        ...((params === null || params === void 0 ? void 0 : params.roles)
            ? [(0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard), (0, decorators_2.Roles)(...params.roles), (0, decorators_1.UseSessionGuard)()]
            : []),
    ];
    return (0, common_1.applyDecorators)(...decorators);
}
function ApiPost(params) {
    return (0, common_1.applyDecorators)((0, common_1.Post)(params === null || params === void 0 ? void 0 : params.path), ApiMethod(params), (0, common_1.HttpCode)(common_1.HttpStatus.OK));
}
exports.ApiPost = ApiPost;
function ApiGet(params) {
    return (0, common_1.applyDecorators)((0, common_1.Get)(params === null || params === void 0 ? void 0 : params.path), ApiMethod(params));
}
exports.ApiGet = ApiGet;
function ApiPatch(params) {
    return (0, common_1.applyDecorators)((0, common_1.Patch)(params === null || params === void 0 ? void 0 : params.path), ApiMethod(params), (0, common_1.HttpCode)(common_1.HttpStatus.OK));
}
exports.ApiPatch = ApiPatch;
function ApiPut(params) {
    return (0, common_1.applyDecorators)((0, common_1.Put)(params === null || params === void 0 ? void 0 : params.path), ApiMethod(params), (0, common_1.HttpCode)(common_1.HttpStatus.OK));
}
exports.ApiPut = ApiPut;
function ApiDelete(params) {
    return (0, common_1.applyDecorators)((0, common_1.Delete)(params === null || params === void 0 ? void 0 : params.path), ApiMethod(params), (0, swagger_1.ApiOkResponse)(constants_1.API_RESPONSES.DELETION));
}
exports.ApiDelete = ApiDelete;
//# sourceMappingURL=api-common.decorator.js.map