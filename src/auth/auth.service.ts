import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { AccountService } from '../account/account.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    private accountService: AccountService,
  ) {}

  async login(email: string, password: string): Promise<Auth> {
    const account = await this.accountService.findAccountByEmail(email);
    if (account && account.password === password) {
      const auth = new Auth();
      auth.account = account;
      auth.accessToken = 'generated_access_token';
      auth.refreshToken = 'generated_refresh_token';
      return this.authRepository.save(auth);
    } else {
      throw new Error('Invalid credentials');
    }
  }
}
