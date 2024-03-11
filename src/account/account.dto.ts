import { Optional } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class AccountDto{

    account_id: string

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ example:"@gmail.com"})
    email: string

    @Optional()
    @ApiProperty({example: "John"})
    firstName: string

    @Optional()
    @ApiProperty({example: "Doe"})
    lastName: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @ApiProperty({ example:""})
    password:string

    createdAt: Date

    updatedAt: Date

}