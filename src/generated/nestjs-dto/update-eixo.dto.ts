
import {ApiProperty} from '@nestjs/swagger'




export class UpdateEixoDto {
  @ApiProperty({
  required: false,
})
nome?: string ;
}
