import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  controllers: [CursosController],
  providers: [CursosService, PrismaService],
})
export class CursosModule {}
