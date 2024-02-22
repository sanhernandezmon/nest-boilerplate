import { Inject, Injectable } from '@nestjs/common';
import { TodosPort } from '../../infrastructure/ports/todos.port';

export interface Todo {
  title: string;
}
@Injectable()
export class TodoImpl implements Todo {
  private _title: string;
  @Inject() private readonly todoPort: TodosPort;
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    if (value.length > 3) {
      throw new Error('error title should 3 lengt');
    }
    this._title = value;
  }

  async create(title: string) {
    this.title = title;
    return await this.todoPort.createTodo(title);
  }
}
