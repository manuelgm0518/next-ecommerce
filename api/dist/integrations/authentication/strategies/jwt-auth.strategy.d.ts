import { Strategy } from 'passport-jwt';
import { AuthenticationService } from '@authentication/services';
import { EnvironmentService } from '@core/services';
import { IDecodedToken } from '@authentication/constants';
import { Authentication } from '@authentication/entities';
declare const JwtAuthStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAuthStrategy extends JwtAuthStrategy_base {
    private readonly environmentService;
    private readonly authService;
    constructor(environmentService: EnvironmentService, authService: AuthenticationService);
    validate(payload: IDecodedToken): Promise<Authentication>;
}
export {};
