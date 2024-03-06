import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from '../presentation/controllers/pokemon.controller';
import { PokemonService } from '../application/services/pokemon.service';
import { when } from 'jest-when';

/* Stubs */
import { PokemonStub } from './stubs/pokemon.stub';

/* Mocks */
type AnimalServiceMock = Partial<Record<keyof PokemonService, jest.Mock>>;
const animalServiceMock = (): AnimalServiceMock => ({
  getPokemon: jest.fn(),
});
describe('AnimalController', () => {
  let controller: PokemonController;
  let animalServiceMocked: AnimalServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: animalServiceMock(),
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    animalServiceMocked = module.get(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('I can get one pokemon', async () => {
      when(animalServiceMocked.getPokemon).calledWith(1).mockReturnValue(PokemonStub.repository.findOne);
      const response = await controller.getPokemon('1');
      expect(response).toEqual(PokemonStub.controller.findOne);
    });
  });
});
