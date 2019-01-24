import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-item-currency',
  templateUrl: './item-currency.component.html',
  styleUrls: ['./item-currency.component.css']
})
export class ItemCurrencyComponent implements OnInit {

  @Input() currency;
  constructor() { }

  ngOnInit() {
  }

}
