import { Component } from '@angular/core';
import { animations } from './animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ animations ]
})
export class AppComponent {

  color: string;

  constructor() {
    this.color = 'red';
  }

  ngOnInit() {
    setInterval(() => {
      if (this.color === 'red') this.color = 'yellow'
      else if (this.color === 'yellow') this.color = 'green'
      else if (this.color === 'green') this.color = 'red'
    }, 1500)
  }
}
