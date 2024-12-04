import { PartialType } from '@nestjs/swagger';
import { Pessoa } from '../pessoa.entity';

export class UpdatePessoaDto extends PartialType(Pessoa) {}
