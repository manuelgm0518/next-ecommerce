"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("../../core/services");
const services_2 = require("./services");
const entities_1 = require("./entities");
const strategies_1 = require("./strategies");
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            jwt_1.JwtModule.registerAsync({
                inject: [services_1.EnvironmentService],
                useFactory: (environmentService) => ({
                    secret: environmentService.get('JWT_SECRET'),
                    signOptions: { expiresIn: environmentService.get('JWT_EXPIRATION_TIME') },
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([entities_1.Authentication, entities_1.Role]),
        ],
        providers: [services_2.AuthenticationService, strategies_1.LocalAuthStrategy, strategies_1.JwtAuthStrategy],
        exports: [services_2.AuthenticationService, typeorm_1.TypeOrmModule],
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map