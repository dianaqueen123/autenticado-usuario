import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './perfil/perfil.module';
import { UsersModule } from './usuarios/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://dianaxqueen:PEPITOYTITO@ac-gcbwger-shard-00-00.9fbegmi.mongodb.net:27017,ac-gcbwger-shard-00-01.9fbegmi.mongodb.net:27017,ac-gcbwger-shard-00-02.9fbegmi.mongodb.net:27017/auth_user_db?replicaSet=atlas-3v8uzw-shard-0&ssl=true&authSource=admin',
    ),
    UsersModule,
    AuthModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
