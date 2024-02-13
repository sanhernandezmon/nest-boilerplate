import { Repository } from 'typeorm';
import { Todos } from '../../../todos/entities/todos.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class TodosRepository {
  private instance: Repository<Todos>;

  constructor(private dataSource: DataSource) {
    this.instance = this.dataSource.getRepository(Todos);
  }
  public getInstance(): Repository<Todos> {
    return this.instance;
  }
  public async findCustom() {
    return this.instance.createQueryBuilder('todo').orderBy('todo.createdAt').getMany();
  }
}
