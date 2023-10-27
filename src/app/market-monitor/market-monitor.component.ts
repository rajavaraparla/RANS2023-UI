import { Component } from '@angular/core';
import { Mm4pService } from '../mm-4p.service';

@Component({
  selector: 'market-monitor',
  templateUrl: './market-monitor.component.html',
  styleUrls: ['./market-monitor.component.css']
})
export class MarketMonitorComponent {
  MM4PRecords$: any;
  tableParams: any; // Declare the tableParams variable
    constructor(private mm4pService: Mm4pService) { 
      // this.tableParams = new NgTableParams({}, {
      //   dataset: this.scansMAGNARecords
      // });
    }
  
    ngOnInit(): void {
      this.mm4pService.getMM4PStocks().subscribe(
        (data) => {
          this.MM4PRecords$ = data
        },
        (error) => {
          console.error('Error fetching 4P stocks:', error);
        }
      );
    }
    getRowColor(scan: any): string {
      // Define your condition here and return the appropriate class name
      if (scan.Up < scan.Down) {
        return 'red-row';
      } else {
        return 'green-row';
      }
    }
}
