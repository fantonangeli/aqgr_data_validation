import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FtypesTableComponent } from './ftypes-table.component';

describe('FtypesTableComponent', () => {
  let component: FtypesTableComponent;
  let fixture: ComponentFixture<FtypesTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FtypesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
