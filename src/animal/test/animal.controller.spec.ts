import { Test, TestingModule } from '@nestjs/testing';
import { AnimalController } from '../presentation/controllers/animal.controller';
import { AnimalService } from '../application/services/animal.service';
import { when } from 'jest-when';

/* Stubs */
import { AnimalStub } from './stubs/animal.stub';

/* Mocks */
type AnimalServiceMock = Partial<Record<keyof AnimalService, jest.Mock>>;
const animalServiceMock = (): AnimalServiceMock => ({
  findOne: jest.fn(),
});
describe('AnimalController', () => {
  let controller: AnimalController;
  let animalServiceMocked: AnimalServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalController],
      providers: [
        {
          provide: AnimalService,
          useValue: animalServiceMock(),
        },
      ],
    }).compile();

    controller = module.get<AnimalController>(AnimalController);
    animalServiceMocked = module.get(AnimalService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('I can get one animal', async () => {
      when(animalServiceMocked.findOne).calledWith(1).mockReturnValue(AnimalStub.repository.findOne);
      const response = await controller.findOne('1');
      expect(response).toEqual(AnimalStub.controller.findOne);
    });
  });
});
