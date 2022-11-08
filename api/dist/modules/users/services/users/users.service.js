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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const await_to_js_1 = require("await-to-js");
const entities_1 = require("../../entities");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(dto, authentication) {
        const user = this.usersRepository.create(Object.assign(Object.assign({}, dto), { authentication }));
        const [err] = await (0, await_to_js_1.default)(this.usersRepository.save(user));
        if (err)
            throw new common_1.ForbiddenException(err.name, err.message);
        return user;
    }
    async find(options) {
        const users = this.usersRepository.find(options);
        return users;
    }
    async findOne(options) {
        const user = await this.usersRepository.findOne(options);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return user;
    }
    async updateById(id, dto) {
        const user = await this.usersRepository.preload(Object.assign({ id }, dto));
        if (!user)
            throw new common_1.NotFoundException('User not found');
        await this.usersRepository.update({ id }, dto);
        return user;
    }
    async deleteById(id) {
        const user = await this.usersRepository.findOneBy({ id });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        return await this.usersRepository.remove(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map