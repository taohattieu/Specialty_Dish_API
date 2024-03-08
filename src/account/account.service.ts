import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';
import { AccountDto } from './account.dto';
import { Auth } from 'src/auth/auth.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
    // private accountService: AccountService,
    
    // @InjectRepository(Auth)
    // private authRepository: Repository<Auth>,

  ) {}

  async createAccount(accountDto: AccountDto): Promise<Account> {
    const createdAccount = await this.accountRepository.save(accountDto);

    const auth = new Auth();
    auth.account = createdAccount;
    // auth.accessToken = this.authRepository.generateRandomToken();
    // auth.refreshToken = this.authRepository.generateRandomToken();

    // await this.authRepository.saveAuth(auth);

    return createdAccount;
  }

  // async login(accountDto: AccountDto): Promise<Account> {
  //   const account = await this.findAccountByEmail(accountDto.email);

  //   if (account && account.password === accountDto.password) {
  //     const auth = await this.authRepository.login(accountDto.email, accountDto.password);
  //     if (auth.isLoggedIn) {
  //       return account;
  //     } else {
  //       throw new UnauthorizedException('Account is not logged in');
  //     }
  //   } else {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }
  // }

  async findAccountByEmail(email: string): Promise<Account | undefined> {
    return await this.accountRepository.findOne({ where: { email } });
  }

  async removeId(id: string): Promise<void> {
    const result = await this.accountRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Không thể xóa người dùng với ID "${id}".`);
    }
  }
}
