import { PokemonPort, pokemonPortToken } from '../../infrastructure/ports/pokemon.port';
import { PokemonImpl } from '../domain/pokemon';
import { Test, TestingModule } from '@nestjs/testing';
import { PokemonStub } from './stubs/pokemon.stub';

type PokemonPortMock = Partial<Record<keyof PokemonPort, jest.Mock>>;

const pokemonPortMock = (): PokemonPortMock => ({
  getPokemon: jest.fn().mockReturnValue(PokemonStub.domain.instantiate),
  createPokemon: jest.fn().mockReturnValue(PokemonStub.domain.getInstance),
  updatePokemon: jest.fn().mockReturnValue(PokemonStub.domain.updated),
});

describe('PokemonImpl', () => {
  let pokemonPortMocked: PokemonPortMock;
  let pokemonImpl: PokemonImpl;

  beforeEach(async () => {
    pokemonPortMocked = pokemonPortMock();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonImpl,
        {
          provide: pokemonPortToken,
          useValue: pokemonPortMocked,
        },
      ],
    }).compile();
    pokemonImpl = module.get<PokemonImpl>(PokemonImpl);
  });

  it('should be defined', () => {
    expect(pokemonImpl).toBeDefined();
  });

  describe('instantiate', () => {
    it('should instantiate a new Pokemon', async () => {
      const instantiateDto = PokemonStub.params.create;
      // Act
      await pokemonImpl.instantiate(instantiateDto.name, instantiateDto.type, instantiateDto.level);

      // Assert
      expect(pokemonImpl.id).toEqual(PokemonStub.domain.getInstance.id);
      expect(pokemonImpl.name).toEqual(PokemonStub.domain.getInstance.name);
      expect(pokemonImpl.type).toEqual(PokemonStub.domain.getInstance.type);
      expect(pokemonImpl.level).toEqual(PokemonStub.domain.getInstance.level);
    });
  });

  describe('getInstance', () => {
    // Test case for getInstance method
    it('should get an existing Pokemon instance', async () => {
      const pokemonId = 1;

      // Act
      await pokemonImpl.getInstance(pokemonId);

      // Assert
      expect(pokemonImpl.id).toEqual(PokemonStub.domain.getInstance.id);
      expect(pokemonImpl.name).toEqual(PokemonStub.domain.getInstance.name);
      expect(pokemonImpl.type).toEqual(PokemonStub.domain.getInstance.type);
      expect(pokemonImpl.level).toEqual(PokemonStub.domain.getInstance.level);
    });
  });

  describe('update', () => {
    // Test case for update method
    it('should update an existing Pokemon instance', async () => {
      const updateDto = PokemonStub.params.update;
      const pokemonId = updateDto.id;

      // Act
      await pokemonImpl.update(pokemonId, updateDto.level);

      // Assert
      expect(pokemonImpl.id).toEqual(PokemonStub.domain.updated.id);
      expect(pokemonImpl.name).toEqual(PokemonStub.domain.updated.name);
      expect(pokemonImpl.type).toEqual(PokemonStub.domain.updated.type);
      expect(pokemonImpl.level).toEqual(PokemonStub.domain.updated.level);
    });
  });
});
