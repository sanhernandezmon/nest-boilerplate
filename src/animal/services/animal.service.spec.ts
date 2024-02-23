import { Test, TestingModule } from '@nestjs/testing';
import { AnimalService } from './animal.service';
import { AnimalRepository } from '../../infrastructure/database/repositories/animal.repository';
import { AnimalStub } from '../stubs/animal.stub';

/* Mocks */
type AnimalRepositoryMock = Partial<Record<keyof AnimalRepository, jest.Mock>>;

const animalRepositoryMock = (): AnimalRepositoryMock => ({
  getInstance: jest.fn().mockImplementation(() => {
    return {
      findOne: jest.fn().mockReturnValue(AnimalStub.repository.findOne),
    };
  }),
  findCustom: jest.fn(),
});

describe('TodosService', () => {
  let service: AnimalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimalService,
        {
          provide: AnimalRepository,
          useValue: animalRepositoryMock(),
        },
      ],
    }).compile();

    service = module.get<AnimalService>(AnimalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('I can animal by id', async () => {
      const response = await service.findOne(1);
      expect(response).toEqual(AnimalStub.service.findOne);
    });
  });
});
