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
exports.AuthenticationService = void 0;
const authentication_entity_1 = require("../../entities/authentication.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const await_to_js_1 = require("await-to-js");
const constants_1 = require("../../constants");
const jwt_1 = require("@nestjs/jwt");
const entities_1 = require("../../entities");
let AuthenticationService = class AuthenticationService {
    constructor(authRepository, rolesRepository, jwtService) {
        this.authRepository = authRepository;
        this.rolesRepository = rolesRepository;
        this.jwtService = jwtService;
    }
    async validateByCredentials(identifier, plainTextPassword) {
        const authentication = await this.authRepository.findOneBy({ identifier });
        if (!authentication)
            throw new common_1.NotFoundException('Registry does not exist');
        const matches = await bcrypt.compare(plainTextPassword, authentication.passwordHash);
        if (!matches)
            throw new common_1.UnauthorizedException('Wrong credentials provided');
        return authentication;
    }
    async validateByToken(payload) {
        const authentication = await this.authRepository.findOneBy({ id: payload.authId });
        if (!authentication)
            throw new common_1.NotFoundException('Authentication registry not longer exists');
        return authentication;
    }
    async logIn(authentication) {
        return {
            authentication,
            authToken: this.jwtService.sign({
                authId: authentication.id,
                identifier: authentication.identifier,
            }),
        };
    }
    async signUp(dto, roles) {
        const hashedPassword = await bcrypt.hash(dto.plainTextPassword, 10);
        const validatedRoles = await this.validateAuthRoles(roles !== null && roles !== void 0 ? roles : [constants_1.AuthRole.REGULAR]);
        const authentication = this.authRepository.create({
            identifier: dto.identifier,
            passwordHash: hashedPassword,
            roles: validatedRoles,
        });
        const [err] = await (0, await_to_js_1.default)(this.authRepository.save(authentication));
        if (err)
            throw new common_1.ConflictException('A registry with this identifier already exists', err.message);
        return {
            authentication,
            authToken: this.jwtService.sign({
                authId: authentication.id,
                identifier: dto.identifier,
            }),
        };
    }
    async syncAuthRoles() {
        const [err] = await (0, await_to_js_1.default)(this.validateAuthRoles(constants_1.AUTH_ROLE_VALUES, true));
        if (err)
            throw new common_1.InternalServerErrorException('Could not sync roles into the database', err.message);
        console.info('Authentication roles synced successfully');
    }
    async validateAuthRoles(roles, generate = false) {
        const data = await Promise.all(roles.map(async (roleName) => {
            const role = await this.rolesRepository.findOneBy({ name: roleName });
            if (!role) {
                if (generate)
                    await this.rolesRepository.insert({ name: roleName });
                else
                    throw new common_1.BadRequestException('Invalid Authentication Role');
            }
            return role;
        }));
        return data;
    }
};
AuthenticationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(authentication_entity_1.Authentication)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        jwt_1.JwtService])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map