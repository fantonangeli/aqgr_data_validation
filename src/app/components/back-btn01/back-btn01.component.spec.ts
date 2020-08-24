import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackBtn01Component } from './back-btn01.component';

describe('BackBtn01Component', () => {
  let component: BackBtn01Component;
  let fixture: ComponentFixture<BackBtn01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackBtn01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackBtn01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
