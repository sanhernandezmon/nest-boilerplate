import { Mapper } from './mapper';
import { Todos } from '../../todos/domain/todos';
import { TodosEntity } from '../database/entities/todos.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosMapper implements Mapper<TodosEntity, Todos> {
  toDomain(entity: TodosEntity): Todos {
    return { title: entity.title, id: entity.id } as Todos;
  }
}
