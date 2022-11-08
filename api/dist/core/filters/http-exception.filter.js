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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    catch(exception, host) {
        console.error(exception);
        const isHttpException = exception instanceof common_1.HttpException;
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let name = 'Internal Server Error';
        let error = 'An unknown error just happened';
        let messages = exception;
        let stack = null;
        if (isHttpException) {
            const exceptionResponse = exception.getResponse();
            status = exception.getStatus();
            name = exception.name;
            error = exceptionResponse['error'];
            messages = exceptionResponse['message'];
            stack = !this.environmentService.isProduction ? exception.stack : null;
        }
        response.status(status).json(Object.assign({ status,
            name,
            error,
            messages, path: request.url, timestamp: new Date().toISOString() }, (stack && { stack })));
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [services_1.EnvironmentService])
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
//# sourceMappingURL=http-exception.filter.js.map