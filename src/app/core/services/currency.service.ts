
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient
  ) {  }

  public getAllCurrencies():Observable<any>{
    return this.http.get("http://localhost:9898/currency.json");
  }


}
