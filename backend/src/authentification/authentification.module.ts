import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthService } from './auth/auth.service';
import { User } from 'src/entity/User.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import {environment} from 'parameter'
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
@Module({
  controllers: [AuthentificationController],
  providers: [AuthService],
  imports:[
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: environment.keySecret,
      signOptions: {
        expiresIn: 36000,
      },
    }),
    TypeOrmModule.forFeature([User]),
  
  ]
})
export class AuthentificationModule {}
