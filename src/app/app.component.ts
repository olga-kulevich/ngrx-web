import { Component } from '@angular/core';
import {Car} from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars: Car[] = [
    new Car('Ford', '12.12.12', 'Focus', false, 1),
    new Car('Audi', '08.12.12', 'A4', false, 2),
  ];

  OnDelete(car: Car) {
    this.cars = this.cars.filter(c => c.id !== car.id);
  }

  onAdd(car: Car) {
    this.cars.push(car);
  }
}
