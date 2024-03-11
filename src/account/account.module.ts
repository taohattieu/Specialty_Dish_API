import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './account.service';
import { Account } from './account.entity';
import { AccountController } from './account.controller';
import { Auth } from 'src/auth/auth.entity';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account, Auth]),
  ],
  controllers: [AccountController, AuthController],
  providers: [AccountService, AuthService],
})
export class AccountModule {}
