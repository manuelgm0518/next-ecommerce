import { User } from '@users/entities';
declare const UserCreateDto_base: import("@nestjs/common").Type<Pick<User, "email" | "firstName" | "lastName">>;
export declare class UserCreateDto extends UserCreateDto_base {
}
export {};
