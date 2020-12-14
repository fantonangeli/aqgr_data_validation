import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpeciesTableComponent } from './species-table.component';

describe('SpeciesTableComponent', () => {
  let component: SpeciesTableComponent;
  let fixture: ComponentFixture<SpeciesTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
