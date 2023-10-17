import { Component } from '@angular/core';
import { ScannersService } from '../scanners.service';

@Component({
  selector: 'app-scanner-ninemillion',
  templateUrl: './scanner-ninemillion.component.html',
  styleUrls: ['./scanner-ninemillion.component.css']
})
export class ScannerNinemillionComponent {
  scans9MRecords: any;

    constructor(private scannerService: ScannersService) { }
  
    ngOnInit(): void {
      this.scannerService.get9MStocks().subscribe(
        (data) => {
          console.log(data);
          this.scans9MRecords = data
        },
        (error) => {
          console.error('Error fetching stock data:', error);
        }
      );
    }

}
