import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class ShoppingCartAddItemDto {
  @ApiProperty({ description: 'An Id referencing the `Product` that will be saved in the ShoppingCart' })
  @IsInt()
  @IsPositive()
  productId: number;

  @ApiProperty({ description: 'The quantity of `Products` that will be saved in the ShoppingCart' })
  @IsInt()
  @IsPositive()
  amount: number;
}
