"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../entities");
class ProductCreateDto extends (0, swagger_1.PickType)(entities_1.Product, ['name', 'description', 'price', 'stock']) {
}
exports.ProductCreateDto = ProductCreateDto;
//# sourceMappingURL=product-create.dto.js.map