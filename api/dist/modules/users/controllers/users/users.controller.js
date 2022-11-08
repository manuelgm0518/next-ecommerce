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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../../../../shared/decorators");
const constants_1 = require("../../../../core/constants");
const entities_1 = require("../../entities");
const services_1 = require("../../services");
const dto_1 = require("../../dto");
const decorators_2 = require("../../../../integrations/authentication/decorators");
const decorators_3 = require("../../decorators");
const constants_2 = require("../../../../integrations/authentication/constants");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(dto) {
        const data = await this.usersService.create(dto);
        return { data };
    }
    async find(user) {
        console.log(user);
        const data = await this.usersService.find();
        return { data };
    }
    async findById(id) {
        const data = await this.usersService.findOne({ where: { id } });
        return { data };
    }
    async updateById(id, body) {
        const data = await this.usersService.updateById(id, body);
        return { data };
    }
    async deleteById(id) {
        const data = await this.usersService.deleteById(id);
        return { data };
    }
};
__decorate([
    (0, decorators_1.ApiPost)({
        roles: (0, constants_2.ALL_ROLES_EXCEPT)(constants_2.AuthRole.REGULAR),
        summary: 'Create a new `User`',
        description: 'Stores a new `User` record into the database',
        responseDescription: 'A model containing the newly created `User` information',
        responseType: entities_1.User,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UserCreateDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, decorators_1.ApiGet)({
        roles: (0, constants_2.ALL_ROLES_EXCEPT)(constants_2.AuthRole.REGULAR),
        summary: 'Get all `Users`',
        description: 'Retrieves a list containing every `User` record in the database',
        responseDescription: 'A list of models containing the information of every `User` in the database',
        responseType: [entities_1.User],
    }),
    (0, decorators_3.UseSessionGuard)(),
    __param(0, (0, decorators_2.CurrentAuth)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.User]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "find", null);
__decorate([
    (0, decorators_1.ApiGet)({
        path: constants_1.API_ENDPOINTS.USERS.BY_ID,
        roles: constants_2.ALL_ROLES,
        summary: 'Get an `User` by Id',
        description: 'Retrieves an `User` record that matches the Id',
        responseDescription: 'A model containing the information of the matched `User`',
        responseType: entities_1.User,
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
__decorate([
    (0, decorators_1.ApiPatch)({
        path: constants_1.API_ENDPOINTS.USERS.BY_ID,
        roles: [constants_2.AuthRole.ADMIN],
        summary: 'Update an `User` by Id',
        description: 'Updates an `User` record that matches the Id',
        responseDescription: 'A model containing the updated information of the matched `User`',
        responseType: entities_1.User,
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.UserUpdateDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateById", null);
__decorate([
    (0, decorators_1.ApiDelete)({
        path: constants_1.API_ENDPOINTS.USERS.BY_ID,
        roles: [constants_2.AuthRole.ADMIN],
        summary: 'Delete an `User` by Id',
        description: 'Deletes an `User` record that matches the Id',
        responseDescription: 'A model containing the information of the deleted `User`',
        responseType: entities_1.User,
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteById", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)(constants_1.API_ENDPOINTS.USERS.BASE_PATH),
    __metadata("design:paramtypes", [services_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map