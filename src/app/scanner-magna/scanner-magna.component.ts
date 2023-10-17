import { Component } from '@angular/core';
import { ScannersService } from '../scanners.service';

@Component({
  selector: 'app-scanner-magna',
  templateUrl: './scanner-magna.component.html',
  styleUrls: ['./scanner-magna.component.css']
})
export class ScannerMagnaComponent {
  scansMAGNARecords$: any;
  tableParams: any; // Declare the tableParams variable
    constructor(private scannerService: ScannersService) { 
      // this.tableParams = new NgTableParams({}, {
      //   dataset: this.scansMAGNARecords
      // });
    }
  
    ngOnInit(): void {
      this.scannerService.getMAGNAStocks().subscribe(
        (data) => {
          this.scansMAGNARecords$ = data
        },
        (error) => {
          console.error('Error fetching stock data:', error);
        }
      );
    }
}
