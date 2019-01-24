import { Component, OnInit } from '@angular/core';
import {Currency} from '../../core/models/Currency';
import {CurrencyStaticService} from '../../core/services/currency-static.service';
import {PagerServiceService} from '../../core/services/pager-service.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  currencies: Currency[];
  aTitle: String = 'Available Currencies';
  filterWith = 'name';
  searchValue: string;
  totalItemPerPage: number = 2;
  totalItem: number;
  pager: any = {};
  selectItemPerPage : Array<number> = [2, 5, 10 ] ;

  // FOR INIT SELECT BOX
  filters: Array<any> = [
    {value: 'id', viewValue: 'Id'},
    {value: 'name', viewValue: 'Name'},
    {value: 'code', viewValue: 'Code'},
    {value: 'type', viewValue: 'Type'}
  ];

  constructor(
    private service: CurrencyStaticService,
    private servicePager: PagerServiceService
  ) { }

  ngOnInit() {
    this.getTotalItemCurrencies();
    this.setPage(1);

  }

  getCurrencies(): void {
    this.service.getAllCurrencies(this.pager.startIndex , this.pager.endIndex + 1).subscribe(currencies => {
    this.currencies = currencies;
  });
  }

  getTotalItemCurrencies(): void {
    this.totalItem = this.service.getSizeOfAllItems();
  }

  search() {
    switch (this.filterWith) {

      case 'name': {
        this.service.getFilterCurrenciesByName(this.searchValue).subscribe(currencies => {
          this.currencies = currencies;
        });
        break;
      }
      case 'type' : {
        this.service.getFilterCurrenciesByType(this.searchValue).subscribe(currencies => {

          this.currencies = currencies;
        });
        break;
      }
      case 'id' : {
        this.service.getFilterCurrenciesById(this.searchValue).subscribe(currencies => {
          this.currencies = currencies;
        });
        break;
      }
      case 'code' : {
        this.service.getFilterCurrenciesByCode(this.searchValue).subscribe(currencies => {
          this.currencies = currencies;
        });
        break;
      }
    }

  }
  setPage(page : number): void {
     this.pager = this.servicePager.getPager(this.totalItem, page , this.totalItemPerPage);
     this.getCurrencies();
  }

  onChangeSearchInput() {
    if (this.searchValue != null && this.filterWith != null ) {
        this.search();
    }

  }


}
