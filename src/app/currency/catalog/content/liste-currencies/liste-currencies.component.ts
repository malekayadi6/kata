import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-liste-currencies',
  templateUrl: './liste-currencies.component.html',
  styleUrls: ['./liste-currencies.component.css']
})
export class ListeCurrenciesComponent implements OnInit {

  @Input() currencies;
  constructor() { }

  ngOnInit() {
  }

}
