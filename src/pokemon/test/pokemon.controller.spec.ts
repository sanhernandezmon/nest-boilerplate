import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from '../presentation/controllers/pokemon.controller';
import { PokemonService } from '../application/services/pokemon.service';
import { when } from 'jest-when';

/* Stubs */
import { PokemonStub } from './stubs/pokemon.stub';

/* Mocks */
type PokemonServiceMock = Partial<Record<keyof PokemonService, jest.Mock>>;
const pokemonServiceMock = (): PokemonServiceMock => ({
  getPokemon: jest.fn(),
});
describe('PokemonController', () => {
  let controller: PokemonController;
  let pokemonServiceMocked: PokemonServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: pokemonServiceMock(),
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
    pokemonServiceMocked = module.get(PokemonService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('findAll', () => {
    it('I can get one pokemon', async () => {
      when(pokemonServiceMocked.getPokemon).calledWith(1).mockReturnValue(PokemonStub.repository.findOne);
      const response = await controller.getPokemon('1');
      expect(response).toEqual(PokemonStub.controller.findOne);
    });
  });
});
