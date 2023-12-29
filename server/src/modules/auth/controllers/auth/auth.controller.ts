import { Body, Controller, Post } from '@nestjs/common';
import { SkipAuth } from 'src/commom/decorators/skipAuth.decorator';
import { ILoginResponseDTO, LoginDTO } from './authController.dto';
import { LoginService } from '../../services/auth/login/login.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginService: LoginService) {}

  @SkipAuth()
  @Post('')
  async loginUser(
    @Body() { email, password }: LoginDTO,
  ): Promise<ILoginResponseDTO> {
    const data = await this.loginService.execute({ email, password });

    return data;
  }
}

