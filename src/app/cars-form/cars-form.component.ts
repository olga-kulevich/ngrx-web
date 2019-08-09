import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Car} from '../car.model';
import * as moment from 'moment';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {
  private id = 2;
  carName = '';
  carModel = '';

  @Output() addCar = new EventEmitter<Car>();

  constructor() { }

  ngOnInit() {
  }

  onAdd() {
    if (this.carName === '' || this.carName === '') { return; }
    this.id = ++this.id;
    const car = new Car(
      this.carName,
      moment().format('DD.MM.YY'),
      this.carModel,
      false,
      this.id
    );

    this.addCar.emit(car);
    this.carName = '';
    this.carModel = '';
  }

  onLoad() {
    //todo
  }

}
