import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { Auth } from './auth.entity';
import { AuthController } from './auth.controller';
import { Account } from 'src/account/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Auth, Account])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
