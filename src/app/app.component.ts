import { Component } from '@angular/core';
import { Beer } from './models/beer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Mark and Connors Craft Beer';
  sellsThis = 'Beer and Hard-Liquor';

  beers: Beer[] = [
    new Beer('Fremont', 'IPA', 5, 8.2),
    new Beer('Guiness', 'Stout', 10, 10),
    new Beer('Coors Light', 'Logger', 4 , 4.3),
    new Beer('Colt 45', 'Malt-Liquor', 3, 8),
    new Beer('Budlight', 'Logger', 5, 4.3),
    new Beer('Four-Loko', 'Malt Beverage', 11, 12),
    new Beer('Ol`e English', 'Malt Liquor', 2, 8.2),
  ];

  
  newBeer = new Beer("", "", 0, 0);

  addBeer(beer: Beer) {
    this.beers.push(this.newBeer);
    this.newBeer = new Beer("", "",0, 0);
  }

  selectedBeer = null;

  editBeer(clickedBeer){
    this.selectedBeer= clickedBeer;
  }

  sellBeer(beer:Beer){
     beer.pintsLeft -= 1;
  }

  finishedEditing(){
    this.selectedBeer = null;
  }

  sortPrice(currentBeer: Beer) {
    if (currentBeer.alcoholContent >= 8) {
      return "bg-warning";
     } else if (currentBeer.alcoholContent <= 10)
     return "bg-danger";
  } 

  kegRefill(beer:Beer){
    beer.pintsLeft = 124;
  }

}
