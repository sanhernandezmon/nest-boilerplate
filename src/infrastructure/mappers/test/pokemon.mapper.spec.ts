import { Test, TestingModule } from '@nestjs/testing';
import { PokemonMapper } from '../pokemon.mapper.service';
import { PokemonStub } from '../../../pokemon/test/stubs/pokemon.stub'; // Update import path

describe('PokemonMapper', () => {
  let mapper: PokemonMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonMapper],
    }).compile();
    mapper = module.get<PokemonMapper>(PokemonMapper);
  });

  it('should be defined', () => {
    expect(mapper).toBeDefined();
  });

  it('should map PokemonEntity to Pokemon', () => {
    const pokemonEntity = PokemonStub.mapper.entity;
    const result = mapper.toDomain(pokemonEntity);
    expect(result).toBeDefined();
    expect(result).toEqual(PokemonStub.mapper.domain);
  });
});
