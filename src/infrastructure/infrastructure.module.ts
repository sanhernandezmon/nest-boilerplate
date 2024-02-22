import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PostgresTypeOrmConfigService } from './database/services/postgres-type-orm-config.service';
import { TodosRepository } from './database/repositories/todos.repository';
import { TodosPort } from './ports/todos.port';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: PostgresTypeOrmConfigService,
    }),
  ],
  providers: [TodosRepository, TodosPort],
  exports: [TodosRepository, TodosPort],
})
export class InfrastructureModule {}
