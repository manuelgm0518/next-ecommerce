export enum AuthRole {
  ADMIN = 'admin',
  CLIENT = 'client',
}
export const AUTH_ROLE_VALUES = Object.values(AuthRole);
export const ALL_ROLES = [AuthRole.ADMIN, AuthRole.CLIENT];
export const ALL_ROLES_EXCEPT = (...roles: AuthRole[]) => AUTH_ROLE_VALUES.filter((role) => !roles.includes(role));
