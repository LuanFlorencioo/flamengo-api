import { AchievementsRepository } from '../achievements.repository';

describe('AchievementsRepository', () => {
  let repository: AchievementsRepository;

  beforeEach(() => {
    repository = new AchievementsRepository();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should have getAchievementsData method', () => {
    expect(repository).toHaveProperty('getAchievementsData');
  });

  it('should return achievements data', () => {
    const result = repository.getAchievementsData();
    expect(result).toHaveProperty('international');
    expect(result).toHaveProperty('continental');
    expect(result).toHaveProperty('national');
    expect(result).toHaveProperty('state');

    expect(Array.isArray(result['international'])).toBeTruthy();
    expect(Array.isArray(result['continental'])).toBeTruthy();
    expect(Array.isArray(result['national'])).toBeTruthy();
    expect(Array.isArray(result['state'])).toBeTruthy();
  });
});
