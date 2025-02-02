import { Module } from '@nestjs/common';
import { AnimalService } from './services/animal.service';
import { AnimalController } from './controllers/animal.controller';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule {}
