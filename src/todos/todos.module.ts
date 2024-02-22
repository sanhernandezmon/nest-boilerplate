import { Module } from '@nestjs/common';
import { TodosService } from './application/services/todos.service';
import { TodosController } from './presentation/controllers/todos.controller';
import { TodosImpl } from './domain/todos';

@Module({
  controllers: [TodosController],
  providers: [TodosService, TodosImpl],
})
export class TodosModule {}
