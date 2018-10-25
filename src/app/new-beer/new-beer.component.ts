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

  addBeer(brand: string, type: string, price: number, alcoholContent: number){
    this.isAdding = false;
    let addDrink = new Beer(brand, type, price, alcoholContent);
    console.log(addDrink);
    this.addNew.emit(addDrink);
  }


}
  
