import { TestBed } from '@angular/core/testing';

import { GererPokemonService } from './gerer-pokemon.service';

describe('GererPokemonService', () => {
  let service: GererPokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GererPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
