import { AuthRole } from '@authentication/constants';
interface ApiMethodParams {
    path?: string;
    roles?: AuthRole[];
    summary?: string;
    description?: string;
    responseType?: any;
    responseDescription?: string;
}
export declare function ApiPost(params?: ApiMethodParams): MethodDecorator;
export declare function ApiGet(params?: ApiMethodParams): MethodDecorator;
export declare function ApiPatch(params?: ApiMethodParams): MethodDecorator;
export declare function ApiPut(params?: ApiMethodParams): MethodDecorator;
export declare function ApiDelete(params?: ApiMethodParams): MethodDecorator;
export {};
