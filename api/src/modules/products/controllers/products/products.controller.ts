import { Controller, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

import { API_ENDPOINTS, IHttpResponse } from '@core/constants';
import { ApiDelete, ApiGet, ApiPatch, ApiPost } from '@shared/decorators';
import { ALL_ROLES, AuthRole } from '@authentication/constants';
import { ProductCreateDto, ProductUpdateDto } from '@products/dto';
import { Product } from '@products/entities';
import { ProductsService } from '@products/services';

@ApiTags('Products')
@Controller(API_ENDPOINTS.PRODUCTS.BASE_PATH)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiPost({
    roles: [AuthRole.ADMIN],
    summary: 'Create a new `Product`',
    description: 'Stores a new `Product` record into the database',
    responseDescription: 'A model containing the newly created `Product` information',
    responseType: Product,
  })
  async create(@Body() dto: ProductCreateDto): Promise<IHttpResponse<Product>> {
    const data = await this.productsService.create(dto);
    return { data };
  }

  @ApiGet({
    roles: ALL_ROLES,
    summary: 'Get all `Products`',
    description: 'Retrieves a list containing every `Product` record in the database',
    responseDescription: 'A list of models containing the information of every `Product` in the database',
    responseType: [Product],
  })
  async find(): Promise<IHttpResponse<Product[]>> {
    const data = await this.productsService.find();
    return { data };
  }

  @ApiGet({
    path: API_ENDPOINTS.PRODUCTS.BY_ID,
    roles: ALL_ROLES,
    summary: 'Get a `Product` by Id',
    description: 'Retrieves a `Product` record that matches the Id',
    responseDescription: 'A model containing the information of the matched `Product`',
    responseType: Product,
  })
  @ApiParam({ name: 'id', type: Number })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IHttpResponse<Product>> {
    const data = await this.productsService.findOne({ where: { id } });
    return { data };
  }

  @ApiPatch({
    path: API_ENDPOINTS.PRODUCTS.BY_ID,
    roles: [AuthRole.ADMIN],
    summary: 'Update a `Product` by Id',
    description: 'Updates a `Product` record that matches the Id',
    responseDescription: 'A model containing the updated information of the matched `Product`',
    responseType: Product,
  })
  @ApiParam({ name: 'id', type: Number })
  async updateById(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ProductUpdateDto,
  ): Promise<IHttpResponse<Product>> {
    const data = await this.productsService.updateById(id, body);
    return { data };
  }

  @ApiDelete({
    path: API_ENDPOINTS.PRODUCTS.BY_ID,
    roles: [AuthRole.ADMIN],
    summary: 'Delete a `Product` by Id',
    description: 'Deletes a `Product` record that matches the Id',
    responseDescription: 'A model containing the information of the deleted `Product`',
    responseType: Product,
  })
  @ApiParam({ name: 'id', type: Number })
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<IHttpResponse<Product>> {
    const data = await this.productsService.deleteById(id);
    return { data };
  }
}
