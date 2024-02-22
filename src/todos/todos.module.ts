import { Module } from '@nestjs/common';
import { TodosService } from './application/services/todos.service';
import { TodosController } from './presentation/controllers/todos.controller';
import { TodoImpl } from './domain/todo';

@Module({
  controllers: [TodosController],
  providers: [TodosService, TodoImpl],
})
export class TodosModule {}
