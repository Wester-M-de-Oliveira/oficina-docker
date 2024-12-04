import { Module } from '@nestjs/common';
import { pessoaProvider } from './pessoa.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...pessoaProvider],
})
export class PessoaModule {}
