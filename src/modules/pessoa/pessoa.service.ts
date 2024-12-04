import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@Injectable()
export class PessoaService {
  private pessoas = [];

  findAll() {
    return this.pessoas;
  }

  findOne(id: number) {
    const pessoa = this.pessoas.find((p) => p.id === id);
    if (!pessoa) {
      throw new NotFoundException('Pessoa não encontrada');
    }
    return pessoa;
  }

  create(dto: CreatePessoaDto) {
    const novaPessoa = { id: Date.now(), ...dto };
    this.pessoas.push(novaPessoa);
    return novaPessoa;
  }

  update(id: number, dto: UpdatePessoaDto) {
    const pessoaIndex = this.pessoas.findIndex((p) => p.id === id);
    if (pessoaIndex === -1) {
      throw new NotFoundException('Pessoa não encontrada');
    }
    this.pessoas[pessoaIndex] = { ...this.pessoas[pessoaIndex], ...dto };
    return this.pessoas[pessoaIndex];
  }

  remove(id: number) {
    const pessoaIndex = this.pessoas.findIndex((p) => p.id === id);
    if (pessoaIndex === -1) {
      throw new NotFoundException('Pessoa não encontrada');
    }
    return this.pessoas.splice(pessoaIndex, 1);
  }
}
