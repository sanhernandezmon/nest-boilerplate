import { PokemonMapper } from '../../mappers/pokemon.mapper.service'; // Update import path
import { PokemonRepository } from '../../database/repositories/pokemon.repository'; // Update import path
import { PokemonPortImpl } from '../pokemon.port'; // Update import path
import { PokemonStub } from '../../../pokemon/test/stubs/pokemon.stub'; // Update import path
import { Test, TestingModule } from '@nestjs/testing';

type PokemonRepositoryMock = Partial<Record<keyof PokemonRepository, jest.Mock>>;
type PokemonMapperMock = Partial<Record<keyof PokemonMapper, jest.Mock>>;

const pokemonRepositoryMock = (): PokemonRepositoryMock => ({
  getInstance: jest.fn().mockReturnValue({
    save: jest.fn(),
    findOne: jest.fn(),
  }),
  findCustom: jest.fn().mockReturnValue(PokemonStub.repository.findOne),
});

const pokemonMapperMock = (): PokemonMapperMock => ({
  toDomain: jest.fn().mockReturnValue(PokemonStub.repository.instance),
});

describe('PokemonPortImpl', () => {
  let port: PokemonPortImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonPortImpl,
        {
          provide: PokemonRepository,
          useValue: pokemonRepositoryMock(),
        },
        {
          provide: PokemonMapper,
          useValue: pokemonMapperMock(),
        },
      ],
    }).compile();
    port = module.get<PokemonPortImpl>(PokemonPortImpl);
  });

  it('should be defined', () => {
    expect(port).toBeDefined();
  });
  describe('createPokemon', () => {
    it('should create a new Pokemon', async () => {
      const toCreate = PokemonStub.repository.dto;
      const result = await port.createPokemon(toCreate.name, toCreate.level, toCreate.type);
      expect(result).toBeDefined();
      expect(result).toEqual(PokemonStub.repository.instance);
    });
  });
  describe('getPokemon', () => {
    it('should get an existing Pokemon', async () => {
      const pokemonId = 1;
      const result = await port.getPokemon(pokemonId);
      expect(result).toBeDefined();
      expect(result).toEqual(PokemonStub.repository.instance);
    });
  });
});
