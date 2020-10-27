import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SFtypesTableComponent } from './sftypes-table.component';

describe('SFtypesTableComponent', () => {
  let component: SFtypesTableComponent;
  let fixture: ComponentFixture<SFtypesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SFtypesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SFtypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
