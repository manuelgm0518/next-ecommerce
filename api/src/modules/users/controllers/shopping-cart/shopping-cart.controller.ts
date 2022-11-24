import { AuthRole } from '@authentication/constants';
import { CurrentAuth } from '@authentication/decorators';
import { API_ENDPOINTS, IHttpResponse } from '@core/constants';
import { Body, Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiDelete, ApiGet, ApiPatch, ApiPost } from '@shared/decorators';
import { ShoppingCartAddItemDto, ShoppingCartUpdateItemDto } from '@users/dto';
import { ShoppingCartRemoveItemDto } from '@users/dto/shopping-cart-remove-item.dto';
import { ShoppingCart, ShoppingCartItem, User } from '@users/entities';
import { ShoppingCartService } from '@users/services';

@ApiTags('Shopping Cart')
@Controller(API_ENDPOINTS.USERS.SHOPPING_CART.BASE_PATH)
export class ShoppingCartController {
  constructor(private readonly shoppingCartService: ShoppingCartService) {}

  @ApiGet({
    roles: [AuthRole.CLIENT],
    summary: 'Get the `ShoppingCart`',
    description: 'Retrieves the `ShoppingCart` of the current logged in `User`',
    responseDescription: 'A model containing the matched `ShoppingCart`',
    responseType: ShoppingCart,
  })
  async find(@CurrentAuth() currentUser: User): Promise<IHttpResponse<ShoppingCart>> {
    const data = await this.shoppingCartService.findCart(currentUser.id);
    return { data };
  }

  @ApiPost({
    path: API_ENDPOINTS.USERS.SHOPPING_CART.ITEM,
    roles: [AuthRole.CLIENT],
    summary: 'Add a new `Product` to the `ShoppingCart`',
    description:
      'Creates a new `ShoppingCartItem` and stores it into the `ShoppingCart` of the current logged in `User`',
    responseDescription: 'A model containing the newly created `ShoppingCartItem`',
    responseType: ShoppingCartItem,
  })
  async addItem(
    @CurrentAuth() currentUser: User,
    @Body() dto: ShoppingCartAddItemDto,
  ): Promise<IHttpResponse<ShoppingCartItem>> {
    const data = await this.shoppingCartService.addItem(currentUser.id, dto);
    return { data };
  }

  @ApiPatch({
    path: API_ENDPOINTS.USERS.SHOPPING_CART.ITEM,
    roles: [AuthRole.CLIENT],
    summary: 'Update a `ShoppingCartItem` of the `ShoppingCart`',
    description: 'Updates a `ShoppingCartItem` from the `ShoppingCart` of the current logged in `User`',
    responseDescription: 'A model containing the updated `ShoppingCartItem` information',
    responseType: ShoppingCartItem,
  })
  async updateItem(
    @CurrentAuth() currentUser: User,
    @Body() dto: ShoppingCartUpdateItemDto,
  ): Promise<IHttpResponse<ShoppingCartItem>> {
    const data = await this.shoppingCartService.updateItem(currentUser.id, dto);
    return { data };
  }

  @ApiDelete({
    path: API_ENDPOINTS.USERS.SHOPPING_CART.ITEM,
    roles: [AuthRole.CLIENT],
    summary: 'Delete a `ShoppingCartItem` of the `ShoppingCart`',
    description: 'Deletes a `ShoppingCartItem` from the `ShoppingCart` of the current logged in `User`',
    responseDescription: 'A model containing the deleted `ShoppingCartItem` information',
    responseType: ShoppingCartItem,
  })
  async removeItem(
    @CurrentAuth() currentUser: User,
    @Body() dto: ShoppingCartRemoveItemDto,
  ): Promise<IHttpResponse<ShoppingCartItem>> {
    const data = await this.shoppingCartService.removeItem(currentUser.id, dto);
    return { data };
  }
}
