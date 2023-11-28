
import {ApiProperty} from '@nestjs/swagger'




export class ConnectCursoDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
}
