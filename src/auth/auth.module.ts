import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';
import { AuthController } from './auth.controller';
import { Account } from 'src/account/account.entity';
import { AccountController } from 'src/account/account.controller';
import { AccountService } from 'src/account/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([Auth, Account])],
  controllers: [AuthController, AccountController],
  providers: [AuthService, AccountService],
})
export class AuthModule {}
