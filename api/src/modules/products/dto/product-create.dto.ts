import { PickType } from '@nestjs/swagger';
import { Product } from '@products/entities';

export class ProductCreateDto extends PickType(Product, ['name', 'description', 'price', 'stock'] as const) {}
