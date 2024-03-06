import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.entity';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() account: Account): Promise<Account> {
    return this.accountService.createAccount(account);
  }

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<Account> {
    return this.accountService.findAccountByEmail(email);
  }
}
