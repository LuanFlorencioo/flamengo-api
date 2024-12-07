import { Test, TestingModule } from '@nestjs/testing';
import { SquadController } from '../squad.controller';
import {
  AllTeamData,
  ReturnCoachData,
  ReturnPlayersData,
  ReturnPresidencyData,
} from '../squad.interface';
import { SquadService } from '../squad.service';
import { mockCoachs, mockPlayers, mockPresidential } from './mock';

describe('SquadController', () => {
  let controller: SquadController;
  let service: SquadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SquadController],
      providers: [
        {
          provide: SquadService,
          useValue: {
            getAllTeamData: jest.fn(),
            getPlayers: jest.fn(),
            getCoachs: jest.fn(),
            getPresidency: jest.fn(),
            searchPlayer: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<SquadController>(SquadController);
    service = module.get<SquadService>(SquadService);
  });

  it('should return all team data from "GET:/squad/" route', () => {
    const mockData: AllTeamData = {
      players: mockPlayers,
      coach_committee: mockCoachs,
      presidential: mockPresidential,
    };
    jest.spyOn(service, 'getAllTeamData').mockReturnValue(mockData);

    const result = controller.getAllTeamData();
    expect(service.getAllTeamData).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it('should return players from "GET:/squad/players/" route', () => {
    const mockData: ReturnPlayersData = {
      players: mockPlayers,
      count: mockPlayers.length,
    };
    jest.spyOn(service, 'getPlayers').mockReturnValue(mockData);

    const result = controller.getPlayers();
    expect(service.getPlayers).toHaveBeenCalled();
    expect(service.searchPlayer).not.toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it('should return coachs from "GET:/squad/coachs/" route', () => {
    const mockData: ReturnCoachData = {
      coach_committee: mockCoachs,
      count: mockCoachs.length,
    };
    jest.spyOn(service, 'getCoachs').mockReturnValue(mockData);

    const result = controller.getCoachs();
    expect(service.getCoachs).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });

  it('should return presidency from "GET:/squad/presidency/" route', () => {
    const mockData: ReturnPresidencyData = {
      presidential: mockPresidential,
      count: mockPresidential.length,
    };
    jest.spyOn(service, 'getPresidency').mockReturnValue(mockData);

    const result = controller.getPresidency();
    expect(service.getPresidency).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });
});
