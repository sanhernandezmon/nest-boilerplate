import { Inject, Injectable } from '@nestjs/common';
import { AnimalPort } from '../../infrastructure/ports/animal.port';

interface Color {
  hex: string;
}

export class ColorImpl implements Color {
  hex: string;

  constructor(hex: string) {
    this.hex = hex;
  }
}

export interface Animal {
  name: string;
  id: number;
  colors: Color[];
}
@Injectable()
export class AnimalImpl implements Animal {
  private _name: string;
  private _id: number;
  private _colors: Color[];
  @Inject() private readonly animalPort: AnimalPort;

  async instantiate(name: string) {
    this.name = name;
    const animal = await this.animalPort.createAnimal(this.name);
    this.id = animal.id;
    this.name = animal.name;
    this.colors = [];
    return this;
  }
  async getInstance(id: number) {
    const animal = await this.animalPort.getAnimal(id);
    this.id = animal.id;
    this.name = animal.name;
    this.colors = [];
    return this;
  }
  async update(id: number, name: string) {
    this.name = name;
    const animal = await this.animalPort.updateAnimal(id, this.name);
    this.id = animal.id;
    this.name = animal.name;
    this.colors = [];
    return this;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 10) {
      throw new Error('The name must be less than 10 characters');
    }
    this._name = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get colors(): Color[] {
    return this._colors;
  }

  set colors(value: Color[]) {
    this._colors = value;
  }

  addColor(color: Color) {
    this.colors.push(color);
  }

  getNameId() {
    return 'name:' + this.name + ' id:' + this.id;
  }
}
