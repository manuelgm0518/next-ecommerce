"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../../../integrations/authentication/decorators");
const entities_1 = require("../../../../integrations/authentication/entities");
const guards_1 = require("../../../../integrations/authentication/guards");
const constants_1 = require("../../../../core/constants");
const dto_1 = require("../../dto");
const services_1 = require("../../services");
const constants_2 = require("../../../../integrations/authentication/constants");
const decorators_2 = require("../../../../shared/decorators");
let SessionController = class SessionController {
    constructor(sessionService) {
        this.sessionService = sessionService;
    }
    async logIn(authentication) {
        const data = await this.sessionService.logIn(authentication.identifier);
        return { data };
    }
    async signUp(body) {
        const data = await this.sessionService.signUp(body);
        return { data };
    }
};
__decorate([
    (0, decorators_2.ApiPost)({
        path: constants_1.API_ENDPOINTS.USERS.SESSION.LOG_IN,
        summary: 'Access into the `User` account',
        description: 'Creates a session and retrieves the logged in `User` information',
        responseDescription: 'An Object containing the logged in `User` information along with its authentication token',
        responseType: dto_1.UserAuthTokenDto,
    }),
    (0, common_1.UseGuards)(guards_1.LocalAuthGuard),
    (0, swagger_1.ApiBody)({ type: dto_1.UserLogInDto }),
    __param(0, (0, decorators_1.CurrentAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.Authentication]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "logIn", null);
__decorate([
    (0, decorators_2.ApiPost)({
        path: constants_1.API_ENDPOINTS.USERS.SESSION.SIGN_UP,
        summary: 'Create a new `User` account',
        description: 'Creates a new `User` along with its log in credentials',
        responseDescription: 'An Object containing the logged in `User` information along with its authentication token',
        responseType: constants_2.AuthTokenResponse,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserSignUpDto]),
    __metadata("design:returntype", Promise)
], SessionController.prototype, "signUp", null);
SessionController = __decorate([
    (0, swagger_1.ApiTags)('Session'),
    (0, common_1.Controller)({ path: constants_1.API_ENDPOINTS.USERS.SESSION.BASE_PATH, version: constants_1.API_VERSIONS.V1 }),
    __metadata("design:paramtypes", [services_1.SessionService])
], SessionController);
exports.SessionController = SessionController;
//# sourceMappingURL=session.controller.js.map