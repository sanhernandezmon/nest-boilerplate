import { Repository } from 'typeorm';
import { Animal } from '../entities/animal.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class AnimalRepository {
  private instance: Repository<Animal>;

  constructor(private dataSource: DataSource) {
    this.instance = this.dataSource.getRepository(Animal);
  }
  public getInstance(): Repository<Animal> {
    return this.instance;
  }
  public async findCustom() {
    return this.instance.createQueryBuilder('animal').orderBy('animal.createdAt').getMany();
  }
}
