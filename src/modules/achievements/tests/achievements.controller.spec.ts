import { Test, TestingModule } from '@nestjs/testing';
import { AchievementsController } from '../achievements.controller';
import { AchievementsService } from '../achievements.service';
import { mockData } from './mock';

describe('AchievementsController', () => {
  let controller: AchievementsController;
  let service: AchievementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AchievementsController],
      providers: [
        {
          provide: AchievementsService,
          useValue: {
            getAchievements: jest.fn(),
            getSpecificAchievements: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<AchievementsController>(AchievementsController);
    service = module.get<AchievementsService>(AchievementsService);
  });

  it('should return all achievements from "GET:/achievements/" route', () => {
    jest.spyOn(service, 'getAchievements').mockReturnValue(mockData);

    const result = controller['getAllAchievements']();
    expect(service['getAchievements']).toHaveBeenCalled();
    expect(service['getSpecificAchievements']).not.toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it('should return international achievements from "GET:/achievements/international/" route', () => {
    jest.spyOn(service, 'getSpecificAchievements').mockReturnValue({
      achievements: mockData.international,
      count: mockData.international.length,
    });

    const result = controller['getInternationalAchievements']();
    expect(service['getAchievements']).not.toHaveBeenCalled();
    expect(service['getSpecificAchievements']).toHaveBeenCalled();
    expect(result).toEqual({
      achievements: mockData.international,
      count: mockData.international.length,
    });
  });

  it('should return continental achievements from "GET:/achievements/continental/" route', () => {
    jest.spyOn(service, 'getSpecificAchievements').mockReturnValue({
      achievements: mockData.continental,
      count: mockData.continental.length,
    });

    const result = controller['getContinentalAchievements']();
    expect(service['getAchievements']).not.toHaveBeenCalled();
    expect(service['getSpecificAchievements']).toHaveBeenCalled();
    expect(result).toEqual({
      achievements: mockData.continental,
      count: mockData.continental.length,
    });
  });

  it('should return national achievements from "GET:/achievements/national/" route', () => {
    jest.spyOn(service, 'getSpecificAchievements').mockReturnValue({
      achievements: mockData.national,
      count: mockData.national.length,
    });

    const result = controller['getNationalAchievements']();
    expect(service['getAchievements']).not.toHaveBeenCalled();
    expect(service['getSpecificAchievements']).toHaveBeenCalled();
    expect(result).toEqual({
      achievements: mockData.national,
      count: mockData.national.length,
    });
  });

  it('should return state achievements from "GET:/achievements/state/" route', () => {
    jest.spyOn(service, 'getSpecificAchievements').mockReturnValue({
      achievements: mockData.state,
      count: mockData.state.length,
    });

    const result = controller['getStateAchievements']();
    expect(service['getAchievements']).not.toHaveBeenCalled();
    expect(service['getSpecificAchievements']).toHaveBeenCalled();
    expect(result).toEqual({
      achievements: mockData.state,
      count: mockData.state.length,
    });
  });
});
