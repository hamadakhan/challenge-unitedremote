import { Shop } from './../entity/Shop.entity';
import { User } from 'src/entity/User.entity';
import { Module } from '@nestjs/common';
import { ShopsController } from './shops.controller';
import { ShopService } from './shop/shop.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';

@Module({
  controllers: [ShopsController],
  providers: [ShopService],
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([User,Shop]),

  ]
})
export class ShopsModule {}
