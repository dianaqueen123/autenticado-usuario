"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const users_service_1 = require("../usuarios/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
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
    async login(email, pass) {
        console.log(`Iniciando sesión para: ${email}`);
        const user = await this.validateUser(email, pass);
        if (!user) {
            console.log('Fallo en la autenticación');
            throw new common_1.UnauthorizedException('Las credenciales no son correctas. Inténtelo de nuevo.');
        }
        const payload = { email: user.email, sub: user._id };
        console.log(`Generando token para: ${email}`);
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map