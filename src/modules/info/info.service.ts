import { Injectable } from '@nestjs/common';
import { InfoData, InfoServices } from './info.interface';
import { InfoRepository } from './info.repository';

@Injectable()
export class InfoService implements InfoServices {
  constructor(private readonly infoRepository: InfoRepository) {}

  getInfo(): InfoData {
    return this.infoRepository.getInfoData();
  }
}
