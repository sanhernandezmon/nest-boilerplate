import { Mapper } from './mapper';
import { Pokemon } from '../../pokemon/domain/pokemon';
import { Injectable } from '@nestjs/common';
import { PokemonEntity } from '../database/entities/pokemon.entity';

@Injectable()
export class PokemonMapper implements Mapper<PokemonEntity, Pokemon> {
  toDomain(entity: PokemonEntity): Pokemon {
    return { name: entity.name, id: entity.id, type: entity.type, level: entity.level } as Pokemon;
  }
}
