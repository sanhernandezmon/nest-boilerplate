import { PokemonPortImpl } from '../pokemon.port'; // Update import path
import { PokemonRepository } from '../../database/repositories/pokemon.repository';
import { PokemonMapper } from '../../mappers/pokemon.mapper.service';
import { PokemonStub } from '../../../pokemon/test/stubs/pokemon.stub';
import { Test, TestingModule } from '@nestjs/testing';

describe('PokemonPortImpl', () => {
  let port: PokemonPortImpl;
  let pokemonRepositoryMock: PokemonRepository;
  let pokemonMapperMock: PokemonMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonPortImpl,
        {
          provide: PokemonRepository,
          useValue: {
            getInstance: jest.fn().mockReturnValue({
              save: jest.fn(),
              findOne: jest.fn(),
            }),
          },
        },
        {
          provide: PokemonMapper,
          useValue: {
            toDomain: jest.fn(),
          },
        },
      ],
    }).compile();

    port = module.get<PokemonPortImpl>(PokemonPortImpl);
    pokemonRepositoryMock = module.get<PokemonRepository>(PokemonRepository);
    pokemonMapperMock = module.get<PokemonMapper>(PokemonMapper);
  });

  describe('getPokemon', () => {
    it('should get an existing Pokemon', async () => {
      // Arrange
      const pokemonId = 1;
      const mockPokemonEntity = PokemonStub.repository.instance;
      pokemonRepositoryMock.getInstance().findOne = jest.fn().mockResolvedValue(mockPokemonEntity);
      pokemonMapperMock.toDomain = jest.fn().mockReturnValue(mockPokemonEntity);

      // Act
      const result = await port.getPokemon(pokemonId);

      // Assert
      expect(result).toEqual(mockPokemonEntity);
      expect(pokemonRepositoryMock.getInstance().findOne).toHaveBeenCalledWith({ where: { id: pokemonId } });
      expect(pokemonMapperMock.toDomain).toHaveBeenCalledWith(mockPokemonEntity);
    });
  });

  describe('createPokemon', () => {
    it('should create a new Pokemon', async () => {
      // Arrange
      const toCreate = PokemonStub.repository.dto;
      const mockPokemonEntity = PokemonStub.repository.instance;
      pokemonRepositoryMock.getInstance().save = jest.fn().mockResolvedValue(mockPokemonEntity);
      pokemonMapperMock.toDomain = jest.fn().mockReturnValue(mockPokemonEntity);

      // Act
      const result = await port.createPokemon(toCreate.name, toCreate.level, toCreate.type);

      // Assert
      expect(result).toEqual(mockPokemonEntity);
      expect(pokemonRepositoryMock.getInstance().save).toHaveBeenCalledWith({
        name: toCreate.name,
        level: toCreate.level,
        type: toCreate.type,
      });
      expect(pokemonMapperMock.toDomain).toHaveBeenCalledWith(mockPokemonEntity);
    });
  });

  describe('updatePokemon', () => {
    it('should update the level of an existing Pokemon', async () => {
      // Arrange
      const updateDto = PokemonStub.repository.updateDto;
      const mockPokemonEntity = PokemonStub.repository.findUpdated;
      pokemonRepositoryMock.getInstance().save = jest.fn().mockResolvedValue(mockPokemonEntity);
      pokemonMapperMock.toDomain = jest.fn().mockReturnValue(mockPokemonEntity);

      // Act
      const result = await port.updatePokemon(updateDto.id, updateDto.level);

      // Assert
      expect(result).toEqual(mockPokemonEntity);
      expect(pokemonRepositoryMock.getInstance().save).toHaveBeenCalledWith({
        id: updateDto.id,
        level: updateDto.level,
      });
      expect(pokemonMapperMock.toDomain).toHaveBeenCalledWith(mockPokemonEntity);
    });
  });
});
