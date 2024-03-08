import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Province } from 'src/provinces/provinces.entity';
import { SpecialtyController } from './specialty.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialtyModule, Province])],
  controllers: [SpecialtyController],
  providers: [SpecialtyModule],
})
export class SpecialtyModule {}
