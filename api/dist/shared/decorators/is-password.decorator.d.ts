import { ValidationOptions } from 'class-validator';
export declare function IsPassword(validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
export declare const PASSWORD_DESCRIPTION = "Must contain at least one of: upper case letter, lower case letter, number and special character. Minimum length is 8 and maximum is 32";
