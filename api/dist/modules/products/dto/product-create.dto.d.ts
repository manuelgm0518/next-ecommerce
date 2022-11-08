import { Product } from '@products/entities';
declare const ProductCreateDto_base: import("@nestjs/common").Type<Pick<Product, "name" | "description" | "price" | "stock">>;
export declare class ProductCreateDto extends ProductCreateDto_base {
}
export {};
