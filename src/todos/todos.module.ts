import { Module } from '@nestjs/common';
import { TodosService } from './application/services/todos.service';
import { TodosController } from './presentation/controllers/todos.controller';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
