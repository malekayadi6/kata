import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { ContentComponent } from './catalog/content/content.component';
import { ListeCurrenciesComponent } from './catalog/content/liste-currencies/liste-currencies.component';
import { ItemCurrencyComponent } from './catalog/content/liste-currencies/item-currency/item-currency.component';
import {MatCardModule} from '@angular/material/card';
import {CoreModule} from '../core/core.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CurrencyDetailsComponent } from './catalog/content/currency-details/currency-details.component';
import {RouterModule} from '@angular/router';
import {CurrencyRoutes} from './currency-router';
import {MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CatalogComponent, ContentComponent, ListeCurrenciesComponent, ItemCurrencyComponent, CurrencyDetailsComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSelectModule,
    CoreModule,
    FormsModule,
    MatInputModule,
    RouterModule.forChild(CurrencyRoutes)

  ] ,
  exports : [
    CatalogComponent, ContentComponent, ListeCurrenciesComponent, ItemCurrencyComponent  ]
})
export class CurrencyModule { }
