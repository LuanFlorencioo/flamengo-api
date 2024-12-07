import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootRepository } from './root.repository';
import { RootService } from './root.service';

@Module({
  controllers: [RootController],
  providers: [RootService, RootRepository],
})
export class RootModule {}
