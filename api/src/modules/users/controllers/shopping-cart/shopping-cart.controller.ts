import { AuthRole } from '@authentication/constants';
import { API_ENDPOINTS, IHttpResponse } from '@core/constants';
import { Body, Controller, Param, ParseIntPipe } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ApiPost } from '@shared/decorators';
import { ShoppingCartAddItemDto } from '@users/dto';
import { ShoppingCartItem } from '@users/entities';
import { ShoppingCartService } from '@users/services';

@ApiTags('Shopping Cart')
@Controller(API_ENDPOINTS.USERS.SHOPPING_CART.BASE_PATH)
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @ApiPost({
    path: API_ENDPOINTS.USERS.SHOPPING_CART.BY_USER,
    roles: [AuthRole.CLIENT],
    summary: 'Create a new `User`',
    description: 'Stores a new `User` record into the database',
    responseDescription: 'A model containing the newly created `User` information',
    responseType: ShoppingCartItem,
  })
  @ApiParam({ name: 'id', type: Number })
  async addItem(
    @Param('user', ParseIntPipe) userId: number,
    @Body() dto: ShoppingCartAddItemDto,
  ): Promise<IHttpResponse<ShoppingCartItem>> {
    const data = await this.shoppingCartService.addItem(userId, dto);
    return { data };
  }
}
