
import {ApiProperty} from '@nestjs/swagger'


export class CategoriaDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
nome: string ;
}
