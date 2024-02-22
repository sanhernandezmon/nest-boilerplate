import { Animal } from '../../todos/domain/animal';
import { Injectable } from '@nestjs/common';
import { AnimalRepository } from '../database/repositories/animal.repository';
import { AnimalEntity } from '../database/entities/animal.entity';
import { AnimalMapper } from '../mappers/animal.mapper.service';

@Injectable()
export class AnimalPort {
  constructor(
    private animalRepository: AnimalRepository,
    private animalMapper: AnimalMapper
  ) {}

  async createAnimal(name: string, animalId?: number): Promise<Animal> {
    let animalEntity: AnimalEntity;
    if (animalId) {
      animalEntity = await this.animalRepository.getInstance().findOne({ where: { id: animalId } });
      return this.animalMapper.toDomain(animalEntity);
    } else {
      animalEntity = await this.animalRepository.getInstance().save({
        name,
      });
      return this.animalMapper.toDomain(animalEntity);
    }
  }
}
