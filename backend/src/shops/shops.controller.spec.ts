import { Test, TestingModule } from '@nestjs/testing';
import { ShopsController } from './shops.controller';

describe('Shops Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ShopsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ShopsController = module.get<ShopsController>(ShopsController);
    expect(controller).toBeDefined();
  });
});
