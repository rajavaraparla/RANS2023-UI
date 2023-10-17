import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private autoCompleteList: { Symbol: string, Name: string }[] = [];
  private server = "http://localhost:5000"
  private apiUrl = `${this.server}/v1/data/stocks-list`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };  
  constructor(private http: HttpClient) {
    this.fetchAutocompleteList().subscribe((stockList: { Symbol: string, Name: string }[]) => {
      this.autoCompleteList = stockList;
    });
  }
  private fetchAutocompleteList(): Observable<{ Symbol: string, Name: string }[]> {
    console.log("fetchAutocompleteList")
    return this.http.get<{ Symbol: string, Name: string }[]>(this.apiUrl).pipe(
      catchError((error) => {

        console.error('Error fetching autocomplete list', error);
        return of([]); // Return an empty array in case of an error
      })
      
    );
  }  
  getAutocompleteSuggestions(value: string): Observable<{ Symbol: string, Name: string }[]> {
    const filteredSuggestions = this.autoCompleteList.filter(item =>
      item.Symbol.trim().toLowerCase().includes(value.trim().toLowerCase())
    );
    return of(filteredSuggestions); // Return the filtered suggestions as an Observable
  }  

}
