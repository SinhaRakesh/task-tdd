import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  describe('getSum', () => {
    it('should return 0 : sum of numbers in "" ', () => {
      expect(appController.getSum('')).toBe(0);
    });
    it('should return 1 : sum of numbers in "1" ', () => {
      expect(appController.getSum('1')).toBe(1);
    });
    it('should return 3 : sum of numbers available in "//;\n1;2" ', () => {
      expect(appController.getSum('//;\n1;2')).toBe(3);
    });
    it('should return 6 : sum of numbers available in "1\n2,3" ', () => {
      expect(appController.getSum('1\n2,3')).toBe(6);
    });
    it('should return 10 : sum of numbers available in "//;\n1\n;2;3;4" ', () => {
      expect(appController.getSum('//;\n1\n;2;3;4')).toBe(10);
    });

    it('should return 10 : sum of numbers available in "//;\n1\n;-2;3;4" ', () => {
      expect(appController.getSum('//;\n1\n;2;3;4')).toBe(10);
    });
  });
});
