import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'new-beer',
  templateUrl: './new-beer.component.html',
  styleUrls: ['./new-beer.component.css']
})
export class NewBeerComponent {
  @Input() isAdding: boolean;
  @Output() addNew = new EventEmitter();

  addBeer(name: string, brand: string, price: number,alcohol: number){
    this.isAdding = false;
    let addDrink = new Beer(name, brand, price, alcohol);
    console.log(addDrink);
    this.addNew.emit(addDrink);
  }


}
  
