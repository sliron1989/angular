import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeComponent } from './coffe/coffe.component';
import { AnimalsComponent } from './animals/animals.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeComponent,
    AnimalsComponent,
    CatComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
