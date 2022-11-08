import { PartialType, PickType } from '@nestjs/swagger';
import { Product } from '@products/entities';

export class ProductUpdateDto extends PartialType(PickType(Product, ['name', 'description', 'price', 'stock'])) {}
