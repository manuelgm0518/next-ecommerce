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
exports.SessionGuard = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../services");
let SessionGuard = class SessionGuard {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authorization = request.user;
        if (!authorization)
            throw new common_1.UnauthorizedException('You must log in first');
        const user = await this.usersService.findOne({
            where: { email: authorization.identifier },
            relations: ['authentication'],
        });
        request.user = user;
        return !!user;
    }
};
SessionGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.UsersService])
], SessionGuard);
exports.SessionGuard = SessionGuard;
//# sourceMappingURL=session-guard.guard.js.map