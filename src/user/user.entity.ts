import { Account } from 'src/account/account.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gender: 'male' | 'female';

  @Column()
  phone: number;

  @Column()
  address: string;

  @Column()
  avatar: string;

  @OneToOne(() => Account, account => account.users)
  @JoinColumn({ name: 'account_id' })
  account: Account;

}
