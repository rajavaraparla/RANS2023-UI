import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-root',
  templateUrl: './navbar-root.component.html',
  styleUrls: ['./navbar-root.component.css']
})
export class NavbarRootComponent {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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
