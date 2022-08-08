import { TestBed } from '@angular/core/testing';

import { projectsService } from './projects.service';

describe('projectsService', () => {
  let service: projectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(projectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
