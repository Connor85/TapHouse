import { Component } from '@angular/core';
import { Beer } from './models/beer.model';
import { Liquor } from './models/liquor.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Ma_Nnor`s Room';
  sellsThis = 'Beer and Hard-Liquor';
 

  masterBeerList: Beer[] = [
    new Beer('Fremont', 'IPA', 5, 8.2),
    new Beer('Guiness', 'Stout', 10, 10),
    new Beer('Coors Light', 'Logger', 4 , 4.3),
    new Beer('Colt 45', 'Malt-Liquor', 3, 8),
    new Beer('Budlight', 'Logger', 5, 4.3),
    new Beer('Four-Loko', 'Malt Beverage', 11, 12),
    new Beer('Ol`e English', 'Malt Liquor', 2, 8.2),
  ];

  selectedBeer = null;
  isAdding: boolean = false;

  editBeer(clickBeer){
    this.selectedBeer = clickBeer;
  }

  finishedEditing(){
    this.selectedBeer = null;
   
  }

  addNew(addBeer: Beer){
    this.masterBeerList.push(addBeer);

  }

  doneAdding(isDone: boolean) {
    this.isAdding = isDone;
  }


  liquors: Liquor[] = [
    new Liquor('Bloody Mary', 'Mix of tomato juice, vodka, and spices', 12, 12),
    new Liquor('Daiquiri', 'Mixed fruits, white rum, lime juice, and simple syrup', 13, 11),
    new Liquor('Long Island', 'Rum, gin, vodka, tequila, and triple sec mixed into cola and citrus', 5, 10),
    new Liquor('Margarita', 'Tequilla, Lime-juice', 12, 13),
    new Liquor('Zombie', 'Apricot brandy, lime, and pineapple juice.', 13, 14),
    new Liquor('Metropolitan', 'Vodka, triple sec, cranberry juice, and lime juice', 15, 14),
    new Liquor('Jägerbomb', 'Jägemeifer, Redbull', 13, 12)
  ];

  
  newLiquor = new Liquor("", "", 0, 0);

  addLiquor(liquors: Liquor) {
    this.liquors.push(this.newLiquor);
    this.newLiquor = new Liquor("", "",0, 0);
  }

  selectedLiquor = null;

  editLiquor(clickedLiquor){
    this.selectedLiquor= clickedLiquor;
  }

  shotsRefill(liquors: Liquor){
    liquors.shotsLeft = 22;
  }

  sellLiquor(liquors: Liquor){
    liquors.shotsLeft -= 1;
 }

  finishedLiquor(){
    this.selectedLiquor = null;

  }

  LiquorPrice(currentLiquor: Liquor) {
    if (currentLiquor.alcoholContent <= 11) {
      return "text-warning";
     } else if (currentLiquor.alcoholContent >= 12)
     return "text-danger";
  } 
}