import { Module } from '@nestjs/common';
import { EixosService } from './eixos.service';
import { EixosController } from './eixos.controller';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  controllers: [EixosController],
  providers: [EixosService, PrismaService],
})
export class EixosModule {}
