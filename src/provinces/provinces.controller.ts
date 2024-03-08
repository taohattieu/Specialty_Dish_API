import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('provinces')
@ApiTags('Provinces')

export class ProvincesController {
    @Get()
    getAll(): string{
        return 'This action returns all provinces'
    }
}
