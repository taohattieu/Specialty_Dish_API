import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async login(@Body() credentials: { email: string; password: string }): Promise<Auth> {
    return this.authService.login(credentials.email, credentials.password);
  }
}
