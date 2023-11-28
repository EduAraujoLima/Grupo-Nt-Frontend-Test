import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from 'src/shared/services/prisma.service';
import { CursoDto } from 'src/generated/nestjs-dto/curso.dto';

@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) {}

  async create(createCursoDto: CreateCursoDto) {
    const dataCriacao = new Date().toISOString();

    const categoriaExists = await this.prisma.categoria.findUnique({
      where: {
        id: createCursoDto.categoriaId,
      },
    });

    if (!categoriaExists) {
      throw new HttpException('Categoria não existe', HttpStatus.BAD_REQUEST);
    }

    const eixoExists = await this.prisma.eixo.findUnique({
      where: {
        id: createCursoDto.eixoId,
      },
    });

    if (!eixoExists) {
      throw new HttpException('Eixo não existe', HttpStatus.BAD_REQUEST);
    }

    return await this.prisma.curso.create({
      data: {
        ...createCursoDto,
        dataCriacao,
      },
    });
  }

  async findAll(): Promise<CursoDto[]> {
    return await this.prisma.curso.findMany();
  }

  async findOne(id: number): Promise<CursoDto> {
    return await this.prisma.curso.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    return await this.prisma.curso.update({
      where: {
        id,
      },
      data: updateCursoDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.curso.delete({
      where: {
        id,
      },
    });
  }
}
