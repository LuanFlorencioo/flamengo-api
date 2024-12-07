import { Controller, Get, Query } from '@nestjs/common';
import { AllTeamData } from './squad.interface';
import { SquadService } from './squad.service';

@Controller('squad')
export class SquadController {
  constructor(private readonly squadService: SquadService) {}

  @Get('')
  getAllTeamData(): AllTeamData {
    return this.squadService.getAllTeamData();
  }

  @Get('players')
  getPlayers(
    @Query('name') name?: string,
    @Query('role') role?: string,
    @Query('number') number?: string,
    @Query('nacionality') nacionality?: string,
  ) {
    const queries = { name, role, number, nacionality };
    const hasSomeQuery = Object.entries(queries).some((query) => query[1]);

    return hasSomeQuery
      ? this.squadService.searchPlayer(queries)
      : this.squadService.getPlayers();
  }

  @Get('coachs')
  getCoachs() {
    return this.squadService.getCoachs();
  }

  @Get('presidency')
  getPresidency() {
    return this.squadService.getPresidency();
  }
}
