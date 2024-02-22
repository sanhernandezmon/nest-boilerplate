import { Mapper } from './mapper';
import { Todo } from '../../todos/domain/todo';
import { TodosEntity } from '../database/entities/todos.entity';
import { Injectable } from '@nestjs/common';
import { raw } from 'express';

@Injectable()
export class TodoMapper implements Mapper<TodosEntity, Todo> {
  toDomain(entity: TodosEntity): Todo {
    return { title: entity.title, id: entity.id } as Todo;
  }
}
