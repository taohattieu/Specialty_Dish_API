import { Optional } from "@nestjs/common"
import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength } from "class-validator"

export class UserDto{

    user_id: string

    @IsNotEmpty()
    @IsEmail()
    @ApiProperty()
    email: string

    @IsNotEmpty()
    @MinLength(5)
    password: string

    @Optional()
    firstName: string

    @Optional()
    lastName: string

    gender: 'male' | 'female'

    @IsPhoneNumber()
    phone: number

    address: string

    avatar: string

}