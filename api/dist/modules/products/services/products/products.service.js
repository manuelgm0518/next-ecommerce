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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const await_to_js_1 = require("await-to-js");
const entities_1 = require("../../entities");
let ProductsService = class ProductsService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async create(dto) {
        const product = this.productsRepository.create(dto);
        const [err] = await (0, await_to_js_1.default)(this.productsRepository.save(product));
        if (err)
            throw new common_1.ForbiddenException(err.name, err.message);
        return product;
    }
    async find(options) {
        const products = this.productsRepository.find(options);
        return products;
    }
    async findOne(options) {
        const product = await this.productsRepository.findOne(options);
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async updateById(id, dto) {
        const product = await this.productsRepository.preload(Object.assign({ id }, dto));
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        await this.productsRepository.update({ id }, dto);
        return product;
    }
    async deleteById(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return await this.productsRepository.remove(product);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map