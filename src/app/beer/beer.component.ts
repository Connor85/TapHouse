import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})


export class BeerComponent {
  @Input() childBeerList: Beer[];
  @Output() clickBeer = new EventEmitter();

  editBeer(beerToEdit){
    console.log(beerToEdit);
    this.clickBeer.emit(beerToEdit);
  }

  sellBeer(beer: Beer) {
    beer.pintsLeft -= 1;
  }

  sortPrice(childBeerList: Beer) {
    if (childBeerList.alcoholContent >= 8) {
      return "text-primary";
    } else if (childBeerList.alcoholContent <= 10)
      return "text-success";
  }

  refill(beer: Beer) {
    beer.pintsLeft = 124;
  }

}
