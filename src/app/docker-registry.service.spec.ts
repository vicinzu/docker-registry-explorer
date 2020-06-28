import { TestBed } from '@angular/core/testing';
import { catchError, retry } from 'rxjs/operators';

import { DockerRegistryService } from './docker-registry.service';

describe('DockerRegistryService', () => {
  let service: DockerRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DockerRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
