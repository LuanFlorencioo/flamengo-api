import { Test, TestingModule } from '@nestjs/testing';
import { InfoController } from '../info.controller';
import { InfoService } from '../info.service';
import { mockData } from './mock';

describe('InfoController', () => {
  let controller: InfoController;
  let service: InfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InfoController],
      providers: [
        {
          provide: InfoService,
          useValue: {
            getInfo: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<InfoController>(InfoController);
    service = module.get<InfoService>(InfoService);
  });

  it('should return all info from "GET:/info/" route', () => {
    jest.spyOn(service, 'getInfo').mockReturnValue(mockData);

    const result = controller['getInfo']();
    expect(service['getInfo']).toHaveBeenCalled();
    expect(result).toEqual(mockData);
  });
});
