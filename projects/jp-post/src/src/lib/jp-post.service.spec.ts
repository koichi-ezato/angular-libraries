import { TestBed } from '@angular/core/testing';

import { JpPostService } from './jp-post.service';

describe('JpPostService', () => {
  let service: JpPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JpPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
