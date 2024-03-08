import { Specialty } from 'src/specialty/specialty.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('provinces')
export class Province {
  @PrimaryGeneratedColumn('uuid')
  provinces_id: string;

  @Column()
  name: string;

  @Column()
  image: string

  @OneToMany(() => Specialty, specialty => specialty.province)
  specialty: Specialty[];


}
