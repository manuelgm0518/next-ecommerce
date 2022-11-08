import { AuthRole } from '@authentication/constants';
export declare class Role {
    id: number;
    name: string;
    get authRole(): AuthRole;
}
