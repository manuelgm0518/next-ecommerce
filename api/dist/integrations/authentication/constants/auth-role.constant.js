"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_ROLES_EXCEPT = exports.ALL_ROLES = exports.AUTH_ROLE_VALUES = exports.AuthRole = void 0;
var AuthRole;
(function (AuthRole) {
    AuthRole["ADMIN"] = "admin";
    AuthRole["REGULAR"] = "regular";
})(AuthRole = exports.AuthRole || (exports.AuthRole = {}));
exports.AUTH_ROLE_VALUES = Object.values(AuthRole);
exports.ALL_ROLES = [AuthRole.ADMIN, AuthRole.REGULAR];
const ALL_ROLES_EXCEPT = (...roles) => exports.AUTH_ROLE_VALUES.filter((role) => !roles.includes(role));
exports.ALL_ROLES_EXCEPT = ALL_ROLES_EXCEPT;
//# sourceMappingURL=auth-role.constant.js.map