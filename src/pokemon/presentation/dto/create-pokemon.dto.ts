import { ApiProperty } from '@nestjs/swagger';

export class CreatePokemonDto {
  @ApiProperty({
    description: 'name of pokemon',
    type: 'string',
    example: 'Charizard',
  })
  name: string;

  @ApiProperty({
    description: 'level of pokemon',
    type: 'number',
    example: '21',
  })
  level: number;

  @ApiProperty({
    description: 'type of pokemon',
    type: 'string',
    example: ' Fire',
  })
  type: string;
}
