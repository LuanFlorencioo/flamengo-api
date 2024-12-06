import { Module } from '@nestjs/common';
import { AchievementsModule } from './modules/achievements/achievements.module';
import { RootModule } from './modules/root/root.module';
import { SquadModule } from './modules/squad/squad.module';

@Module({
  imports: [RootModule, SquadModule, AchievementsModule],
})
export class AppModule {}
