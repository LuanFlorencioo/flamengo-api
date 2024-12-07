import { Module } from '@nestjs/common';
import { AchievementsModule } from './modules/achievements/achievements.module';
import { InfoModule } from './modules/info/info.module';
import { RootModule } from './modules/root/root.module';
import { SquadModule } from './modules/squad/squad.module';

@Module({
  imports: [RootModule, SquadModule, AchievementsModule, InfoModule],
})
export class AppModule {}
