import { Module } from '@nestjs/common';
import { pessoaProvider } from './pessoa.provider';

@Module({
  providers: [...pessoaProvider],
})
export class PessoaModule {}
