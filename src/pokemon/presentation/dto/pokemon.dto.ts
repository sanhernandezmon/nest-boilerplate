export class PokemonDto {
  name: string;
  id: number;
  type: string;
  level: number;

  constructor(name: string, id: number, type: string, level: number) {
    this.name = name;
    this.id = id;
    this.type = type;
    this.level = level;
  }
}
