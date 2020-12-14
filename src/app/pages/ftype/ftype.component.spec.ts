import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FtypeComponent } from './ftype.component';

describe('FtypeComponent', () => {
  let component: FtypeComponent;
  let fixture: ComponentFixture<FtypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
