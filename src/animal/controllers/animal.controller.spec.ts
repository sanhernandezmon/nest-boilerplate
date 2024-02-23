import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from './animal.controller';
import { AnimalService } from '../services/animal.service';
import { when } from 'jest-when';

/* Stubs */
import { AnimalStub } from '../stubs/animal.stub';

/* Mocks */
type TodosServiceMock = Partial<Record<keyof AnimalService, jest.Mock>>;
const todosServiceMock = (): TodosServiceMock => ({
  findOne: jest.fn(),
});
describe('AnimalController', () => {
  let controller: AnimalController;
  let todosServiceMocked: TodosServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
      providers: [
        {
          provide: AnimalService,
          useValue: todosServiceMock(),
        },
      ],
    }).compile();

    controller = module.get<AnimalController>(AnimalController);
    todosServiceMocked = module.get(AnimalService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('I can get one todo', async () => {
      when(todosServiceMocked.findOne).calledWith(1).mockReturnValue(AnimalStub.repository.findOne);
      const response = await controller.findOne('1');
      expect(response).toEqual(AnimalStub.controller.findOne);
    });
  });
});
