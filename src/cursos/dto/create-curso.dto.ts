import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class CreateCursoDto {
  @IsNotEmpty({ message: 'O nome do curso é obrigatório' })
  @IsString({ message: 'O nome do curso deve ser uma string' })
  @MinLength(3, { message: 'O nome do curso deve ter no mínimo 3 caracteres' })
  @ApiProperty()
  nome: string;

  @IsNotEmpty({ message: 'A descrição do curso é obrigatória' })
  @IsString({ message: 'A descrição do curso deve ser uma string' })
  @MinLength(10, {
    message: 'A descrição do curso deve ter no mínimo 10 caracteres',
  })
  @ApiProperty()
  descricao: string;

  @IsNotEmpty({ message: 'O eixo do curso é obrigatório' })
  @IsNumber({}, { message: 'O eixo do curso deve ser um número' })
  @ApiProperty()
  eixoId: number;

  @IsNotEmpty({ message: 'A categoria do curso é obrigatória' })
  @IsNumber({}, { message: 'A categoria do curso deve ser um número' })
  @ApiProperty()
  categoriaId: number;
}
