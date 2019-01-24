import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {CurrencyDataService} from './currency-data.service';
import {Currency} from '../models/Currency';
@Injectable({
  providedIn: 'root'
})
export class CurrencyStaticService {

  constructor(
    private data: CurrencyDataService
  ) {
  }


  public getAllCurrencies(startIndex: number = 0, endIndex: number = 10): Observable<Currency[]> {
    return of(this.data.getCurrenciesData().slice(startIndex, endIndex));
  }

  public getSizeOfAllItems():number{
    return this.data.getCurrenciesData().length;
  }

  public getCurrenciesById(id: string): Observable<Currency> {
    console.log(typeof this.data.getCurrenciesData().find(currency => currency.id === id));
    return of(this.data.getCurrenciesData().find(currency => currency.id === id));
  }

  public getFilterCurrenciesByType(type: string): Observable<Currency[]> {
    return of(this.data.getCurrenciesData().filter(currency => currency.attributes.currency_type.includes(type)));
  }

  public getFilterCurrenciesByCode(code: string): Observable<Currency[]> {
    return of(this.data.getCurrenciesData().filter(currency => currency.attributes.code.includes(code.toLocaleUpperCase())));
  }

  public getFilterCurrenciesByName(name: string): Observable<Currency[]> {
    return of(this.data.getCurrenciesData().filter(currency => currency.attributes.name.includes(name.toLocaleUpperCase())));
  }

  public getFilterCurrenciesById(id: string): Observable<Currency[]> {
    return of(this.data.getCurrenciesData().filter(currency => currency.id.includes(id.toLocaleUpperCase())));
  }




}
