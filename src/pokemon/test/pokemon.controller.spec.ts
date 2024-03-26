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
  createPokemon: jest.fn(),
  update: jest.fn(),
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
  describe('should get a Pokemon', () => {
    it('I can get one pokemon correctly', async () => {
      when(pokemonServiceMocked.getPokemon).calledWith(1).mockReturnValue(PokemonStub.repository.findOne);
      const response = await controller.getPokemon('1');
      expect(response).toEqual(PokemonStub.controller.getPokemon);
    });
  });
  //TODO agregar caso con falla I cannot get an unexistant pokemon

  describe('should create a Pokemon', () => {
    it('should create a new Pokemon with correct params', async () => {
      const createPokemonDto = PokemonStub.params.create;
      when(pokemonServiceMocked.createPokemon)
        .calledWith(createPokemonDto)
        .mockReturnValue(PokemonStub.controller.ceratePokemon);
      const response = await controller.createPokemon(createPokemonDto);
      expect(response).toEqual(PokemonStub.controller.ceratePokemon);
    });
  });

  describe('should update a pokemon', () => {
    it('should update an existing Pokemon', async () => {
      const updatePokemonDto = PokemonStub.params.update;
      const id = 1;
      when(pokemonServiceMocked.update).calledWith(id, updatePokemonDto).mockReturnValue(PokemonStub.controller.update);
      const response = await controller.update(1, updatePokemonDto);
      expect(response).toEqual(PokemonStub.controller.update);
    });
  });
});
