import { Mapper } from './mapper';
import { Animal } from '../../animal/domain/animal';
import { Injectable } from '@nestjs/common';
import { AnimalEntity } from '../database/entities/animal.entity';

@Injectable()
export class AnimalMapper implements Mapper<AnimalEntity, Animal> {
  toDomain(entity: AnimalEntity): Animal {
    return { name: entity.name, id: entity.id } as Animal;
  }
}
