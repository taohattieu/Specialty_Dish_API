import { Entity, Column, OneToMany, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Auth } from '../auth/auth.entity';
import { v4 as uuidv4 } from 'uuid';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Optional } from '@nestjs/common';

@Entity('accounts')
export class Account {
  @PrimaryGeneratedColumn(
    'uuid',
    uuidv4()
  )
  
  account_id: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @CreateDateColumn()
  CreateAt: Date;

  @UpdateDateColumn()
  UpdateAt: Date;


  @OneToOne(() => Auth, auth => auth.account)
  auths: Auth[];
}
