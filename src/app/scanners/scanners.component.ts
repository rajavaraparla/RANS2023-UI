import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScannersService } from '../scanners.service';

@Component({
  selector: 'app-scanners',
  templateUrl: './scanners.component.html',
  styleUrls: ['./scanners.component.css']
})
export class ScannersComponent {
  scanType: string = '';
  scans9MRecords: any;
  scansMAGNARecords: any;

  constructor(private route: ActivatedRoute, private scannerService: ScannersService) {
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.scanType = params['scan-name'];
      console.log("Scanners Component");
      console.log(this.scanType);
      switch (this.scanType) {
        case "9M_Stocks":
          this.scannerService.get9MStocks().subscribe(
            (data) => {
              console.log(data);
              this.scans9MRecords = data
            },
            (error) => {
              console.error('Error fetching stock data:', error);
            }
          );
          break
          case "MAGNA":
            this.scannerService.getMAGNAStocks().subscribe(
              (data) => {
                console.log("scansMAGNARecords Entered")

                this.scansMAGNARecords = data
              },
              (error) => {
                console.error('Error fetching MAGNA stocks:', error);
              }
            );
            break   
      }

    });
  }
}
