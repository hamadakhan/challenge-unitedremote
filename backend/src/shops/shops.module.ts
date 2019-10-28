import { Module } from '@nestjs/common';
import { ShopsController } from './shops.controller';
import { ShopService } from './shop/shop.service';

@Module({
  controllers: [ShopsController],
  providers: [ShopService]
})
export class ShopsModule {}
