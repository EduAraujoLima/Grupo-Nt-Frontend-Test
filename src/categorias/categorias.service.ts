import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria-dto.interface';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CategoriaDto } from 'src/generated/nestjs-dto/categoria.dto';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto) {
    return await this.prisma.categoria.create({
      data: createCategoriaDto,
    });
  }

  async findAll(): Promise<CategoriaDto[]> {
    return await this.prisma.categoria.findMany();
  }
}
