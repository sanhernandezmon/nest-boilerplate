import { Test, TestingModule } from '@nestjs/testing';
import { AnimalService } from '../application/services/animal.service';
import { AnimalStub } from './stubs/animal.stub';
import { AnimalImpl } from '../domain/animal';
import { AnimalPort } from '../../infrastructure/ports/animal.port';
import { when } from 'jest-when';

/* Mocks */
type AnimalImplMock = Partial<Record<keyof AnimalImpl, jest.Mock>>;
type AnimalPortMock = Partial<Record<keyof AnimalPort, jest.Mock>>;

const animalImplMock = (): AnimalImplMock => ({
  instantiate: jest.fn(),
  getInstance: jest.fn().mockReturnValue(AnimalStub.repository.findOne),
});

const animalPortMock = (): AnimalPortMock => ({
  getAnimal: jest.fn().mockReturnValue(AnimalStub.repository.findOne),
});

describe('AnimalService', () => {
  let service: AnimalService;
  let animalMocked: AnimalImplMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AnimalService,
        {
          provide: AnimalPort,
          useValue: animalPortMock(),
        },
        {
          provide: AnimalImpl,
          useValue: animalImplMock(),
        },
      ],
    }).compile();

    service = module.get<AnimalService>(AnimalService);
    animalMocked = module.get(AnimalImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findOne', () => {
    it('I can animal by id', async () => {
      when(animalMocked.getInstance).calledWith(1).mockReturnValue(AnimalStub.port.getInstance);
      const response = await service.getAnimal(1);
      expect(response).toEqual(AnimalStub.port.getInstance);
    });
  });
});
