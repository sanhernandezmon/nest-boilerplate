export abstract class PokemonStub {
  static params = {
    id: 1,
    create: {
      name: 'pikachu',
      level: 23,
      type: 'electric',
    },
    update: {
      id: 1,
      level: 24,
    },
  };
  static repository = {
    findOne: {
      name: 'pikachu',
      id: 1,
      type: 'electric',
      level: 23,
      createdAt: new Date('2022-05-26T09:02:51.438Z'),
      updatedAt: new Date('2022-05-26T09:02:51.438Z'),
    },
    instance: {
      name: 'pikachu',
      id: 1,
      level: 23,
      type: 'electric',
    },
  };

  static port = {
    createPokemon: this.repository.instance,
    getPokemon: this.repository.findOne,
    update: {
      name: 'pikachu',
      id: 1,
      type: 'electric',
      level: 24,
      createdAt: new Date('2022-05-26T09:02:51.438Z'),
      updatedAt: new Date('2022-05-26T09:02:51.438Z'),
    },
  };
  static domain = {
    instantiate: this.repository.findOne,
    getInstance: this.repository.instance,
    updated: {
      name: 'pikachu',
      id: 1,
      type: 'electric',
      level: 24,
      createdAt: new Date('2022-05-26T09:02:51.438Z'),
      updatedAt: new Date('2022-05-26T09:02:51.438Z'),
    },
  };
  static service = {
    ceratePokemon: this.repository.instance,
    getPokemon: this.repository.instance,
    update: this.domain.updated,
  };
  static controller = {
    ceratePokemon: this.repository.findOne,
    getPokemon: this.repository.findOne,
    update: this.domain.updated,
  };
  static mapper = {
    entity: this.repository.findOne,
    domain: this.domain.getInstance,
  };
}
