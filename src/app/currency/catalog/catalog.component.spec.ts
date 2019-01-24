import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogComponent } from './catalog.component';

import {CurrencyModule} from '../currency.module';
import {ContentComponent} from './content/content.component';
import {ListeCurrenciesComponent} from './content/liste-currencies/liste-currencies.component';
import {ItemCurrencyComponent} from './content/liste-currencies/item-currency/item-currency.component';
import {MatCardModule, MatFormField, MatInputModule, MatSelectModule} from '@angular/material';
import {CurrencyService} from '../../core/services/currency.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CurrencyDetailsComponent} from './content/currency-details/currency-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {CurrencyStaticService} from '../../core/services/currency-static.service';
import {Currency} from '../../core/models/Currency';
import {of} from 'rxjs';
import {PagerServiceService} from '../../core/services/pager-service.service';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let spy: any;
  let spyService: CurrencyStaticService;
  let dataReturn: Currency[];
  let spyServicePaginate : PagerServiceService;
  dataReturn =   [
    {
      'id': 'USD',
      'attributes': {
        'code': 'USD',
        'name': 'US Dollar',
        'currency_type': 'national',
        'code_iso_numeric3': '840',
        'code_iso_alpha3': 'USD',
        'symbol': '$',
        'native_symbol': '$',
        'category': 'others'
      }
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogComponent , ContentComponent, ListeCurrenciesComponent, ItemCurrencyComponent, CurrencyDetailsComponent],
      imports : [HttpClientTestingModule,  MatCardModule,
        MatSelectModule , BrowserModule, RouterTestingModule , FormsModule, MatInputModule ,
        BrowserAnimationsModule]  ,
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyService = TestBed.get(CurrencyStaticService);
    spyServicePaginate = TestBed.get(PagerServiceService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get cuurencies by namme ', function () {
       spyOn(spyService, 'getFilterCurrenciesByName').and.returnValues(of(dataReturn));
       component.searchValue = 'US Dollar';
       component.filterWith = 'name';
       component.search();
       expect(spyService.getFilterCurrenciesByName).toHaveBeenCalledWith('US Dollar');
  });

  it('should get cuurencies by type ', function () {
    spyOn(spyService, 'getFilterCurrenciesByType').and.returnValues(of(dataReturn));
    component.searchValue = 'national';
    component.filterWith = 'type';
    component.search();
    expect(spyService.getFilterCurrenciesByType).toHaveBeenCalledWith('national');
  });

  it('should get cuurencies by id ', function () {
    spyOn(spyService, 'getFilterCurrenciesById').and.returnValues(of(dataReturn));
    component.searchValue = 'USD';
    component.filterWith = 'id';
    component.search();
    expect(spyService.getFilterCurrenciesById).toHaveBeenCalledWith('USD');
  });

  it('should get cuurencies by id ', function () {
    spyOn(spyService, 'getFilterCurrenciesByCode').and.returnValues(of(dataReturn));
    component.searchValue = 'USD';
    component.filterWith = 'code';
    component.search();
    expect(spyService.getFilterCurrenciesByCode).toHaveBeenCalledWith('USD');
  });





});


