
import {ApiProperty} from '@nestjs/swagger'




export class ConnectEixoDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
