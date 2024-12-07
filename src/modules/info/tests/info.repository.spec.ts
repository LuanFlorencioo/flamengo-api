import { InfoRepository } from '../info.repository';

describe('InfoRepository', () => {
  let repository: InfoRepository;

  beforeEach(() => {
    repository = new InfoRepository();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should have getInfoData method', () => {
    expect(repository).toHaveProperty('getInfoData');
  });

  it('should return info data', () => {
    const result = repository['getInfoData']();
    expect(result).toHaveProperty('name');
    expect(result).toHaveProperty('acronym');
    expect(result).toHaveProperty('created_at');
    expect(result).toHaveProperty('founded_at');
    expect(result).toHaveProperty('mascots');
    expect(result).toHaveProperty('colors');
    expect(result).toHaveProperty('fans');
    expect(result).toHaveProperty('stadium');

    expect(result['name']).toBeDefined();
    expect(result['acronym']).toBeDefined();
    expect(result['created_at']).toBeDefined();
    expect(result['founded_at']).toBeDefined();
    expect(result['mascots']).toBeDefined();
    expect(result['colors']).toBeDefined();
    expect(result['fans']).toBeDefined();
    expect(result['stadium']).toBeDefined();
  });
});
