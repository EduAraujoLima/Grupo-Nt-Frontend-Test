
import {ApiProperty} from '@nestjs/swagger'


export class EixoDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
nome: string ;
}
