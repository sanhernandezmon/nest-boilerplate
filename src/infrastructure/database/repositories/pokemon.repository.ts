import { Repository } from 'typeorm';
import { PokemonEntity } from '../entities/pokemon.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class PokemonRepository {
  private instance: Repository<PokemonEntity>;

  constructor(private dataSource: DataSource) {
    this.instance = this.dataSource.getRepository(PokemonEntity);
  }
  public getInstance(): Repository<PokemonEntity> {
    return this.instance;
  }
  public async findCustom() {
    return this.instance.createQueryBuilder('pokemon').orderBy('pokemon.createdAt').getMany();
  }
}
