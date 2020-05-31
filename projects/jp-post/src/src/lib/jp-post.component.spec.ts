import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpPostComponent } from './jp-post.component';

describe('JpPostComponent', () => {
  let component: JpPostComponent;
  let fixture: ComponentFixture<JpPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
