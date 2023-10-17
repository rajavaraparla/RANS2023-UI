import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockDataComponent } from './stock-data/stock-data.component';
import { SearchComponent } from './search/search.component';
import { ScannersComponent } from './scanners/scanners.component';
import { ScannerNinemillionComponent } from './scanner-ninemillion/scanner-ninemillion.component';
import { ScannerMagnaComponent } from './scanner-magna/scanner-magna.component';
import { StockFundamentalsComponent } from './stock-fundamentals/stock-fundamentals.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'stock-data', component: StockDataComponent },
  { path: 'search', component: SearchComponent },
  { path: 'scanners/9m', component: ScannerNinemillionComponent },
  { path: 'scanners/magna', component: ScannerMagnaComponent },
  { path: 'test', component: TestComponent },
  {path:'stock-fundamentals/:symbol', component: StockFundamentalsComponent},
  
  // { path: '', redirectTo: '/stock-data', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
