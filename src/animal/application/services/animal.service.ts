import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from '../../presentation/dto/create-animal.dto';
import { UpdateAnimalDto } from '../../presentation/dto/update-animal.dto';
import { AnimalImpl } from '../../domain/animal';
import { AnimalRepository } from '../../../infrastructure/database/repositories/animal.repository';
import { AnimalDto } from '../../presentation/dto/animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    private readonly animalRepository: AnimalRepository,
    private readonly animalImpl: AnimalImpl
  ) {}

  async createAnimal(createAnimalDto: CreateAnimalDto): Promise<AnimalDto> {
    const animal = await this.animalImpl.create(createAnimalDto.name);
    console.log('animal name:', animal.name);
    console.log('animal id', animal.id);

    return new AnimalDto(animal.name, animal.id);
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

  update(id: number, updateTodoDto: UpdateAnimalDto) {
    return `This action updates a #${updateTodoDto.name} todo`;
  }

  remove(id: number) {
    return this.animalRepository.getInstance().delete({ id });
  }
}
