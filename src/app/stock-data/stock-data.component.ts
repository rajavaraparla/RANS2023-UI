import { Component } from '@angular/core';
import { StockDataService } from '../stock-data.service';

@Component({
  selector: 'app-stock-data',
  templateUrl: './stock-data.component.html',
  styleUrls: ['./stock-data.component.css']
})



export class StockDataComponent {
  constructor(private stockDataService: StockDataService) {}

  // Implement logic to call /stockdata API using stockDataService
}
