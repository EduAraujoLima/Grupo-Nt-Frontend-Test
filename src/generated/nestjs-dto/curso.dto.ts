
import {ApiProperty} from '@nestjs/swagger'


export class CursoDto {
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
}
