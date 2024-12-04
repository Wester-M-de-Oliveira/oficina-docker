import { getRepositoryToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Pessoa } from './pessoa.entity';

export const pessoaProvider = [
  {
    provide: getRepositoryToken(Pessoa),
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Pessoa),
    inject: ['DATA_SOURCE'],
  },
];
