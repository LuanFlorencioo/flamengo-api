import { SquadRepository } from '../squad.repository';

describe('SquadRepository', () => {
  let repository: SquadRepository;

  beforeEach(() => {
    repository = new SquadRepository();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should have getAllTeamData method', () => {
    expect(repository).toHaveProperty('getAllTeamData');
  });

  it('should return all team data', () => {
    const result = repository.getAllTeamData();
    expect(result).toHaveProperty('players');
    expect(result).toHaveProperty('coach_committee');
    expect(result).toHaveProperty('presidential');
    expect(Array.isArray(result.players)).toBeTruthy();
    expect(Array.isArray(result.coach_committee)).toBeTruthy();
    expect(Array.isArray(result.presidential)).toBeTruthy();
  });
});
