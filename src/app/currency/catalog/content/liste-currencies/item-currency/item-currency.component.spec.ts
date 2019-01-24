import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCurrencyComponent } from './item-currency.component';
import {MatCardModule} from '@angular/material';

describe('ItemCurrencyComponent', () => {
  let component: ItemCurrencyComponent;
  let fixture: ComponentFixture<ItemCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCurrencyComponent ],
      imports : [MatCardModule]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
