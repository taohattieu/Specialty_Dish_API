import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async createAccount(account: Account): Promise<Account> {
    return await this.accountRepository.save(account);
  }

  async findAccountByEmail(email: string): Promise<Account> {
    return await this.accountRepository.findOne({ where: { email } });  }
}
