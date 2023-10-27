import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Mm4pService {
  server = 'http://localhost:5000';
  constructor(private http: HttpClient) {}
  getMM4PStocks() {
    const url = `${this.server}/v1/filters/mm_4_percent_last_ndays`;
    let params = new HttpParams().set('num_days', '30');
    const options = { params: params };
    console.log(url);
    return this.http.get(url, options);
  }

}
