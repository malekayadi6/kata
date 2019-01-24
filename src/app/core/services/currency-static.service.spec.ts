import { TestBed } from '@angular/core/testing';

import { CurrencyStaticService } from './currency-static.service';
import {CurrencyDataService} from './currency-data.service';
import {Currency} from '../models/Currency';

describe('CurrencyStaticService', () => {
  let service: CurrencyStaticService ;
  let spy: any;
  let spyDataService: any;
  let dataReturn: Currency[];
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
    },
    {
      'id': 'USD',
      'attributes': {
        'code': 'USD',
        'name': 'US Dollar',
        'currency_type': 'internationl',
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
        'name': 'EUR FR',
        'currency_type': 'national',
        'code_iso_numeric3': '840',
        'code_iso_alpha3': 'USD',
        'symbol': '$',
        'native_symbol': '$',
        'category': 'others'
      }
    }
  ];
  beforeEach(() => {
      TestBed.configureTestingModule({});

    service = TestBed.get(CurrencyStaticService);
    spyDataService = TestBed.get(CurrencyDataService);


    }
  );
  afterEach(() => {
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it( 'should get currency by id ', () => {
    spy = spyOn(spyDataService, 'getCurrenciesData').and.returnValue(dataReturn);
    service.getCurrenciesById('USD').subscribe(currency => {
      expect(spy).toHaveBeenCalled();
        expect(currency instanceof Object ).toBe(true , 'instance of Object ');
        expect(currency.id).toBe('USD');

      }
    );
  });

  it( 'should get  all currencies array  ', () => {
   spy = spyOn(spyDataService, 'getCurrenciesData').and.returnValue(dataReturn);

    service.getAllCurrencies(0, 3).subscribe(currencies => {
         expect(currencies instanceof Array ).toBe(true, 'insatnce of array') ;
         const currenciesL = currencies.length;
         expect(currenciesL).toBe(3);
    });

  });

  it('should  get currencies by type ', () => {


    spy = spyOn(spyDataService, 'getCurrenciesData').and.returnValue(dataReturn);

     service.getFilterCurrenciesByType('inter').subscribe(currencies => {
      const size = currencies.length;
           expect(size).toBe(1);
           expect(currencies[0].id).toBe('USD');
           expect(spy).toHaveBeenCalled();

      });
  });

  it('should  get currency by code ',  () => {
    spy = spyOn(spyDataService, 'getCurrenciesData').and.returnValue(dataReturn);

     service.getFilterCurrenciesByCode('EUR').subscribe( currencies => {
       const size = currencies.length ;
       expect(size).toBe(1);
       expect(currencies[0].id).toBe('EUR');
       expect(spy).toHaveBeenCalled();
     });

  });

  it('should  get currency by name ', () => {
    spy = spyOn(spyDataService, 'getCurrenciesData').and.returnValue(dataReturn);

    service.getFilterCurrenciesByName('EUR').subscribe( currencies => {
      const size = currencies.length;
      expect(size).toBe(1);
      expect(currencies[0].attributes.name).toBe('EUR FR');
      expect(spy).toHaveBeenCalled();
    });

  });

  it('should  get currency by ID ', () => {
    spy = spyOn(spyDataService, 'getCurrenciesData').and.returnValue(dataReturn);

    service.getFilterCurrenciesById('EUR').subscribe( currencies => {
      const size = currencies.length;
      expect(size).toBe(1);
      expect(currencies[0].attributes.name).toBe('EUR FR');
      expect(spy).toHaveBeenCalled();
    });
  });

  it('should get size of all currencies',() => {
    spy = spyOn(spyDataService , 'getCurrenciesData' ).and.returnValues(dataReturn);
    expect(service.getSizeOfAllItems()).toBe(3) ;
    expect(spy).toHaveBeenCalled();
  }) ;

});
