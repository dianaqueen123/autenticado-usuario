import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ver-perfil')
export class ProfileController {
  @Get()
  @UseGuards(JwtAuthGuard)
  getProfileData() {
    // Solo puedo acceder con el token jwt
    return { mensaje: 'Todo funciona satisfactoriamente' };
  }
}
