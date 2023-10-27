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
          console.log(this.MM4PRecords$);
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
  // Function to format a date and add a day
  formatAndAddDay(inputDate: string): string {
    const date = new Date(inputDate);
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
  }

}
