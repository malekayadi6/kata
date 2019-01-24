import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCurrenciesComponent } from './liste-currencies.component';
import {ItemCurrencyComponent} from './item-currency/item-currency.component';
import {MatCardModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('ListeCurrenciesComponent', () => {
  let component: ListeCurrenciesComponent;
  let fixture: ComponentFixture<ListeCurrenciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCurrenciesComponent,ItemCurrencyComponent ],
      imports : [MatCardModule, RouterTestingModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
