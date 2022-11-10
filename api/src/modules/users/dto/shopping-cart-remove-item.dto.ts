import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class ShoppingCartRemoveItemDto {
  @ApiProperty({ description: 'An Id referencing the `ShoppingCartItem` that will be deleted' })
  @IsInt()
  @IsPositive()
  shoppingCartItemId: number;
}
