import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationModule } from './authentification/authentification.module';
import { ShopsModule } from './shops/shops.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [AuthentificationModule, ShopsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: ["entity/*.entity{.ts,.js}"],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
