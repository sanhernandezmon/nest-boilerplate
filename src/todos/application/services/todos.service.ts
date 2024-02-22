import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from '../../presentation/dto/create-todo.dto';
import { UpdateTodoDto } from '../../presentation/dto/update-todo.dto';
import { TodosRepository } from '../../../infrastructure/database/repositories/todos.repository';
import { Todo, TodoImpl } from '../../domain/todo';

@Injectable()
export class TodosService {
  constructor(
    private readonly todosRepository: TodosRepository,
    private readonly todoImpl: TodoImpl
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todoInstance = await this.todoImpl.create(createTodoDto.title);
    console.log(todoInstance.title);
    console.log(todoInstance.id);
    return todoInstance;
  }

  async findAll() {
    return await this.todosRepository.findCustom();
  }

  async findOne(id: number) {
    return await this.todosRepository.getInstance().findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return `This action updates a #${updateTodoDto.title} todo`;
  }

  remove(id: number) {
    return this.todosRepository.getInstance().delete({ id });
  }
}
