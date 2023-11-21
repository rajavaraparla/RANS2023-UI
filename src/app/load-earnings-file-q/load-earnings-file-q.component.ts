import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoadEarningsFileResponse} from './load-earnings-file-q.interface';

@Component({
  selector: 'app-load-earnings-file-q',
  templateUrl: './load-earnings-file-q.component.html',
  styleUrls: ['./load-earnings-file-q.component.css']
})
export class LoadEarningsFileQComponent {

  selectedFile: File | undefined;

  server = "http://localhost:5000"
  server = ""
  responseMessage: string = '';

  constructor(private http: HttpClient) {}

  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const formData = new FormData();
    if (this.selectedFile) {
    formData.append('file', this.selectedFile, this.selectedFile.name);

    this.http.post<LoadEarningsFileResponse>(`${this.server}/v1/data/load_earnings_from_10Q`, formData)
      .subscribe(response => {
        this.responseMessage = `EPS: ${response.EPS}, Sales: ${response.Sales}`;
        console.log(this.responseMessage);
        console.log(response);
        
        }, error => {
      this.responseMessage = error.error.error;
    });
    }
  }
}

