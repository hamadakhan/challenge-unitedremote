import { AuthService } from './auth/auth.service';
import { ShopService } from './../shops/shop/shop.service';
import { Controller, Post, Get, Body, UseInterceptors, ClassSerializerInterceptor, UseGuards } from '@nestjs/common';
import { LoginDTD } from './Model/LoginDTD';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiUseTags('Login')
@Controller('authentification')
@UseInterceptors(ClassSerializerInterceptor)

export class AuthentificationController {

    constructor(private readonly authService : AuthService){

    }


    @Post('register')
    register(@Body() user:LoginDTD){
        
        return this.authService.register(user);
    }
     
    @Post('login')
    login(@Body() user:LoginDTD){
       return this.authService.login(user)
    }
    @UseGuards(AuthGuard())
    @Get('check')
    checkLogin(){
        return this.authService.check()
    }
}
