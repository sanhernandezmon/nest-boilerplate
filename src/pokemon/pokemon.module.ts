import { Module } from '@nestjs/common';
import { PokemonService } from './application/services/pokemon.service';
import { PokemonController } from './presentation/controllers/pokemon.controller';
import { PokemonImpl } from './domain/pokemon';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService, PokemonImpl],
})
export class PokemonModule {}
