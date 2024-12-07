import { Injectable } from '@nestjs/common';
import {
  AllTeamData,
  PlayerData,
  QueriesSearchPlayer,
  ReturnCoachData,
  ReturnPlayersData,
  ReturnPresidencyData,
  SquadServices,
} from './squad.interface';
import { SquadRepository } from './squad.repository';

@Injectable()
export class SquadService implements SquadServices {
  constructor(private readonly squadRepository: SquadRepository) {}

  getAllTeamData(): AllTeamData {
    return this.squadRepository.getAllTeamData();
  }

  getPlayers(): ReturnPlayersData {
    const { players } = this.squadRepository.getAllTeamData();
    return { count: players.length, players };
  }

  getCoachs(): ReturnCoachData {
    const { coach_committee } = this.squadRepository.getAllTeamData();
    return { count: coach_committee.length, coach_committee };
  }

  getPresidency(): ReturnPresidencyData {
    const { presidential } = this.squadRepository.getAllTeamData();
    return { count: presidential.length, presidential };
  }

  searchPlayer(queries: QueriesSearchPlayer): ReturnPlayersData {
    const { nacionality, name, number, role } = queries;
    const { players } = this.squadRepository.getAllTeamData();
    let search: PlayerData[] = players;

    const filterPlayers = (filterBy: string, value: string) => {
      search = search.filter((player) => {
        const valueLowerCase = value.toLowerCase();
        return filterBy === 'name'
          ? player.name.toLowerCase().includes(valueLowerCase) ||
              player.nicknames
                .map((n) => n.toLowerCase())
                .some((n) => n.includes(valueLowerCase))
          : player[filterBy].includes(value.toLowerCase());
      });
    };

    Object.entries({ nacionality, name, number, role }).forEach((query) => {
      if (query[1]) {
        const filterBy: string = query[0];
        const value: string = query[1];
        filterPlayers(filterBy, value);
      }
    });

    return { count: search.length, players: search };
  }
}
