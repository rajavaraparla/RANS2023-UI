import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StockDataService {

  private apiUrl = '/stockdata'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getStockData(symbol: string) {
    // Implement HTTP GET request to this.apiUrl
  }
}
