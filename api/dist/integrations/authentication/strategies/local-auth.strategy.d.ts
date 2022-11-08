import { Strategy } from 'passport-local';
import { AuthenticationService } from '@authentication/services';
import { Authentication } from '@authentication/entities';
declare const LocalAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalAuthStrategy extends LocalAuthStrategy_base {
    private readonly authService;
    constructor(authService: AuthenticationService);
    validate(email: string, password: string): Promise<Authentication>;
}
export {};
