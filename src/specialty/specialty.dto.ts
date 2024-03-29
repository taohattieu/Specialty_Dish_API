import { Optional } from "@nestjs/common"
import { IsNotEmpty } from "class-validator"


export class SpecialtyDto {

    specialty_id

    @IsNotEmpty()
    name: string

    @IsNotEmpty()
    origin: string

    @IsNotEmpty()
    image: string

    @Optional()
    description: string
}