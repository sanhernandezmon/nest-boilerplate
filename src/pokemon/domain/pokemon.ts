import { Inject, Injectable } from '@nestjs/common';
import { PokemonPort, pokemonPortToken } from '../../infrastructure/ports/pokemon.port';

export interface Pokemon {
  name: string;
  id: number;
  type: string;
  level: number;
}
@Injectable()
export class PokemonImpl implements Pokemon {
  private _name: string;
  private _id: number;
  private _type: string;
  private _level: number;
  @Inject(pokemonPortToken) private readonly pokemonPort: PokemonPort;

  async instantiate(name: string, type: string, level: number) {
    this.name = name;
    this.type = type;
    this.level = level;
    const pokemon = await this.pokemonPort.createPokemon(this.name, this.level, this.type);
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.level = pokemon.level;
    this.type = pokemon.type;
    return this;
  }
  async getInstance(id: number) {
    const pokemon = await this.pokemonPort.getPokemon(id);
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.type = pokemon.type;
    this.level = pokemon.level;
    return this;
  }
  async update(id: number, level: number) {
    this.level = level;
    const pokemon = await this.pokemonPort.updatePokemon(id, this.level);
    this.id = pokemon.id;
    this.name = pokemon.name;
    this.level = pokemon.level;
    this.type = pokemon.type;
    return this;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  set level(value: number) {
    this._level = value;
  }
  get level(): number {
    return this._level;
  }
}
