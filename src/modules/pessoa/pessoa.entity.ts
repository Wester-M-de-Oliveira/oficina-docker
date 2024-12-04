import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('pessoa')
export class Pessoa {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nome!: string;

  @Column({ type: 'varchar', length: 14, unique: true })
  cpf!: string;

  @Column({ type: 'date' })
  dataNascimento!: Date;

  @Column({
    type: 'enum',
    enum: ['masculino', 'feminino', 'outro'],
    nullable: true,
  })
  genero?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email?: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
