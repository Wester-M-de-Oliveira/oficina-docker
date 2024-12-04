import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@ApiTags('Pessoa')
@Controller('pessoas')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista todas as pessoas cadastradas.',
  })
  findAll() {
    return this.pessoaService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Retorna uma pessoa pelo ID.',
  })
  @ApiResponse({
    status: 404,
    description: 'Pessoa não encontrada.',
  })
  findOne(@Param('id') id: number) {
    return this.pessoaService.findOne(id);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Cria uma nova pessoa.',
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos.',
  })
  create(@Body() createPessoaDto: CreatePessoaDto) {
    return this.pessoaService.create(createPessoaDto);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Atualiza os dados de uma pessoa existente.',
  })
  @ApiResponse({
    status: 404,
    description: 'Pessoa não encontrada.',
  })
  update(@Param('id') id: number, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Remove uma pessoa pelo ID.',
  })
  @ApiResponse({
    status: 404,
    description: 'Pessoa não encontrada.',
  })
  remove(@Param('id') id: number) {
    return this.pessoaService.remove(id);
  }
}
