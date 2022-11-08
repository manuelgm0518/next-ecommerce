"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../entities");
class UserUpdateDto extends (0, swagger_1.PartialType)((0, swagger_1.PickType)(entities_1.User, ['firstName', 'lastName'])) {
}
exports.UserUpdateDto = UserUpdateDto;
//# sourceMappingURL=user-update.dto.js.map