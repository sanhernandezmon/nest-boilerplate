import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalDto {
  @ApiProperty({
    description: 'name of animal',
    type: 'string',
    example: ' Turtle',
  })
  name: string;
}
