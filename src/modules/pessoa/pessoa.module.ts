import { Module } from '@nestjs/common';
import { pessoaProvider } from './pessoa.provider';
import { DatabaseModule } from 'src/database/database.module';
import { PessoaController } from './pessoa.controller';
import { PessoaService } from './pessoa.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PessoaController],
  providers: [...pessoaProvider, PessoaService],
})
export class PessoaModule {}
