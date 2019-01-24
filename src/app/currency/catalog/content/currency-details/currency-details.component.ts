import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {CurrencyStaticService} from '../../../../core/services/currency-static.service';
import {Currency} from '../../../../core/models/Currency';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit {

  actionsSubscription: Subscription;
  id: any;
  currency: Currency;
  constructor(
    private route: ActivatedRoute,
    private service: CurrencyStaticService

  ) { }

  ngOnInit() {
    this.getDeatil();
  }

  getDeatil(): void{
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.service.getCurrenciesById(this.id)
          .subscribe(currency => this.currency = currency ) ;
      });
  }


}

