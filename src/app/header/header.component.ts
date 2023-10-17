import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/search.service';
import {StockFundamentalsService} from 'src/app/stock-fundamentals.service';
import { Router } from '@angular/router';


import { debounceTime, tap, switchMap, finalize, distinctUntilChanged, filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
  searchStocksControl = new FormControl();
  selectedStock: any = "";
  minLengthTerm = 1;
  filteredStocks: any;
  isLoading = false;
  errorMsg!: string;  
  constructor(private searchService: SearchService, private stockFundamentalsService: StockFundamentalsService,  private router: Router) {
    // Constructor logic here
  }

  ngOnInit() {
    this.searchStocksControl.valueChanges
      .pipe(
        filter(res => {
          return res !== null && res.length >= this.minLengthTerm
        }),
        distinctUntilChanged(),
        debounceTime(1000),
        tap(() => {
          this.errorMsg = "";
          this.filteredStocks = [];
          this.isLoading = true;
        }),
        
        switchMap(value => this.searchService.getAutocompleteSuggestions(value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe((data: any) => {
        // data is return array, Check if array is empty
        if (data) {
          this.errorMsg = "";
          this.filteredStocks = data;
        } else
        // Check if the response is an error
        {
          this.errorMsg = "ERROR!";
          this.filteredStocks = [];
        }
      });  
  }

  onSelected() {
    if (this.selectedStock) {
      console.log("Selected Stock")
      console.log(this.selectedStock)
      this.stockFundamentalsService.getStockInfo(this.selectedStock.Symbol).subscribe(
        () => {
          this.router.navigate(['/stock-fundamentals', this.selectedStock.Symbol]);
        },
        (error) => {
          console.error('Error fetching stock data:', error);
        }
      );
    }
  }
  clearSelection() {
    this.selectedStock = "";
    this.filteredStocks = [];
  }  
  onInputChange(value: string): void {
    // You can add additional logic here if needed
  }  
  displayWith(value: any) {
    return value?.Title;
  }  
}
