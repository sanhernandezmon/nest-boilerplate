import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from '../../presentation/dto/create-pokemon.dto';
import { UpdatePokemonDto } from '../../presentation/dto/update-pokemon.dto';
import { PokemonImpl } from '../../domain/pokemon';
import { PokemonDto } from '../../presentation/dto/pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonImpl: PokemonImpl) {}

  async createPokemon(createPokemonDto: CreatePokemonDto): Promise<PokemonDto> {
    const pokemon = await this.pokemonImpl.instantiate(
      createPokemonDto.name,
      createPokemonDto.type,
      createPokemonDto.level
    );
    return new PokemonDto(pokemon.name, pokemon.id, pokemon.type, pokemon.level);
  }
  async getPokemon(id: number) {
    const pokemon = await this.pokemonImpl.getInstance(id);
    return new PokemonDto(pokemon.name, pokemon.id, pokemon.type, pokemon.level);
  }

  async update(id: number, updateTodoDto: UpdatePokemonDto) {
    const pokemon = await this.pokemonImpl.update(id, updateTodoDto.level);
    return new PokemonDto(pokemon.name, pokemon.id, pokemon.type, pokemon.level);
  }
}
