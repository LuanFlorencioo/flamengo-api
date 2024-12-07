import { Test, TestingModule } from '@nestjs/testing';
import { AllTeamData } from '../squad.interface';
import { SquadRepository } from '../squad.repository';
import { SquadService } from '../squad.service';
import { mockCoachs, mockPlayers, mockPresidential } from './mock';

describe('SquadService', () => {
  let service: SquadService;
  let repository: SquadRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SquadService,
        {
          provide: SquadRepository,
          useValue: {
            getAllTeamData: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<SquadService>(SquadService);
    repository = module.get<SquadRepository>(SquadRepository);
  });

  it('should return all team data from "getAllTeamData" method', () => {
    const mockData: AllTeamData = {
      players: mockPlayers,
      coach_committee: mockCoachs,
      presidential: mockPresidential,
    };
    jest.spyOn(repository, 'getAllTeamData').mockReturnValue(mockData);

    const result = service.getAllTeamData();
    expect(repository.getAllTeamData).toHaveBeenCalled();
    expect(result).toHaveProperty('players');
    expect(result).toHaveProperty('coach_committee');
    expect(result).toHaveProperty('presidential');
    expect(result).toEqual(mockData);
  });

  it('should return all players from "getPlayers" method', () => {
    const mockData: AllTeamData = {
      players: mockPlayers,
      coach_committee: [],
      presidential: [],
    };
    jest.spyOn(repository, 'getAllTeamData').mockReturnValue(mockData);

    const result = service.getPlayers();
    expect(repository.getAllTeamData).toHaveBeenCalled();
    expect(result).toHaveProperty('players');
    expect(result).toHaveProperty('count');
    expect(result.players).toEqual(mockPlayers);
    expect(result.count).toEqual(mockPlayers.length);
  });

  it('should return all coachs from "getCoachs" method', () => {
    const mockData: AllTeamData = {
      players: [],
      coach_committee: mockCoachs,
      presidential: [],
    };
    jest.spyOn(repository, 'getAllTeamData').mockReturnValue(mockData);

    const result = service.getCoachs();
    expect(repository.getAllTeamData).toHaveBeenCalled();
    expect(result).toHaveProperty('coach_committee');
    expect(result).toHaveProperty('count');
    expect(result.coach_committee).toEqual(mockCoachs);
    expect(result.count).toEqual(mockCoachs.length);
  });

  it('should return presidential from "getPresidency" method', () => {
    const mockData: AllTeamData = {
      players: [],
      coach_committee: [],
      presidential: mockPresidential,
    };
    jest.spyOn(repository, 'getAllTeamData').mockReturnValue(mockData);

    const result = service.getPresidency();
    expect(repository.getAllTeamData).toHaveBeenCalled();
    expect(result).toHaveProperty('presidential');
    expect(result).toHaveProperty('count');
    expect(result.presidential).toEqual(mockData.presidential);
  });

  it('should return some players from "searchPlayers" method', () => {
    const mockData: AllTeamData = {
      players: mockPlayers,
      coach_committee: [],
      presidential: [],
    };
    jest.spyOn(repository, 'getAllTeamData').mockReturnValue(mockData);

    const playerRoleToFilter = 'midfielder';
    const mockPlayersFiltered = mockPlayers.filter(({ role }) =>
      role.includes(playerRoleToFilter),
    );
    const result = service.searchPlayer({ role: playerRoleToFilter });
    expect(repository.getAllTeamData).toHaveBeenCalled();
    expect(result).toHaveProperty('players');
    expect(result).toHaveProperty('count');
    expect(result.players).toEqual(mockPlayersFiltered);
    expect(result.count).toEqual(mockPlayersFiltered.length);
  });
});
