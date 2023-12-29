import { Module } from '@nestjs/common';

import { AuthService } from './modules/auth/services/auth/auth.service';
import { AuthController } from './modules/auth/controllers/auth/auth.controller';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}

