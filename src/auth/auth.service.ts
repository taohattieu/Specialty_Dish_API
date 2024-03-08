import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './auth.entity';
import { AccountService } from '../account/account.service';
import * as bcrypt from 'bcrypt';
import { Account } from 'src/account/account.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth)
    private authRepository: Repository<Auth>,
    @InjectRepository(Account)
    private accountRepository:  Repository<Account>,
  ) {}

  async login(email: string, password: string): Promise<Auth> {
    const account = await this.accountRepository.findOne({ where: { email } });

    // so sánh mật khẩu
    if (account && await bcrypt.compare(password, account.password)) {
      const auth = new Auth();
      auth.account = account;

      return this.authRepository.save(auth);
    } else {
      throw new NotFoundException('Invalid credentials');
    }
  }
}
