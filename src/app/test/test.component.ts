import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  // define Constructor
  constructor() { 
    console.log('Test Component constructor!');
  }
  // define ngOnInit
  ngOnInit(): void {
    console.log('Test Component Initialized!');
  }
}
