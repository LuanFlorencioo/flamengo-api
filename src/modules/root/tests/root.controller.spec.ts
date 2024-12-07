import { Test, TestingModule } from '@nestjs/testing';
import { RootController } from '../root.controller';
import { RootRepository } from '../root.repository';
import { RootService } from '../root.service';

describe('RootController', () => {
  let controller: RootController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RootController],
      providers: [RootService, RootRepository],
    }).compile();

    controller = module.get<RootController>(RootController);
  });

  describe('GET:/', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should have getRootData method', () => {
      expect(controller).toHaveProperty('getRootData');
      expect(controller.getRootData()).toBeDefined();
    });
  });
});
