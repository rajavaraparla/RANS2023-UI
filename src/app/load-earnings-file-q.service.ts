import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadEarningsFileQService {
  server = 'http://localhost:5000';
  server = '';
  constructor(private http: HttpClient) {}
  loadEarnings10Q() {
    const url = `${this.server}/v1/data/load_earnings_from_10Q`;
    console.log(url);
    return this.http.get(url);
  }
}
