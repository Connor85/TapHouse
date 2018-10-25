import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Beer } from '../models/beer.model';

@Component({
  selector: 'edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent {
  @Input() childSelectedBeer: Beer;
  @Output() clickedDone = new EventEmitter();
  
  editing: boolean = false;

  startEdit() {
    this.editing = true;
  }

  finishedEditing( )  {
    this.clickedDone.emit(this.childSelectedBeer);
    this.editing = false;
  }
}
