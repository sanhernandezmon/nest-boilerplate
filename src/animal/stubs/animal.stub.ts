export abstract class AnimalStub {
  static repository = {
    findOne: {
      name: 'turtle',
      id: 1,
      createdAt: '2022-05-26T09:02:51.438Z',
      updatedAt: '2022-05-26T09:02:51.438Z',
    },
  };
  static service = {
    findOne: this.repository.findOne,
  };
  static controller = {
    findOne: this.service.findOne,
  };
}
