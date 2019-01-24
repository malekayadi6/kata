
import {Routes} from "@angular/router";
import {CatalogComponent} from './catalog/catalog.component';
import {CurrencyDetailsComponent} from './catalog/content/currency-details/currency-details.component';


export const CurrencyRoutes: Routes = [
  { path: 'currency', component : CatalogComponent },
  { path: 'currency/:id', component: CurrencyDetailsComponent }

];

