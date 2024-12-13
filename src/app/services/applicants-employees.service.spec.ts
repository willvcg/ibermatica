import { TestBed } from '@angular/core/testing';

import { ApplicantsEmployeesService } from './applicants-employees.service';

describe('ApplicantsEmployeesService', () => {
  let service: ApplicantsEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicantsEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
