import { Test, TestingModule } from '@nestjs/testing';
import { EixosService } from './eixos.service';

describe('EixosService', () => {
  let service: EixosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EixosService],
    }).compile();

    service = module.get<EixosService>(EixosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
