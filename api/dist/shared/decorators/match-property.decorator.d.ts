import { ValidationOptions } from 'class-validator';
export declare function MatchProperty(property: string, validationOptions?: ValidationOptions): (object: any, propertyName: string) => void;
