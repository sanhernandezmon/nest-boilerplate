import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AnimalService } from '../services/animal.service';
import { CreateAnimalDto } from '../dto/create-animal.dto';
import { UpdateAnimalDto } from '../dto/update-animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private readonly todosService: AnimalService) {}

  @Post()
  async create(@Body() createTodoDto: CreateAnimalDto) {
    return await this.todosService.create(createTodoDto);
  }

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.todosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateAnimalDto) {
    return this.todosService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todosService.remove(+id);
  }
}
