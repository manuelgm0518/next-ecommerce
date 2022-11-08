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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("../../../../core/constants");
const decorators_1 = require("../../../../shared/decorators");
const constants_2 = require("../../../../integrations/authentication/constants");
const dto_1 = require("../../dto");
const entities_1 = require("../../entities");
const services_1 = require("../../services");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    async create(dto) {
        const data = await this.productsService.create(dto);
        return { data };
    }
    async find() {
        const data = await this.productsService.find();
        return { data };
    }
    async findById(id) {
        const data = await this.productsService.findOne({ where: { id } });
        return { data };
    }
    async updateById(id, body) {
        const data = await this.productsService.updateById(id, body);
        return { data };
    }
    async deleteById(id) {
        const data = await this.productsService.deleteById(id);
        return { data };
    }
};
__decorate([
    (0, decorators_1.ApiPost)({
        roles: [constants_2.AuthRole.ADMIN],
        summary: 'Create a new `Product`',
        description: 'Stores a new `Product` record into the database',
        responseDescription: 'A model containing the newly created `Product` information',
        responseType: entities_1.Product,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ProductCreateDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, decorators_1.ApiGet)({
        roles: constants_2.ALL_ROLES,
        summary: 'Get all `Products`',
        description: 'Retrieves a list containing every `Product` record in the database',
        responseDescription: 'A list of models containing the information of every `Product` in the database',
        responseType: [entities_1.Product],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "find", null);
__decorate([
    (0, decorators_1.ApiGet)({
        path: constants_1.API_ENDPOINTS.PRODUCTS.BY_ID,
        roles: constants_2.ALL_ROLES,
        summary: 'Get a `Product` by Id',
        description: 'Retrieves a `Product` record that matches the Id',
        responseDescription: 'A model containing the information of the matched `Product`',
        responseType: entities_1.Product,
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findById", null);
__decorate([
    (0, decorators_1.ApiPatch)({
        path: constants_1.API_ENDPOINTS.PRODUCTS.BY_ID,
        roles: [constants_2.AuthRole.ADMIN],
        summary: 'Update a `Product` by Id',
        description: 'Updates a `Product` record that matches the Id',
        responseDescription: 'A model containing the updated information of the matched `Product`',
        responseType: entities_1.Product,
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, dto_1.ProductUpdateDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "updateById", null);
__decorate([
    (0, decorators_1.ApiDelete)({
        path: constants_1.API_ENDPOINTS.PRODUCTS.BY_ID,
        roles: [constants_2.AuthRole.ADMIN],
        summary: 'Delete a `Product` by Id',
        description: 'Deletes a `Product` record that matches the Id',
        responseDescription: 'A model containing the information of the deleted `Product`',
        responseType: entities_1.Product,
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteById", null);
ProductsController = __decorate([
    (0, swagger_1.ApiTags)('Products'),
    (0, common_1.Controller)(constants_1.API_ENDPOINTS.PRODUCTS.BASE_PATH),
    __metadata("design:paramtypes", [services_1.ProductsService])
], ProductsController);
exports.ProductsController = ProductsController;
//# sourceMappingURL=products.controller.js.map