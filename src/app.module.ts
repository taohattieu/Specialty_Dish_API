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

@Module({
  imports: [
    ConfigModule.forRoot({
    isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'specialty',
      port: 3306,
      username: 'admin',
      password: '12345678',
      database: 'specialty_databasee',
      entities: [Account],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ProvincesModule,
    SocialModule,
    SharedModule,
    ContributionModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
