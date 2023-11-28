
import {ApiProperty} from '@nestjs/swagger'
import {Categoria} from './categoria.entity'
import {Eixo} from './eixo.entity'


export class Curso {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
nome: string ;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
dataCriacao: Date ;
@ApiProperty()
descricao: string ;
@ApiProperty({
  nullable: true,
})
capa: string  | null;
@ApiProperty({
  type: () => Categoria,
  required: false,
})
categoria?: Categoria ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
categoriaId: number ;
@ApiProperty({
  type: () => Eixo,
  required: false,
})
eixo?: Eixo ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
eixoId: number ;
}
