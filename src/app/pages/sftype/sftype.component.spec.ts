import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFtypeComponent } from './sftype.component';

describe('SFtypeComponent', () => {
  let component: SFtypeComponent;
  let fixture: ComponentFixture<SFtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
