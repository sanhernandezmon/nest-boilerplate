import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresTypeOrmConfigService } from './database/services/postgres-type-orm-config.service';
import { AnimalRepository } from './database/repositories/animal.repository';
import { AnimalPortImpl, animalPortToken } from './ports/animal.port';
import { AnimalMapper } from './mappers/animal.mapper.service';

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
  ],
  exports: [
    AnimalRepository,
    {
      provide: animalPortToken,
      useClass: AnimalPortImpl,
    },
  ],
})
export class InfrastructureModule {}
