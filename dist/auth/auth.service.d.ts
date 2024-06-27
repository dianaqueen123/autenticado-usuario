import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/usuarios/users.service';
import { User } from 'src/usuarios/interfaces/users.interface';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<User>;
    login(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}
