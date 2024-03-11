import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresTypeOrmConfigService } from './database/services/postgres-type-orm-config.service';
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
    PokemonRepository,
    PokemonMapper,
    {
      provide: pokemonPortToken,
      useClass: PokemonPortImpl,
    },
  ],
  exports: [
    PokemonRepository,
    {
      provide: pokemonPortToken,
      useClass: PokemonPortImpl,
    },
  ],
})
export class InfrastructureModule {}
