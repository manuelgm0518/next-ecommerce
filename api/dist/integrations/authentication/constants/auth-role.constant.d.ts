export declare enum AuthRole {
    ADMIN = "admin",
    REGULAR = "regular"
}
export declare const AUTH_ROLE_VALUES: AuthRole[];
export declare const ALL_ROLES: AuthRole[];
export declare const ALL_ROLES_EXCEPT: (...roles: AuthRole[]) => AuthRole[];
