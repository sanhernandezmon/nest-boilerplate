import { Inject, Injectable } from '@nestjs/common';
import { TodosPort } from '../../infrastructure/ports/todos.port';

export interface Todos {
  title: string;
  id: number;
}
@Injectable()
export class TodosImpl implements Todos {
  private _title: string;
  private _id: number;
  @Inject() private readonly todosPort: TodosPort;
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (value.length > 3) {
      throw new Error('error title should 3 lengt');
    }
    this._title = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  async create(title: string) {
    this.title = title;
    return await this.todosPort.createTodo(title);
  }
}
