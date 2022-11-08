import { Role } from './auth-roles.entity';
export declare class Authentication {
    id: number;
    identifier: string;
    passwordHash: string;
    roles: Role[];
}
