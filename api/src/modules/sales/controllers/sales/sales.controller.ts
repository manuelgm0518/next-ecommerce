import { Controller, Param, ParseIntPipe } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';

import { API_ENDPOINTS, IHttpResponse } from '@core/constants';
import { ApiGet, ApiPost } from '@shared/decorators';
import { AuthRole } from '@authentication/constants';
import { CurrentAuth } from '@authentication/decorators';
import { SalesService } from '@sales/services';
import { Sale } from '@sales/entities';
import { User } from '@users/entities';

@ApiTags('Sales')
@Controller(API_ENDPOINTS.SALES.BASE_PATH)
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @ApiPost({
    roles: [AuthRole.CLIENT],
    summary: 'Create a new `Sale`',
    description:
      'Stores a new `Sale` record into the database based on the Shopping Cart of the current logged in User',
    responseDescription: 'A model containing the newly created `Sale` information',
    responseType: Sale,
  })
  async create(@CurrentAuth() currentUser: User): Promise<IHttpResponse<Sale>> {
    const data = await this.salesService.create(currentUser.id);
    return { data };
  }

  @ApiGet({
    roles: [AuthRole.ADMIN],
    summary: 'Get all `Sales`',
    description: 'Retrieves a list containing every `Sale` record in the database',
    responseDescription: 'A list of models containing the information of every `Sale` in the database',
    responseType: [Sale],
  })
  async find(): Promise<IHttpResponse<Sale[]>> {
    const data = await this.salesService.find();
    return { data };
  }

  @ApiGet({
    path: API_ENDPOINTS.SALES.BY_ID,
    roles: [AuthRole.ADMIN],
    summary: 'Get a `Sale` by Id',
    description: 'Retrieves an `Sale` record that matches the Id',
    responseDescription: 'A model containing the information of the matched `Sale`',
    responseType: Sale,
  })
  @ApiParam({ name: 'id', type: Number })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IHttpResponse<Sale>> {
    const data = await this.salesService.findOne({ where: { id } });
    return { data };
  }

  @ApiGet({
    path: API_ENDPOINTS.SALES.OWN,
    roles: [AuthRole.ADMIN, AuthRole.CLIENT],
    summary: 'Get all `Sales` made by the current logged in User',
    description: 'Retrieves a list containing every `Sale` record in the database made by the current logged in User',
    responseDescription:
      'A list of models containing the information of every `Sale` in the database made by the current logged in User',
    responseType: [Sale],
  })
  async findOwn(@CurrentAuth() currentUser: User): Promise<IHttpResponse<Sale[]>> {
    const data = await this.salesService.find({ where: { soldTo: { id: currentUser.id } } });
    return { data };
  }
}
