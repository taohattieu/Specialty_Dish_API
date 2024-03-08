import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('specialty')
@ApiTags('Specialty')
export class SpecialtyController {
    @Get()
    getAll(): string {
        return 'This action returns all specialties'
    }
}
