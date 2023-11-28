import { Controller, Get, Post, Body } from '@nestjs/common';
import { EixosService } from './eixos.service';
import { CreateEixoDto } from './dto/create-eixo.dto';
import { EixoDto } from 'src/generated/nestjs-dto/eixo.dto';

@Controller('eixos')
export class EixosController {
  constructor(private readonly eixosService: EixosService) {}

  @Post()
  create(@Body() createEixoDto: CreateEixoDto) {
    return this.eixosService.create(createEixoDto);
  }

  @Get()
  findAll(): Promise<EixoDto[]> {
    return this.eixosService.findAll();
  }
}