export const CURRENCIES: Currency[] = [
  {
    'id': 'USD',
    'attributes': {
      'code': 'USD',
      'name': 'US Dollar',
      'currency_type': 'national',
      'code_iso_numeric3': '840',
      'code_iso_alpha3': 'USD',
      'symbol': '$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'EUR',
    'attributes': {
      'code': 'EUR',
      'name': 'Euro',
      'currency_type': 'national',
      'code_iso_numeric3': '978',
      'code_iso_alpha3': 'EUR',
      'symbol': '€',
      'native_symbol': '€',
      'category': 'others'
    }
  },
  {
    'id': 'JPY',
    'attributes': {
      'code': 'JPY',
      'name': 'Yen',
      'currency_type': 'national',
      'code_iso_numeric3': '392',
      'code_iso_alpha3': 'JPY',
      'symbol': '¥',
      'native_symbol': '￥',
      'category': 'others'
    }
  },
  {
    'id': 'ARS',
    'attributes': {
      'code': 'ARS',
      'name': 'Argentine Peso',
      'currency_type': 'national',
      'code_iso_numeric3': '032',
      'code_iso_alpha3': 'ARS',
      'symbol': 'AR$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'CUC',
    'attributes': {
      'code': 'CUC',
      'name': 'Peso Convertible',
      'currency_type': 'national',
      'code_iso_numeric3': '931',
      'code_iso_alpha3': 'CUC',
      'symbol': null,
      'native_symbol': null,
      'category': 'others'
    }
  },
  {
    'id': 'CHF',
    'attributes': {
      'code': 'CHF',
      'name': 'Swiss Franc',
      'currency_type': 'national',
      'code_iso_numeric3': '756',
      'code_iso_alpha3': 'CHF',
      'symbol': 'CHF',
      'native_symbol': 'CHF',
      'category': 'others'
    }
  },
  {
    'id': 'USD',
    'attributes': {
      'code': 'USD',
      'name': 'US Dollar',
      'currency_type': 'national',
      'code_iso_numeric3': '840',
      'code_iso_alpha3': 'USD',
      'symbol': '$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'EUR',
    'attributes': {
      'code': 'EUR',
      'name': 'Euro',
      'currency_type': 'national',
      'code_iso_numeric3': '978',
      'code_iso_alpha3': 'EUR',
      'symbol': '€',
      'native_symbol': '€',
      'category': 'others'
    }
  },
  {
    'id': 'JPY',
    'attributes': {
      'code': 'JPY',
      'name': 'Yen',
      'currency_type': 'national',
      'code_iso_numeric3': '392',
      'code_iso_alpha3': 'JPY',
      'symbol': '¥',
      'native_symbol': '￥',
      'category': 'others'
    }
  },
  {
    'id': 'ARS',
    'attributes': {
      'code': 'ARS',
      'name': 'Argentine Peso',
      'currency_type': 'national',
      'code_iso_numeric3': '032',
      'code_iso_alpha3': 'ARS',
      'symbol': 'AR$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'CUC',
    'attributes': {
      'code': 'CUC',
      'name': 'Peso Convertible',
      'currency_type': 'national',
      'code_iso_numeric3': '931',
      'code_iso_alpha3': 'CUC',
      'symbol': null,
      'native_symbol': null,
      'category': 'others'
    }
  },
  {
    'id': 'CHF',
    'attributes': {
      'code': 'CHF',
      'name': 'Swiss Franc',
      'currency_type': 'national',
      'code_iso_numeric3': '756',
      'code_iso_alpha3': 'CHF',
      'symbol': 'CHF',
      'native_symbol': 'CHF',
      'category': 'others'
    }
  },
  {
    'id': 'USD',
    'attributes': {
      'code': 'USD',
      'name': 'US Dollar',
      'currency_type': 'national',
      'code_iso_numeric3': '840',
      'code_iso_alpha3': 'USD',
      'symbol': '$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'EUR',
    'attributes': {
      'code': 'EUR',
      'name': 'Euro',
      'currency_type': 'national',
      'code_iso_numeric3': '978',
      'code_iso_alpha3': 'EUR',
      'symbol': '€',
      'native_symbol': '€',
      'category': 'others'
    }
  },
  {
    'id': 'JPY',
    'attributes': {
      'code': 'JPY',
      'name': 'Yen',
      'currency_type': 'national',
      'code_iso_numeric3': '392',
      'code_iso_alpha3': 'JPY',
      'symbol': '¥',
      'native_symbol': '￥',
      'category': 'others'
    }
  },
  {
    'id': 'ARS',
    'attributes': {
      'code': 'ARS',
      'name': 'Argentine Peso',
      'currency_type': 'national',
      'code_iso_numeric3': '032',
      'code_iso_alpha3': 'ARS',
      'symbol': 'AR$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'CUC',
    'attributes': {
      'code': 'CUC',
      'name': 'Peso Convertible',
      'currency_type': 'national',
      'code_iso_numeric3': '931',
      'code_iso_alpha3': 'CUC',
      'symbol': null,
      'native_symbol': null,
      'category': 'others'
    }
  },
  {
    'id': 'CHF',
    'attributes': {
      'code': 'CHF',
      'name': 'Swiss Franc',
      'currency_type': 'national',
      'code_iso_numeric3': '756',
      'code_iso_alpha3': 'CHF',
      'symbol': 'CHF',
      'native_symbol': 'CHF',
      'category': 'others'
    }
  },
  {
    'id': 'USD',
    'attributes': {
      'code': 'USD',
      'name': 'US Dollar',
      'currency_type': 'national',
      'code_iso_numeric3': '840',
      'code_iso_alpha3': 'USD',
      'symbol': '$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'EUR',
    'attributes': {
      'code': 'EUR',
      'name': 'Euro',
      'currency_type': 'national',
      'code_iso_numeric3': '978',
      'code_iso_alpha3': 'EUR',
      'symbol': '€',
      'native_symbol': '€',
      'category': 'others'
    }
  },
  {
    'id': 'JPY',
    'attributes': {
      'code': 'JPY',
      'name': 'Yen',
      'currency_type': 'national',
      'code_iso_numeric3': '392',
      'code_iso_alpha3': 'JPY',
      'symbol': '¥',
      'native_symbol': '￥',
      'category': 'others'
    }
  },
  {
    'id': 'ARS',
    'attributes': {
      'code': 'ARS',
      'name': 'Argentine Peso',
      'currency_type': 'national',
      'code_iso_numeric3': '032',
      'code_iso_alpha3': 'ARS',
      'symbol': 'AR$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'CUC',
    'attributes': {
      'code': 'CUC',
      'name': 'Peso Convertible',
      'currency_type': 'national',
      'code_iso_numeric3': '931',
      'code_iso_alpha3': 'CUC',
      'symbol': null,
      'native_symbol': null,
      'category': 'others'
    }
  },
  {
    'id': 'CHF',
    'attributes': {
      'code': 'CHF',
      'name': 'Swiss Franc',
      'currency_type': 'national',
      'code_iso_numeric3': '756',
      'code_iso_alpha3': 'CHF',
      'symbol': 'CHF',
      'native_symbol': 'CHF',
      'category': 'others'
    }
  },
  {
    'id': 'USD',
    'attributes': {
      'code': 'USD',
      'name': 'US Dollar',
      'currency_type': 'national',
      'code_iso_numeric3': '840',
      'code_iso_alpha3': 'USD',
      'symbol': '$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'EUR',
    'attributes': {
      'code': 'EUR',
      'name': 'Euro',
      'currency_type': 'national',
      'code_iso_numeric3': '978',
      'code_iso_alpha3': 'EUR',
      'symbol': '€',
      'native_symbol': '€',
      'category': 'others'
    }
  },
  {
    'id': 'JPY',
    'attributes': {
      'code': 'JPY',
      'name': 'Yen',
      'currency_type': 'national',
      'code_iso_numeric3': '392',
      'code_iso_alpha3': 'JPY',
      'symbol': '¥',
      'native_symbol': '￥',
      'category': 'others'
    }
  },
  {
    'id': 'ARS',
    'attributes': {
      'code': 'ARS',
      'name': 'Argentine Peso',
      'currency_type': 'national',
      'code_iso_numeric3': '032',
      'code_iso_alpha3': 'ARS',
      'symbol': 'AR$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'CUC',
    'attributes': {
      'code': 'CUC',
      'name': 'Peso Convertible',
      'currency_type': 'national',
      'code_iso_numeric3': '931',
      'code_iso_alpha3': 'CUC',
      'symbol': null,
      'native_symbol': null,
      'category': 'others'
    }
  },
  {
    'id': 'CHF',
    'attributes': {
      'code': 'CHF',
      'name': 'Swiss Franc',
      'currency_type': 'national',
      'code_iso_numeric3': '756',
      'code_iso_alpha3': 'CHF',
      'symbol': 'CHF',
      'native_symbol': 'CHF',
      'category': 'others'
    }
  },
  {
    'id': 'USD',
    'attributes': {
      'code': 'USD',
      'name': 'US Dollar',
      'currency_type': 'national',
      'code_iso_numeric3': '840',
      'code_iso_alpha3': 'USD',
      'symbol': '$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'EUR',
    'attributes': {
      'code': 'EUR',
      'name': 'Euro',
      'currency_type': 'national',
      'code_iso_numeric3': '978',
      'code_iso_alpha3': 'EUR',
      'symbol': '€',
      'native_symbol': '€',
      'category': 'others'
    }
  },
  {
    'id': 'JPY',
    'attributes': {
      'code': 'JPY',
      'name': 'Yen',
      'currency_type': 'national',
      'code_iso_numeric3': '392',
      'code_iso_alpha3': 'JPY',
      'symbol': '¥',
      'native_symbol': '￥',
      'category': 'others'
    }
  },
  {
    'id': 'ARS',
    'attributes': {
      'code': 'ARS',
      'name': 'Argentine Peso',
      'currency_type': 'national',
      'code_iso_numeric3': '032',
      'code_iso_alpha3': 'ARS',
      'symbol': 'AR$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'CUC',
    'attributes': {
      'code': 'CUC',
      'name': 'Peso Convertible',
      'currency_type': 'national',
      'code_iso_numeric3': '931',
      'code_iso_alpha3': 'CUC',
      'symbol': null,
      'native_symbol': null,
      'category': 'others'
    }
  },
  {
    'id': 'CHF',
    'attributes': {
      'code': 'CHF',
      'name': 'Swiss Franc',
      'currency_type': 'national',
      'code_iso_numeric3': '756',
      'code_iso_alpha3': 'CHF',
      'symbol': 'CHF',
      'native_symbol': 'CHF',
      'category': 'others'
    }
  },
  {
    'id': 'USD',
    'attributes': {
      'code': 'USD',
      'name': 'US Dollar',
      'currency_type': 'national',
      'code_iso_numeric3': '840',
      'code_iso_alpha3': 'USD',
      'symbol': '$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'EUR',
    'attributes': {
      'code': 'EUR',
      'name': 'Euro',
      'currency_type': 'national',
      'code_iso_numeric3': '978',
      'code_iso_alpha3': 'EUR',
      'symbol': '€',
      'native_symbol': '€',
      'category': 'others'
    }
  },
  {
    'id': 'JPY',
    'attributes': {
      'code': 'JPY',
      'name': 'Yen',
      'currency_type': 'national',
      'code_iso_numeric3': '392',
      'code_iso_alpha3': 'JPY',
      'symbol': '¥',
      'native_symbol': '￥',
      'category': 'others'
    }
  },
  {
    'id': 'ARS',
    'attributes': {
      'code': 'ARS',
      'name': 'Argentine Peso',
      'currency_type': 'national',
      'code_iso_numeric3': '032',
      'code_iso_alpha3': 'ARS',
      'symbol': 'AR$',
      'native_symbol': '$',
      'category': 'others'
    }
  },
  {
    'id': 'CUC',
    'attributes': {
      'code': 'CUC',
      'name': 'Peso Convertible',
      'currency_type': 'national',
      'code_iso_numeric3': '931',
      'code_iso_alpha3': 'CUC',
      'symbol': null,
      'native_symbol': null,
      'category': 'others'
    }
  },
  {
    'id': 'CHF',
    'attributes': {
      'code': 'CHF',
      'name': 'Swiss Franc',
      'currency_type': 'national',
      'code_iso_numeric3': '756',
      'code_iso_alpha3': 'CHF',
      'symbol': 'CHF',
      'native_symbol': 'CHF',
      'category': 'others'
    }
  }
];
