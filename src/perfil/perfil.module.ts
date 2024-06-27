import { Module } from '@nestjs/common';
import { ProfileController } from './perfil.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ProfileController],
})
export class ProfileModule {}
