import { User } from '@users/entities';
declare const UserUpdateDto_base: import("@nestjs/common").Type<Partial<Pick<User, "firstName" | "lastName">>>;
export declare class UserUpdateDto extends UserUpdateDto_base {
}
export {};
