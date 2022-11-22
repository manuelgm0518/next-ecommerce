import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { ProductsModule } from '@products/products.module';
import { UsersModule } from '@users/users.module';
import { SalesModule } from '@sales/sales.module';

@Module({
  imports: [CoreModule, UsersModule, ProductsModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
