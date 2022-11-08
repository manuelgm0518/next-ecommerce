import { UserSignUpDto } from './user-signup.dto';
declare const UserLogInDto_base: import("@nestjs/common").Type<Pick<UserSignUpDto, "email" | "password">>;
export declare class UserLogInDto extends UserLogInDto_base {
}
export {};
