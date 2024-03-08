import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Account } from '../account/account.entity';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  accessToken: string;

  @Column({type:'longtext'})
  refreshToken: string;

  @Column({ default: false }) 
  isLoggedIn: boolean;

  @OneToOne(() => Account, account => account.auths)
  @JoinColumn({ name: 'account_id' })
  account: Account;
}
