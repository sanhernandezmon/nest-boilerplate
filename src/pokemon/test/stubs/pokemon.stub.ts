export abstract class PokemonStub {
  static repository = {
    findOne: {
      name: 'pikachu',
      id: 1,
      type: 'electric',
      level: 23,
      createdAt: new Date('2022-05-26T09:02:51.438Z'),
      updatedAt: new Date('2022-05-26T09:02:51.438Z'),
    },
    findUpdated: {
      name: 'pikachu',
      id: 1,
      type: 'electric',
      level: 24,
      createdAt: new Date('2022-05-26T09:02:51.438Z'),
      updatedAt: new Date('2022-05-26T09:02:51.438Z'),
    },
    instance: {
      name: 'pikachu',
      id: 1,
      level: 23,
      type: 'electric',
    },
    dto: {
      name: 'pikachu',
      level: 23,
      type: 'electric',
    },
    updateDto: {
      id: 1,
      level: 24,
    },
  };
  static service = {
    findOne: this.repository.findOne,
  };
  static port = {
    getInstance: this.repository.instance,
  };
  static controller = {
    findOne: this.service.findOne,
    updateDto: {
      level: 24,
    },
  };
}
