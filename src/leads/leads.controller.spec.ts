import { Test, TestingModule } from '@nestjs/testing';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';

describe('AppController', () => {
  let appController: LeadsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LeadsController],
      providers: [LeadsService],
    }).compile();

    appController = app.get<LeadsController>(LeadsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
