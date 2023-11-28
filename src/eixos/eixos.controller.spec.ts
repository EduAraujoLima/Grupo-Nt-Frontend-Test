import { Test, TestingModule } from '@nestjs/testing';
import { EixosController } from './eixos.controller';
import { EixosService } from './eixos.service';

describe('EixosController', () => {
  let controller: EixosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EixosController],
      providers: [EixosService],
    }).compile();

    controller = module.get<EixosController>(EixosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
