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
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const await_to_js_1 = require("await-to-js");
const services_1 = require("../../../../integrations/authentication/services");
const entities_1 = require("../../entities");
const constants_1 = require("../../../../integrations/authentication/constants");
let SessionService = class SessionService {
    constructor(usersRepository, authService) {
        this.usersRepository = usersRepository;
        this.authService = authService;
    }
    async signUp(dto, isAdmin = false) {
        const { authentication, authToken } = await this.authService.signUp({
            identifier: dto.email,
            plainTextPassword: dto.password,
        }, isAdmin ? [constants_1.AuthRole.ADMIN] : null);
        const user = this.usersRepository.create({
            email: dto.email,
            firstName: dto.firstName,
            lastName: dto.lastName,
            authentication,
        });
        const [err] = await (0, await_to_js_1.default)(this.usersRepository.save(user));
        if (err)
            throw new common_1.ForbiddenException(err.name, err.message);
        delete user.authentication;
        return { user, authToken };
    }
    async logIn(email) {
        const user = await this.usersRepository.findOne({
            relations: ['authentication'],
            where: { email },
        });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const { authToken } = await this.authService.logIn(user.authentication);
        delete user.authentication;
        return { user, authToken };
    }
    async testAdmin() {
        const exists = await this.usersRepository.findOneBy({ email: 'admin@admin.com' });
        if (!exists) {
            await this.signUp({
                email: 'admin@admin.com',
                firstName: 'Bruce',
                lastName: 'Wayne',
                password: 'Abc1234#',
                confirmPassword: 'Abc1234#',
            }, true);
        }
    }
};
SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        services_1.AuthenticationService])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map