import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthService } from './auth/auth.service';

@Module({
  controllers: [AuthentificationController],
  providers: [AuthService]
})
export class AuthentificationModule {}
