import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';
import { ContributionModule } from './contribution/contribution.module';
import { SharedModule } from './shared/shared.module';
import { SocialModule } from './social/social.module';
import { ProvincesModule } from './provinces/provinces.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account/account.entity';
import { AccountModule } from './account/account.module';
import { Auth } from './auth/auth.entity';
import { SpecialtyModule } from './specialty/specialty.module';
import { Province } from './provinces/provinces.entity';
import { Specialty } from './specialty/specialty.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '12345678',
      database: 'specialty_database',
      entities: [
        Account, 
        Auth, 
        Province, 
        Specialty
      ],
      synchronize: true,
      // logging: true
    }),
    UserModule,
    AuthModule,
    AccountModule,
    ProvincesModule,
    SocialModule,
    SharedModule,
    ContributionModule,
    NotificationModule,
    SpecialtyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
