import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkyRadioComponent } from './funky-radio.component';

describe('FunkyRadioComponent', () => {
  let component: FunkyRadioComponent;
  let fixture: ComponentFixture<FunkyRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunkyRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkyRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
