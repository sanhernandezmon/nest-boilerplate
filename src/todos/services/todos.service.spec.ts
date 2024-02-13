import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { TodosRepository } from '../../infrastructure/database/repositories/todos.repository';
import { TodosStub } from '../stubs/todos.stub';

/* Mocks */
type TodosRepositoryMock = Partial<Record<keyof TodosRepository, jest.Mock>>;

const todosRepositoryMock = (): TodosRepositoryMock => ({
  getInstance: jest.fn().mockImplementation(() => {
    return {
      findOne: jest.fn().mockReturnValue(TodosStub.repository.findOne),
    };
  }),
  findCustom: jest.fn(),
});

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: TodosRepository,
          useValue: todosRepositoryMock(),
        },
      ],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('I can todo by id', async () => {
      const response = await service.findOne(1);
      expect(response).toEqual(TodosStub.service.findOne);
    });
  });
});
