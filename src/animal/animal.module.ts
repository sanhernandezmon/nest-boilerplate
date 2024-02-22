import { Module } from '@nestjs/common';
import { AnimalService } from './application/services/animal.service';
import { AnimalController } from './presentation/controllers/animal.controller';
import { AnimalImpl } from './domain/animal';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService, AnimalImpl],
})
export class AnimalModule {}
