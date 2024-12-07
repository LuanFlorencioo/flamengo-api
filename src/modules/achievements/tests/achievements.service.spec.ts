import { Test, TestingModule } from '@nestjs/testing';
import { AchievementsRepository } from '../achievements.repository';
import { AchievementsService } from '../achievements.service';
import { mockData } from './mock';

describe('AchievementsService', () => {
  let service: AchievementsService;
  let repository: AchievementsRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AchievementsService,
        {
          provide: AchievementsRepository,
          useValue: {
            getAchievementsData: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AchievementsService>(AchievementsService);
    repository = module.get<AchievementsRepository>(AchievementsRepository);
  });

  it('should return achievements data from "getAchievements" method', () => {
    jest.spyOn(repository, 'getAchievementsData').mockReturnValue(mockData);
    expect(service).toHaveProperty('getAchievements');

    const result = service['getAchievements']();
    expect(repository.getAchievementsData).toHaveBeenCalled();
    expect(result).toHaveProperty('international');
    expect(result).toHaveProperty('continental');
    expect(result).toHaveProperty('national');
    expect(result).toHaveProperty('state');
    expect(result).toEqual(mockData);
  });

  it('should return international achievements from "getSpecificAchievements" method', () => {
    jest.spyOn(repository, 'getAchievementsData').mockReturnValue(mockData);

    const methodName = 'getSpecificAchievements';
    const result = service[methodName]('international');
    expect(service).toHaveProperty(methodName);
    expect(result).toBeDefined();
    expect(repository.getAchievementsData).toHaveBeenCalled();
    expect(result).toHaveProperty('count');
    expect(result).toHaveProperty('achievements');
    expect(result['count']).toEqual(
      result['achievements'].map(({ count }) => count).reduce((p, c) => p + c),
    );
    expect(
      result['achievements'].every((achievement) =>
        mockData.international.includes(achievement),
      ),
    ).toBeTruthy();
  });

  it('should return continental achievements from "getSpecificAchievements" method', () => {
    jest.spyOn(repository, 'getAchievementsData').mockReturnValue(mockData);

    const methodName = 'getSpecificAchievements';
    const result = service[methodName]('continental');
    expect(service).toHaveProperty(methodName);
    expect(result).toBeDefined();
    expect(repository.getAchievementsData).toHaveBeenCalled();
    expect(result).toHaveProperty('count');
    expect(result).toHaveProperty('achievements');
    expect(result['count']).toEqual(
      result['achievements'].map(({ count }) => count).reduce((p, c) => p + c),
    );
    expect(
      result['achievements'].every((achievement) =>
        mockData.continental.includes(achievement),
      ),
    ).toBeTruthy();
  });

  it('should return national achievements from "getSpecificAchievements" method', () => {
    jest.spyOn(repository, 'getAchievementsData').mockReturnValue(mockData);

    const methodName = 'getSpecificAchievements';
    const result = service[methodName]('national');
    expect(service).toHaveProperty(methodName);
    expect(result).toBeDefined();
    expect(repository.getAchievementsData).toHaveBeenCalled();
    expect(result).toHaveProperty('count');
    expect(result).toHaveProperty('achievements');
    expect(result['count']).toEqual(
      result['achievements'].map(({ count }) => count).reduce((p, c) => p + c),
    );
    expect(
      result['achievements'].every((achievement) =>
        mockData.national.includes(achievement),
      ),
    ).toBeTruthy();
  });

  it('should return state achievements from "getSpecificAchievements" method', () => {
    jest.spyOn(repository, 'getAchievementsData').mockReturnValue(mockData);

    const methodName = 'getSpecificAchievements';
    const result = service[methodName]('state');
    expect(service).toHaveProperty(methodName);
    expect(result).toBeDefined();
    expect(repository.getAchievementsData).toHaveBeenCalled();
    expect(result).toHaveProperty('count');
    expect(result).toHaveProperty('achievements');
    expect(result['count']).toEqual(
      result['achievements'].map(({ count }) => count).reduce((p, c) => p + c),
    );
    expect(
      result['achievements'].every((achievement) =>
        mockData.state.includes(achievement),
      ),
    ).toBeTruthy();
  });
});
