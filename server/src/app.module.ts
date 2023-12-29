import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';

import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

