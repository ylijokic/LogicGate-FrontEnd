import { createServiceFactory, SpectatorService, SpectatorServiceFactory } from '@ngneat/spectator';

import { AnimalService } from './animal.service';

describe('AnimalService', () => {
  let spectator: SpectatorService<AnimalService>;
  const createService: SpectatorServiceFactory<AnimalService> = createServiceFactory({
    service: AnimalService,
  });

  beforeEach(() => {
    spectator = createService();
  });

  it('should be defined', () => {
    expect(spectator.service).toBeDefined();
  });
});
