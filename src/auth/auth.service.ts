import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/usuarios/users.service';
import { User } from 'src/usuarios/interfaces/users.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    console.log(`Validando usuario: ${email}`);
    const user = await this.usersService.findOne(email);
    if (!user) {
      console.log('Usuario no encontrado');
      return null;
    }
    const isPassCheck = await bcrypt.compare(pass, user.pass);
    console.log(`Contraseña correcta: ${isPassCheck}`);

    if (isPassCheck) {
      return user;
    }
    return null;
  }

  async login(email: string, pass: string) {
    console.log(`Iniciando sesión para: ${email}`);
    const user = await this.validateUser(email, pass);

    if (!user) {
      console.log('Fallo en la autenticación');
      throw new UnauthorizedException(
        'Las credenciales no son correctas. Inténtelo de nuevo.',
      );
    }

    const payload = { email: user.email, sub: user._id };
    console.log(`Generando token para: ${email}`);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
