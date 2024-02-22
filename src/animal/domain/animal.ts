import { Inject, Injectable } from '@nestjs/common';
import { AnimalPort } from '../../infrastructure/ports/animal.port';

export interface Animal {
  name: string;
  id: number;
}
@Injectable()
export class AnimalImpl implements Animal {
  private _name: string;
  private _id: number;
  @Inject() private readonly animalPort: AnimalPort;
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 3) {
      throw new Error('error title should 3 lengt');
    }
    this._name = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  async create(name: string) {
    this.name = name;
    return await this.animalPort.createAnimal(this.name);
  }
}
