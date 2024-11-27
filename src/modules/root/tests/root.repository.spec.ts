import { Test, TestingModule } from '@nestjs/testing';
import { RootRepository } from '../root.repository';

describe('RootRepository', () => {
  let repository: RootRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RootRepository],
    }).compile();

    repository = module.get<RootRepository>(RootRepository);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should have getApiData method', () => {
    expect(repository).toHaveProperty('getApiData');
  });

  it('should have url_documentation property', () => {
    const data = repository.getApiData();
    expect(data).toHaveProperty('url_documentation');

    const { url_documentation } = data;
    expect(url_documentation).toBeDefined();
  });

  it('should have api property', () => {
    const data = repository.getApiData();
    expect(data).toHaveProperty('api');

    const { api } = data;
    expect(api).toBeDefined();
  });

  it('should have author property', () => {
    const data = repository.getApiData();
    expect(data).toHaveProperty('author');

    const { author } = data;
    expect(author).toBeDefined();
  });

  it('should have url_all_routes property', () => {
    const data = repository.getApiData();
    expect(data).toHaveProperty('url_all_routes');

    const { url_all_routes } = data;
    expect(url_all_routes).toBeDefined();
  });
});
