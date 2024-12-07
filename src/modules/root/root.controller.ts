import { Controller, Get } from '@nestjs/common';
import { ApiData } from './root.interface';
import { RootService } from './root.service';

@Controller('/')
export class RootController {
  constructor(private rootService: RootService) {}

  @Get()
  getRootData(): ApiData {
    return this.rootService.getRootData();
  }
}
