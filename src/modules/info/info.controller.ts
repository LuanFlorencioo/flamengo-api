import { Controller, Get } from '@nestjs/common';
import { InfoData } from './info.interface';
import { InfoService } from './info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get('')
  getInfo(): InfoData {
    return this.infoService.getInfo();
  }
}
