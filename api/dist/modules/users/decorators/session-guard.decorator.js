"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseSessionGuard = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../../../integrations/authentication/guards");
const guards_2 = require("../guards");
const swagger_1 = require("@nestjs/swagger");
function UseSessionGuard() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_2.SessionGuard));
}
exports.UseSessionGuard = UseSessionGuard;
//# sourceMappingURL=session-guard.decorator.js.map