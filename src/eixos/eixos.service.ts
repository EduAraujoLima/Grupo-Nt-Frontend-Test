import { Injectable } from '@nestjs/common';
import { CreateEixoDto } from './dto/create-eixo.dto';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class EixosService {
  constructor(private prisma: PrismaService) {}

  async create(createEixoDto: CreateEixoDto) {
    return await this.prisma.eixo.create({
      data: createEixoDto,
    });
  }

  async findAll() {
    return await this.prisma.eixo.findMany();
  }
}
