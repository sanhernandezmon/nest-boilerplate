import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresTypeOrmConfigService } from './database/services/postgres-type-orm-config.service';
import { AnimalRepository } from './database/repositories/animal.repository';
import { AnimalPort } from './ports/animal.port';
import { AnimalMapper } from './mappers/animal.mapper.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresTypeOrmConfigService,
    }),
  ],
  providers: [AnimalRepository, AnimalPort, AnimalMapper],
  exports: [AnimalRepository, AnimalPort],
})
export class InfrastructureModule {}
