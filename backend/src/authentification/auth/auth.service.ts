import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/User.entity';
import { Repository } from 'typeorm';
import { LoginDTD } from '../Model/LoginDTD';
import { JwtService } from '@nestjs/jwt';
import { sha256 } from 'js-sha256';

@Injectable()
export class AuthService {
   constructor( @InjectRepository(User)
   private readonly userRepository: Repository<User>,
   private readonly jwtService: JwtService){

   }


  async register(user:LoginDTD){
    let compte = await this.userRepository.findOne({where: { email: user.email }})
    if (compte ) throw new UnauthorizedException(`L'adresse e-mail deja exist  !! `);

     user.password = sha256(user.password);
   return  this.userRepository.save(user);

   }




   async login(user:LoginDTD){
   
        let compte = await this.userRepository.findOne({where: { email: user.email, password: sha256(user.password) }})
        if (!compte ) throw new UnauthorizedException(`L'adresse e-mail ou le mot de passe que vous avez entré n'est pas valide`);
        return {token:this.jwtService.sign({id: compte.id , sub:compte.email})};
    
   }

  
   check(){
       return this.userRepository.find()
   }
   
}
