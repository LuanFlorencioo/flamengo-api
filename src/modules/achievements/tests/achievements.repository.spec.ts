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

    const { international, continental, national, state } = result;
    expect(Array.isArray(international)).toBeTruthy();
    expect(Array.isArray(continental)).toBeTruthy();
    expect(Array.isArray(national)).toBeTruthy();
    expect(Array.isArray(state)).toBeTruthy();
  });
});
