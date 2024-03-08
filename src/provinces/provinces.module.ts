import { Module } from '@nestjs/common';
import { ProvincesController } from './provinces.controller';
import { ProvincesService } from './provinces.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from './provinces.entity';
import { Specialty } from 'src/specialty/specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Province, Specialty])],
  controllers: [ProvincesController],
  providers: [ProvincesService],
})
export class ProvincesModule {}
