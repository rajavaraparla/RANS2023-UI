import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RANS2023-UI';
  // Define the getScannerData method
  getScannerData(scanner: string) {
    // Implement the logic to make an HTTP request and handle the response
    console.log(`Clicked on ${scanner}`);
    // Call your service to fetch scanner data
  }

  doAction(action: string) {
    // Implement the logic to make an HTTP request and handle the response
    console.log(`Clicked on ${action}`);
    // Call your service to fetch scanner data
  }

}
