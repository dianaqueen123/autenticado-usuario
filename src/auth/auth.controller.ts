import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('iniciar')
  async login(@Body('email') email: string, @Body('pass') pass: string) {
    try {
      return this.authService.login(email, pass);
    } catch (error) {
      throw new UnauthorizedException(
        'usuario o contraseña incorrectos o no existentes',
      );
    }
  }
}
