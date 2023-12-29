import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './commom/guards';
import { JwtStrategy } from './commom/guards/jwtGuard/jwt.strategy';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtStrategy,
    PrismaService,
  ],
})
export class AppModule {}

