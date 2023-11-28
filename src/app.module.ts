import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CursosModule } from './cursos/cursos.module';
import { CategoriasModule } from './categorias/categorias.module';
import { EixosModule } from './eixos/eixos.module';

@Module({
  imports: [CursosModule, EixosModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
