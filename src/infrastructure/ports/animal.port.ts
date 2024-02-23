import { Animal } from '../../animal/domain/animal';
import { Injectable } from '@nestjs/common';
import { AnimalRepository } from '../database/repositories/animal.repository';
import { AnimalMapper } from '../mappers/animal.mapper.service';

@Injectable()
export class AnimalPort {
  constructor(
    private animalRepository: AnimalRepository,
    private animalMapper: AnimalMapper
  ) {}

  async createAnimal(name: string): Promise<Animal> {
    const animalEntity = await this.animalRepository.getInstance().save({
      name,
    });
    return this.animalMapper.toDomain(animalEntity);
  }

  async getAnimal(animalId: number): Promise<Animal> {
    const animalEntity = await this.animalRepository.getInstance().findOne({ where: { id: animalId } });
    return this.animalMapper.toDomain(animalEntity);
  }

  async updateAnimal(animalId: number, name: string): Promise<Animal> {
    const animalEntity = await this.animalRepository.getInstance().save({ id: animalId, name });
    return this.animalMapper.toDomain(animalEntity);
  }
}
