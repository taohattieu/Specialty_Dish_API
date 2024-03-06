import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.entity';
import { ApiTags } from '@nestjs/swagger';

@Controller('accounts')
@ApiTags('Account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<Account> {
    return this.accountService.findAccountByEmail(email);
  }

  @Post()
  async create(@Body() account: Account): Promise<Account> {
    return this.accountService.createAccount(account);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.accountService.remove(id);
  }
}
