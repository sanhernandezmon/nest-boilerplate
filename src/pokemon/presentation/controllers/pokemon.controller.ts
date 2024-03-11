import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { PokemonService } from '../../application/services/pokemon.service';
import { CreatePokemonDto } from '../dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../dto/update-pokemon.dto';
import { PokemonDto } from '../dto/pokemon.dto';

@Controller('pokemon')
@ApiTags('Pokemon') // Add a tag to group related endpoints in Swagger
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'The Pokemon has been successfully created.' })
  @ApiBody({ type: CreatePokemonDto, description: 'Data required to create a new Pokemon.' })
  async createPokemon(@Body() createPokemonDto: CreatePokemonDto): Promise<PokemonDto> {
    return await this.pokemonService.createPokemon(createPokemonDto);
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Returns the Pokemon with the specified ID.' })
  @ApiParam({ name: 'id', description: 'ID of the Pokemon to retrieve.' })
  async getPokemon(@Param('id') id: string) {
    return await this.pokemonService.getPokemon(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'The Pokemon has been successfully updated.' })
  @ApiParam({ name: 'id', description: 'ID of the Pokemon to update.' })
  @ApiBody({ type: UpdatePokemonDto, description: 'Data required to update the Pokemon.' })
  async update(@Param('id') id: number, @Body() updateTodoDto: UpdatePokemonDto) {
    return this.pokemonService.update(+id, updateTodoDto);
  }
}
