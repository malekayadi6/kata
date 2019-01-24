import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import {ListeCurrenciesComponent} from './liste-currencies/liste-currencies.component';
import {ItemCurrencyComponent} from './liste-currencies/item-currency/item-currency.component';
import {MatCardModule, MatSelectModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentComponent , ListeCurrenciesComponent , ItemCurrencyComponent ],
      imports : [
        MatCardModule,
        MatSelectModule,
        RouterTestingModule
      ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
