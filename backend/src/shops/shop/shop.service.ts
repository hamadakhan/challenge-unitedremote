import { Shop } from './../../entity/Shop.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShopService {
    constructor( @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Shop)
    private readonly shopRepository: Repository<Shop>,
   ){
 
    }


    nearbyShops(){
    return this.shopRepository.find();
    }


    preferredShops(){

    }
}
