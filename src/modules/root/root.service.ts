import { Injectable } from '@nestjs/common';
import { ApiData, RootServices as Services } from './root.interface';
import { RootRepository } from './root.repository';

@Injectable()
export class RootService implements Services {
  constructor(private readonly rootRepository: RootRepository) {}

  getRootData(): ApiData {
    return this.rootRepository.getApiData();
  }
}
