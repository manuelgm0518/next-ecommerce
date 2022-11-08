import { Module } from '@nestjs/common';

import { CoreModule } from '@core/core.module';
import { ProductsModule } from '@products/products.module';
import { UsersModule } from '@users/users.module';

@Module({
  imports: [CoreModule, UsersModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
