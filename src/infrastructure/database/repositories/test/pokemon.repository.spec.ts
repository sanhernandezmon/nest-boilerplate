import { PokemonRepository } from '../pokemon.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';

/* Mocks */
const mockRepository = {
  createQueryBuilder: jest.fn().mockReturnThis(),
  orderBy: jest.fn().mockReturnThis(),
  getMany: jest.fn().mockResolvedValue([]),
};

describe('PokemonRepository', () => {
  let repository: PokemonRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PokemonRepository,
        {
          provide: DataSource,
          useValue: {
            getRepository: jest.fn(() => mockRepository as any),
          },
        },
      ],
    }).compile();
    repository = module.get<PokemonRepository>(PokemonRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should return the repository instance', () => {
    const instance = repository.getInstance();
    expect(instance).toBe(mockRepository as any);
  });

  it('should call findCustom and return empty array', async () => {
    const result = await repository.findCustom();
    expect(mockRepository.createQueryBuilder).toHaveBeenCalledWith('pokemon');
    expect(mockRepository.orderBy).toHaveBeenCalledWith('pokemon.createdAt');
    expect(mockRepository.getMany).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
