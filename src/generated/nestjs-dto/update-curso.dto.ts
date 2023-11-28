
import {ApiProperty} from '@nestjs/swagger'




export class UpdateCursoDto {
  @ApiProperty({
  required: false,
})
nome?: string ;
@ApiProperty({
  required: false,
})
descricao?: string ;
@ApiProperty({
  required: false,
  nullable: true,
})
capa?: string  | null;
}
