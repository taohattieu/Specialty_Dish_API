import { Province } from 'src/provinces/provinces.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('specialty')
export class Specialty {
  @PrimaryGeneratedColumn('uuid')
  specialty_id: string;

  @Column()
  name: string;

  @Column()
  origin: string;

  @Column()
  image: string;

  @Column()
  description: string;

  @ManyToOne(() => Province, province => province.specialty)
  @JoinColumn({ name: 'province_id' })
  province: Province;
}
