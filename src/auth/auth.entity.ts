import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Account } from '../account/account.entity';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  auth_id: string;

  @Column({type: 'longtext'})
  accessToken: string;

  @Column({type: 'longtext'})
  refreshToken: string;

  @ManyToOne(() => Account, account => account.auths)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
