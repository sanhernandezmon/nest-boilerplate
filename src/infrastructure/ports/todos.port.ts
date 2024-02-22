import { Todo } from '../../todos/domain/todo';
import { TodosRepository } from '../database/repositories/todos.repository';
import { Injectable } from '@nestjs/common';
import { TodosEntity } from '../database/entities/todos.entity';
import { TodoMapper } from '../mappers/todo.mapper';

@Injectable()
export class TodosPort {
  constructor(
    private todosRepository: TodosRepository,
    private todoMapper: TodoMapper
  ) {}

  async createTodo(title: string, todosId?: number): Promise<Todo> {
    let todoEntity: TodosEntity;
    if (todosId) {
      todoEntity = await this.todosRepository.getInstance().findOne({ where: { id: todosId } });
      return this.todoMapper.toDomain(todoEntity);
    } else {
      todoEntity = await this.todosRepository.getInstance().save({
        title,
      });
      return this.todoMapper.toDomain(todoEntity);
    }
  }
}
