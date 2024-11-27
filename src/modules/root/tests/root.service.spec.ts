import { Test, TestingModule } from '@nestjs/testing';
import { RootRepository } from '../root.repository';
import { RootService } from '../root.service';

describe('RootService', () => {
  let service: RootService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RootService, RootRepository],
    }).compile();

    service = module.get<RootService>(RootService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have getRootData method', () => {
    expect(service).toHaveProperty('getRootData');
    expect(service.getRootData()).toBeDefined();
  });
});
