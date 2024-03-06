import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '../database/repositories/pokemon.repository';
import { Pokemon } from 'src/pokemon/domain/pokemon';
import { PokemonMapper } from '../mappers/pokemon.mapper.service';

export const pokemonPortToken = 'pokemonPortToken';

export interface PokemonPort {
  createPokemon: (name: string, level: number, type: string) => Promise<Pokemon>;
  getPokemon: (animalId: number) => Promise<Pokemon>;
  updatePokemon: (animalId: number, level: number) => Promise<Pokemon>;
}

@Injectable()
export class PokemonPortImpl implements PokemonPort {
  constructor(
    private pokemonRepository: PokemonRepository,
    private pokemonMapper: PokemonMapper
  ) {}

  async createPokemon(name: string, level: number, type: string): Promise<Pokemon> {
    const pokemonEntity = await this.pokemonRepository.getInstance().save({
      name,
      type,
      level,
    });
    return this.pokemonMapper.toDomain(pokemonEntity);
  }

  async getPokemon(animalId: number): Promise<Pokemon> {
    const animalEntity = await this.pokemonRepository.getInstance().findOne({ where: { id: animalId } });
    return this.pokemonMapper.toDomain(animalEntity);
  }

  async updatePokemon(pokemonId: number, level: number): Promise<Pokemon> {
    const pokemonEntity = await this.pokemonRepository.getInstance().save({ id: pokemonId, level });
    return this.pokemonMapper.toDomain(pokemonEntity);
  }
}
