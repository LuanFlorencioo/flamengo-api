import { Module } from '@nestjs/common';
import { SquadController } from './squad.controller';
import { SquadRepository } from './squad.repository';
import { SquadService } from './squad.service';

@Module({
  controllers: [SquadController],
  providers: [SquadService, SquadRepository],
})
export class SquadModule {}
