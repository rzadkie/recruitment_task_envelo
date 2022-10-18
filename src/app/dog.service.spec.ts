import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { DogService } from './dog.service';

describe('DogService', () => {
  let service: DogService
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DogService]

    });
    service = TestBed.inject(DogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrive all dogs', () => {
    expect(service).toBeTruthy();
  });
});
