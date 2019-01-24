import { TestBed } from '@angular/core/testing';

import { CurrencyService } from './currency.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('CurrencyService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports : [HttpClientTestingModule] ,
    providers : [CurrencyService] ,
  }));

  it('should be created', () => {
    const service: CurrencyService = TestBed.get(CurrencyService);
    expect(service).toBeTruthy();
  });
});

describe('currencyHttpService' , () => {
  let service : CurrencyService;
  let httpMock: HttpTestingController;
  beforeEach(  () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });
    service = TestBed.get(CurrencyService);
    httpMock = TestBed.get(HttpTestingController);
  });

    it('should get the data successful', () => {
      service.getAllCurrencies().subscribe((data: any) => {
        expect(data[0].id).toBe('USD');
      });

      const req = httpMock.expectOne(`http://localhost:9898/currency.json`, 'call to api');
      expect(req.request.method).toBe('GET');

      req.flush(
        [
          {
            id: 'USD',
            attributes: {
              code: 'USD',
              name: 'US Dollar',
              currency_type: 'national',
              code_iso_numeric3: '840',
              code_iso_alpha3: 'USD',
              symbol: '$',
              native_symbol: '$',
              category: 'others'
            }
          }
        ]
      );
      httpMock.verify();

    });


});
