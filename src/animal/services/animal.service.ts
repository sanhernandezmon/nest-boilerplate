import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { UpdateAnimalDto } from '../dto/update-animal.dto';
import { AnimalRepository } from '../../infrastructure/database/repositories/animal.repository';

@Injectable()
export class AnimalService {
  constructor(private readonly animalRepository: AnimalRepository) {}

  create(createAnimalDto: CreateAnimalDto) {
    return this.animalRepository.getInstance().save(createAnimalDto);
  }

  async findAll() {
    return await this.animalRepository.findCustom();
  }

  async findOne(id: number) {
    return await this.animalRepository.getInstance().findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${updateAnimalDto.name} todo`;
  }

  remove(id: number) {
    return this.animalRepository.getInstance().delete({ id });
  }
}
