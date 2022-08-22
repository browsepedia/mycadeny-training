import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public appTitle = 'MyCademy Training';

  public numbers = [1, 2, 3, 4, 5];

  public showTitle = false;

  randomize(): void {
    this.numbers = [];
    for (let i = 0; i < 5; i++) {
      this.numbers.push(Math.floor(Math.random() * (10 - 1)));
    }
  }
}
