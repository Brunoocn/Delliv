import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { UserRepository } from './database/repositories/implementations/user.repository';
import { LoginService } from './services/auth/login/login.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
    LoginService,
    JwtService,
    PrismaService,
  ],
  exports: [
    {
      provide: 'UserRepository',
      useClass: UserRepository,
    },
  ],
})
export class AuthModule {}
