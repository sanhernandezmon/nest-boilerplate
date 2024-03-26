import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from '../application/services/pokemon.service';
import { PokemonStub } from './stubs/pokemon.stub';
import { PokemonImpl } from '../domain/pokemon';
import { when } from 'jest-when';

/* Mocks */
type PokemonImplMock = Partial<Record<keyof PokemonImpl, jest.Mock>>;

const pokemonImplMock = (): PokemonImplMock => ({
  instantiate: jest.fn().mockReturnValue(PokemonStub.domain.instantiate),
  update: jest.fn().mockReturnValue(PokemonStub.service.update),
  getInstance: jest.fn().mockReturnValue(PokemonStub.domain.getInstance),
});

describe('PokemonService', () => {
  let service: PokemonService;
  let pokemonMocked: PokemonImplMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: PokemonImpl,
          useValue: pokemonImplMock(),
        },
      ],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
    pokemonMocked = module.get(PokemonImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getPokemon', () => {
    it('I can find pokemon by id', async () => {
      when(pokemonMocked.getInstance).calledWith(1).mockReturnValue(PokemonStub.service.getPokemon);
      const response = await service.getPokemon(1);
      expect(response).toEqual(PokemonStub.service.getPokemon);
    });
  });

  describe('createPokemon', () => {
    it('should create a new pokemon and return a PokemonDto', async () => {
      const createPokemonDto = PokemonStub.params.create;
      when(pokemonMocked.instantiate)
        .calledWith(createPokemonDto.name, createPokemonDto.type, createPokemonDto.level)
        .mockReturnValue(PokemonStub.service.ceratePokemon);
      const result = await service.createPokemon(createPokemonDto);
      expect(result).toEqual(PokemonStub.service.ceratePokemon);
    });
  });
  -describe('update', () => {
    it('should update a pokemon by id', async () => {
      const id = PokemonStub.params.id;
      const updateTodoDto = PokemonStub.params.update;
      const updatedPokemon = PokemonStub.service.update;
      when(pokemonMocked.update).calledWith(id, updateTodoDto.level).mockReturnValue(updatedPokemon);
      const result = await service.update(id, updateTodoDto);
      expect(result.level).toBe(updateTodoDto.level);
    });
  });
});
