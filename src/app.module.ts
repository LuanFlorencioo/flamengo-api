import { Module } from '@nestjs/common';
import { RootModule } from './modules/root/root.module';
import { SquadModule } from './modules/squad/squad.module';

@Module({
  imports: [RootModule, SquadModule],
})
export class AppModule {}
