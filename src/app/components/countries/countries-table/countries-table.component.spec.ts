import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CountriesTableComponent } from './countries-table.component';

describe('CountriesTableComponent', () => {
  let component: CountriesTableComponent;
  let fixture: ComponentFixture<CountriesTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CountriesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
