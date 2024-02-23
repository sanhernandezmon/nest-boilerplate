import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AnimalService } from '../../application/services/animal.service';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { UpdateAnimalDto } from '../dto/update-animal.dto';
import { AnimalDto } from '../dto/animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  async postAnimal(@Body() createTodoDto: CreateAnimalDto): Promise<AnimalDto> {
    return await this.animalService.createAnimal(createTodoDto);
  }
  @Get(':id')
  async getAnimal(@Param('id') id: string) {
    return await this.animalService.getAnimal(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateAnimalDto) {
    return this.animalService.update(+id, updateTodoDto);
  }
}
