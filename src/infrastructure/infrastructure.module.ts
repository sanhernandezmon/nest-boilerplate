import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresTypeOrmConfigService } from './database/services/postgres-type-orm-config.service';
import { AnimalRepository } from './database/repositories/animal.repository';
import { AnimalPortImpl, animalPortToken } from './ports/animal.port';
import { AnimalMapper } from './mappers/animal.mapper.service';
import { PokemonRepository } from './database/repositories/pokemon.repository';
import { PokemonPortImpl, pokemonPortToken } from './ports/pokemon.port';
import { PokemonMapper } from './mappers/pokemon.mapper.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresTypeOrmConfigService,
    }),
  ],
  providers: [
    AnimalRepository,
    AnimalMapper,
    {
      provide: animalPortToken,
      useClass: AnimalPortImpl,
    },
    PokemonRepository,
    PokemonMapper,
    {
      provide: pokemonPortToken,
      useClass: PokemonPortImpl,
    },
  ],
  exports: [
    AnimalRepository,
    {
      provide: animalPortToken,
      useClass: AnimalPortImpl,
    },
    PokemonRepository,
    {
      provide: pokemonPortToken,
      useClass: PokemonPortImpl,
    },
  ],
})
export class InfrastructureModule {}
