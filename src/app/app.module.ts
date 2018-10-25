import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { LiquorComponent } from './liquor/liquor.component';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { NewBeerComponent } from './new-beer/new-beer.component';



@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    LiquorComponent,
    EditBeerComponent,
    NewBeerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
