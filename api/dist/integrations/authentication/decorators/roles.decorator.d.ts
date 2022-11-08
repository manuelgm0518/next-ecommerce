import { AuthRole } from '@authentication/constants';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: AuthRole[]) => import("@nestjs/common").CustomDecorator<string>;
