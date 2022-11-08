import { Authentication } from '@authentication/entities';
import { AuthRole } from '@authentication/constants';
export declare class User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    authentication?: Authentication;
    get fullName(): string;
    get roles(): AuthRole[];
}
