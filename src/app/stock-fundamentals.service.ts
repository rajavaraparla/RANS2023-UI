import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockFundamentalsService {
  private server = "http://localhost:5000"

  constructor(private http: HttpClient) {}

  getStockInfo(stockSymbol: string): Observable<any> {
    const url = `${this.server}/v1/data/stock-info/fundamentals?ticker=${stockSymbol}`;
    console.log(url);
    return this.http.get(url);
  }
}
