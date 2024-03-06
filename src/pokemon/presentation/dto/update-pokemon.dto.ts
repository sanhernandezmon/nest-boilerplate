import { ApiProperty } from '@nestjs/swagger';

export class UpdatePokemonDto {
  @ApiProperty({
    description: 'level of pokemon',
    type: 'number',
    example: '21',
  })
  level: number;
}
