import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { AccountService } from 'src/account/account.service';
import { AccountController } from 'src/account/account.controller';
import { Account } from 'src/account/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auth, Account])],
  controllers: [AuthController, AccountController],
  providers: [AuthService, AccountService]
})
export class AuthModule {}
