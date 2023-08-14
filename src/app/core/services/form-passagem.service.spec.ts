import { TestBed } from '@angular/core/testing';

import { FormPassagemService } from './form-passagem.service';

describe('FormPassagemService', () => {
  let service: FormPassagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormPassagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
