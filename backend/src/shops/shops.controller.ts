import { Controller, UseGuards, Get } from '@nestjs/common';
import { ShopService } from './shop/shop.service';
import { ApiUseTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiUseTags('Shop')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('shops')
export class ShopsController {

    constructor(private readonly shopService : ShopService){

    }
    @Get('nearbyShops')
    nearbyShops(){
     this.shopService.nearbyShops();
    }

    @Get('preferredShops')
    preferredShops(){

    }
}
