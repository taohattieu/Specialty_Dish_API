import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }): Promise<Auth> {
    return this.authService.login(credentials.email, credentials.password);
  }
}
