import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule, WavesModule, ButtonsModule,DropdownModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StockDataComponent } from './stock-data/stock-data.component';
import { ScannersComponent } from './scanners/scanners.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BackfillComponent } from './backfill/backfill.component';
import { RefreshDataComponent } from './refresh-data/refresh-data.component';
import { NavbarRootComponent } from './navbar-root/navbar-root.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { TestComponent } from './test/test.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { StockFundamentalsComponent } from './stock-fundamentals/stock-fundamentals.component';
import { ScannerNinemillionComponent } from './scanner-ninemillion/scanner-ninemillion.component';
import { ScannerMagnaComponent } from './scanner-magna/scanner-magna.component';
import { LoadEarningsFileQComponent } from './load-earnings-file-q/load-earnings-file-q.component';
import { MarketMonitorComponent } from './market-monitor/market-monitor.component';


@NgModule({
  declarations: [
    AppComponent,
    StockDataComponent,
    ScannersComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    BackfillComponent,
    RefreshDataComponent,
    NavbarRootComponent,
    TestComponent,
    StockFundamentalsComponent,
    ScannerNinemillionComponent,
    ScannerMagnaComponent,
    LoadEarningsFileQComponent,
    MarketMonitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    NavbarModule, 
    WavesModule,
    ButtonsModule,
    DropdownModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    CollapseModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
