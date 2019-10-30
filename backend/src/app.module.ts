import { Shop } from './entity/Shop.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationModule } from './authentification/authentification.module';
import { ShopsModule } from './shops/shops.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {environment} from 'parameter'
import { JwtStrategy } from './Guard/JwtStrategy ';


@Module({
  imports: [AuthentificationModule, ShopsModule,
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
      secretOrPrivateKey: environment.keySecret,
      signOptions: {
        expiresIn: 36000,
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'shop',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

      synchronize: true,
    }),
    TypeOrmModule.forFeature([User,Shop]),
  ],
  controllers: [AppController],
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
