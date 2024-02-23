import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from '../../presentation/dto/create-animal.dto';
import { UpdateAnimalDto } from '../../presentation/dto/update-animal.dto';
import { AnimalImpl, ColorImpl } from '../../domain/animal';
import { AnimalDto } from '../../presentation/dto/animal.dto';

@Injectable()
export class AnimalService {
  constructor(private readonly animalImpl: AnimalImpl) {}

  async createAnimal(createAnimalDto: CreateAnimalDto): Promise<AnimalDto> {
    const animal = await this.animalImpl.instantiate(createAnimalDto.name);
    console.log('animal name:', animal.name);
    console.log('animal id', animal.id);
    console.log(animal.getNameId());
    const color = new ColorImpl('#00000');
    animal.addColor(color);
    console.log(animal.colors);
    return new AnimalDto(animal.name, animal.id);
  }
  async getAnimal(id: number) {
    const animal = await this.animalImpl.getInstance(id);
    return new AnimalDto(animal.name, animal.id);
  }

  async update(id: number, updateTodoDto: UpdateAnimalDto) {
    const animal = await this.animalImpl.update(id, updateTodoDto.name);
    return new AnimalDto(animal.name, animal.id);
  }
}
