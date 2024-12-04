import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePessoaDto {
  @ApiProperty({
    description: 'Nome completo da pessoa',
    example: 'João da Silva',
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'CPF da pessoa',
    example: '123.456.789-00',
  })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({
    description: 'Data de nascimento da pessoa',
    example: '1990-01-01',
  })
  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  dataNascimento: Date;

  @ApiProperty({
    description: 'Gênero da pessoa',
    example: 'masculino',
    enum: ['masculino', 'feminino', 'outro'],
  })
  @IsEnum(['masculino', 'feminino', 'outro'])
  @IsOptional()
  genero?: string;

  @ApiProperty({
    description: 'Email da pessoa',
    example: 'joao.silva@example.com',
  })
  @IsString()
  @IsOptional()
  email?: string;
}
