import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
  [x: string]: any;
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async createAccount(account: Account): Promise<Account> {
    return await this.accountRepository.save(account);
  }

  async findAccountByEmail(email: string): Promise<Account> {
    return await this.accountRepository.findOne({ where: { email } });  }

  async remove(id: string): Promise<void> {
    const result = await this.accountRepository.delete(id);
    if (result.affected ===  0) {
      throw new Error(`Could not delete user with id "${id}".`);
    }
  }
}
