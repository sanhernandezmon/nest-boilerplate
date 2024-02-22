import { Todo } from '../../todos/domain/todo';
import { TodosRepository } from '../database/repositories/todos.repository';
import { Injectable } from '@nestjs/common';
import { TodosEntity } from '../database/entities/todos.entity';

@Injectable()
export class TodosPort {
  constructor(private todosRepository: TodosRepository) {}

  async createTodo(title: string, todosId?: number): Promise<Todo> {
    let todoEntity: TodosEntity;
    if (todosId) {
      todoEntity = await this.todosRepository.getInstance().findOne({ where: { id: todosId } });
      return { title: todoEntity.title, id: todoEntity.id } as Todo;
    } else {
      todoEntity = await this.todosRepository.getInstance().save({
        title,
      });
      return { title: todoEntity.title, id: todoEntity.id } as Todo;
    }
  }
}
