import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from '../application/services/pokemon.service';
import { PokemonStub } from './stubs/pokemon.stub';
import { PokemonImpl } from '../domain/pokemon';
import { PokemonPortImpl } from '../../infrastructure/ports/pokemon.port';
import { when } from 'jest-when';

/* Mocks */
type PokemonImplMock = Partial<Record<keyof PokemonImpl, jest.Mock>>;
type PokemonPortMock = Partial<Record<keyof PokemonPortImpl, jest.Mock>>;

const pokemonImplMock = (): PokemonImplMock => ({
  instantiate: jest.fn(),
  getInstance: jest.fn().mockReturnValue(PokemonStub.repository.findOne),
});

const pokemonPortMock = (): PokemonPortMock => ({
  getPokemon: jest.fn().mockReturnValue(PokemonStub.repository.findOne),
});

describe('PokemonService', () => {
  let service: PokemonService;
  let pokemonMocked: PokemonImplMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonService,
        {
          provide: PokemonPortImpl,
          useValue: pokemonPortMock(),
        },
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

  describe('findOne', () => {
    it('I can find pokemon by id', async () => {
      when(pokemonMocked.getInstance).calledWith(1).mockReturnValue(PokemonStub.port.getInstance);
      const response = await service.getPokemon(1);
      expect(response).toEqual(PokemonStub.port.getInstance);
    });
  });
});
