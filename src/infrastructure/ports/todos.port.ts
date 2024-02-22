import { Todos } from '../../todos/domain/todos';
import { TodosRepository } from '../database/repositories/todos.repository';
import { Injectable } from '@nestjs/common';
import { TodosEntity } from '../database/entities/todos.entity';
import { TodosMapper } from '../mappers/todos.mapper.service';

@Injectable()
export class TodosPort {
  constructor(
    private todosRepository: TodosRepository,
    private todosMapper: TodosMapper
  ) {}

  async createTodo(title: string, todosId?: number): Promise<Todos> {
    let todoEntity: TodosEntity;
    if (todosId) {
      todoEntity = await this.todosRepository.getInstance().findOne({ where: { id: todosId } });
      return this.todosMapper.toDomain(todoEntity);
    } else {
      todoEntity = await this.todosRepository.getInstance().save({
        title,
      });
      return this.todosMapper.toDomain(todoEntity);
    }
  }
}
