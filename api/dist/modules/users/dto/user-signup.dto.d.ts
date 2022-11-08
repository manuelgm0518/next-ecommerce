import { User } from '@users/entities';
declare const UserSignUpDto_base: import("@nestjs/common").Type<Pick<User, "email" | "firstName" | "lastName">>;
export declare class UserSignUpDto extends UserSignUpDto_base {
    password: string;
    confirmPassword: string;
}
export {};
