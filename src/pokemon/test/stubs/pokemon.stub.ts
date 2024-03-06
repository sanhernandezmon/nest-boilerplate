export abstract class PokemonStub {
  static repository = {
    findOne: {
      name: 'pikachu',
      id: 1,
      type: 'electric',
      level: 23,
      createdAt: '2022-05-26T09:02:51.438Z',
      updatedAt: '2022-05-26T09:02:51.438Z',
    },
    instance: {
      name: 'pikachu',
      id: 1,
      level: 23,
      type: 'electric',
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
  };
}
