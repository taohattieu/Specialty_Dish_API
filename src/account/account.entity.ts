import { Auth } from 'src/auth/auth.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn()
  account_id: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @OneToMany(() => Auth, auth => auth.account)
  auths: Auth[];
}
