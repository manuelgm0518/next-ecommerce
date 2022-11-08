"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("./constants");
const filters_1 = require("./filters");
const services_1 = require("./services");
const authentication_module_1 = require("../integrations/authentication/authentication.module");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            services_1.EnvironmentService,
            {
                provide: core_1.APP_FILTER,
                useClass: filters_1.HttpExceptionFilter,
            },
            {
                provide: core_1.APP_PIPE,
                useClass: common_1.ValidationPipe,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: common_1.ClassSerializerInterceptor,
            },
        ],
        imports: [
            config_1.ConfigModule.forRoot({
                validate: (config) => {
                    const validatedConfig = (0, class_transformer_1.plainToInstance)(constants_1.EnvironmentVariables, config, {
                        enableImplicitConversion: true,
                    });
                    const errors = (0, class_validator_1.validateSync)(validatedConfig, {
                        skipMissingProperties: false,
                    });
                    if (errors.length > 0)
                        throw new Error(errors.toString());
                    return validatedConfig;
                },
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: services_1.DatabaseService,
            }),
            authentication_module_1.AuthenticationModule,
        ],
        exports: [services_1.EnvironmentService, authentication_module_1.AuthenticationModule],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map