import { Optional } from '@nestjs/common'
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class AuthDto{
    
    @ApiProperty()
    accessToken: string

    @ApiProperty()
    refreshToken: string

    @ApiProperty()
    isLoggedIn: boolean
}