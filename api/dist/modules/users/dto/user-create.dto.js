"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../entities");
class UserCreateDto extends (0, swagger_1.PickType)(entities_1.User, ['email', 'firstName', 'lastName']) {
}
exports.UserCreateDto = UserCreateDto;
//# sourceMappingURL=user-create.dto.js.map