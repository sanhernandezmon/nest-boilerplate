import { Repository } from 'typeorm';
import { TodosEntity } from '../entities/todos.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TodosRepository {
  private instance: Repository<TodosEntity>;

  constructor(private dataSource: DataSource) {
    this.instance = this.dataSource.getRepository(TodosEntity);
  }
  public getInstance(): Repository<TodosEntity> {
    return this.instance;
  }
  public async findCustom() {
    return this.instance.createQueryBuilder('todo').orderBy('todo.createdAt').getMany();
  }
}
