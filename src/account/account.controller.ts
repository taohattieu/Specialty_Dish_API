import { Controller, Post, Body, Get, Param, Delete, UnauthorizedException, ValidationPipe, UsePipes } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.entity';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { AccountDto } from './account.dto';


@Controller('accounts')
@ApiTags('Account')
export class AccountController {
    constructor(
      private readonly accountService: AccountService,
    ) {}

  @Get(':email')
  async findByEmail(@Param('email') email: string): Promise<Account> {
    return this.accountService.findAccountByEmail(email);
  }

  @Post('login')
    async login(@Body(new ValidationPipe()) accountDto: AccountDto) {
      // const account = await this.accountService.findAccountByEmail(accountDto.email);
  
      // if (account && account.password === accountDto.password) {
      //   const auth = await this.authService.login(accountDto.email, accountDto.password);
  
      //   if (auth.isLoggedIn) {
      //     return 'Login successful';
      //   } else {
      //     throw new UnauthorizedException('Account is not logged in');
      //   }
      // } else {
      //   throw new UnauthorizedException('Invalid credentials');
      // }

      // return this.accountService.login(accountDto);
    }

  @Post('register')
  async create(@Body(new ValidationPipe()) accountDto: AccountDto): Promise<AccountDto> {
    return this.accountService.createAccount(accountDto);
  }

  @Delete(':id')
  removeId(@Param('id') id: string): Promise<void> {
    return this.accountService.removeId(id);
  }

}
