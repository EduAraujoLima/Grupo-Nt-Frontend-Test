
import {ApiProperty} from '@nestjs/swagger'
import {Curso} from './curso.entity'


export class Eixo {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
nome: string ;
@ApiProperty({
  type: () => Curso,
  isArray: true,
  required: false,
})
Curso?: Curso[] ;
}
