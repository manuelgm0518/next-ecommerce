import { Authentication } from '@authentication/entities/authentication.entity';
declare const AuthenticationSignUpDto_base: import("@nestjs/common").Type<Pick<Authentication, "identifier">>;
export declare class AuthenticationSignUpDto extends AuthenticationSignUpDto_base {
    plainTextPassword: string;
}
export {};
