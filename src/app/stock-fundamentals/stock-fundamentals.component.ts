import { Component } from '@angular/core';
import { StockFundamentalsService } from 'src/app/stock-fundamentals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock-fundamentals',
  templateUrl: './stock-fundamentals.component.html',
  styleUrls: ['./stock-fundamentals.component.css']
})
export class StockFundamentalsComponent {
  symbol: string = '';
  stockData: any;
  rowStyles: string[] = [];

  constructor(private route: ActivatedRoute, private stockFundamentalsService: StockFundamentalsService) {
    this.route.params.subscribe((params) => {
      this.symbol = params['symbol'];
      if (this.symbol) {
        this.loadStockData();
      }
    });
  }

  ngOnInit() {
  }


  private loadStockData() {
    // Fetch stock information using this.symbol
    this.stockFundamentalsService.getStockInfo(this.symbol).subscribe(
      (data) => {
        this.stockData = data;
        // You can also perform additional processing here
        
      },
      (error) => {
        console.error('Error fetching stock data:', error);
      }
    );
  }

}
