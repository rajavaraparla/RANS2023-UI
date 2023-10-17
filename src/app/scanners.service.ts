import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScannersService {
  server = 'http://localhost:5000';
  constructor(private http: HttpClient) {}
  get9MStocks() {
    const url = `${this.server}/v1/scanners/9m`;
    console.log(url);
    return this.http.get(url);
  }
  getMAGNAStocks() {
    const url = `${this.server}/v1/scanners/magna`;
    console.log(url);
    return this.http.get(url);
  }

}
