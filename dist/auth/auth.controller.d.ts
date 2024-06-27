import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(email: string, pass: string): Promise<{
        access_token: string;
    }>;
}
