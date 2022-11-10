import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';
import { ShoppingCartAddItemDto } from './shopping-cart-add-item.dto';

export class ShoppingCartUpdateItemDto extends PickType(ShoppingCartAddItemDto, ['amount'] as const) {
  @ApiProperty({ description: 'An Id referencing the `ShoppingCartItem` that will be updated' })
  @IsInt()
  @IsPositive()
  shoppingCartItemId: number;
}
