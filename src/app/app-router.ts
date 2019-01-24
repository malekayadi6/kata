
import {Routes} from "@angular/router";

export const routes: Routes = [
  { path: '', redirectTo: '/currency', pathMatch: 'full' },
  { path: 'currency', loadChildren: './currency/currency.module/#CurrencyModule' }
  ];

