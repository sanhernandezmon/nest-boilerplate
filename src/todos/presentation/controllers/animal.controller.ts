import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AnimalService } from '../../application/services/animal.service';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { UpdateAnimalDto } from '../dto/update-animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private readonly animalService: AnimalService) {}

  @Post()
  async postAnimal(@Body() createTodoDto: CreateAnimalDto) {
    return await this.animalService.createAnimal(createTodoDto);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.animalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateAnimalDto) {
    return this.animalService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
