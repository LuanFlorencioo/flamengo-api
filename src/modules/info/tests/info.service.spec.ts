import { Test, TestingModule } from '@nestjs/testing';
import { InfoRepository } from '../info.repository';
import { InfoService } from '../info.service';
import { mockData } from './mock';

describe('InfoService', () => {
  let service: InfoService;
  let repository: InfoRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        InfoService,
        {
          provide: InfoRepository,
          useValue: {
            getInfoData: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<InfoService>(InfoService);
    repository = module.get<InfoRepository>(InfoRepository);
  });

  it('should return info data from "getInfo" method', () => {
    jest.spyOn(repository, 'getInfoData').mockReturnValue(mockData);

    expect(service).toHaveProperty('getInfo');
  });
});
