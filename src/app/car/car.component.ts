import {Component, Input, Output} from '@angular/core';
import {Car} from '../car.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {
  @Input() car;
  @Output() deleteCar = new EventEmitter();

  onBuy() {
    this.car.isSold = true;
  }

  onDelete() {
    this.deleteCar.emit(this.car);
  }

}
