import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  name:string="liron";
  age:number = 33;
  constructor() { 

  }
  ngOnInit() {
  }

}
