"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../entities");
class ProductUpdateDto extends (0, swagger_1.PartialType)((0, swagger_1.PickType)(entities_1.Product, ['name', 'description', 'price', 'stock'])) {
}
exports.ProductUpdateDto = ProductUpdateDto;
//# sourceMappingURL=product-update.dto.js.map