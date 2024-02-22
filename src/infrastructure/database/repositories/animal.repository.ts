import { Repository } from 'typeorm';
import { AnimalEntity } from '../entities/animal.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AnimalRepository {
  private instance: Repository<AnimalEntity>;

  constructor(private dataSource: DataSource) {
    this.instance = this.dataSource.getRepository(AnimalEntity);
  }
  public getInstance(): Repository<AnimalEntity> {
    return this.instance;
  }
  public async findCustom() {
    return this.instance.createQueryBuilder('animal').orderBy('animal.createdAt').getMany();
  }
}
