
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCategoriaDto {
  @ApiProperty({
  required: false,
})
nome?: string ;
}
