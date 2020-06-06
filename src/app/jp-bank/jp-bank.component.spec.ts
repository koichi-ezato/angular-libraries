import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpBankComponent } from './jp-bank.component';

describe('JpBankComponent', () => {
  let component: JpBankComponent;
  let fixture: ComponentFixture<JpBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
