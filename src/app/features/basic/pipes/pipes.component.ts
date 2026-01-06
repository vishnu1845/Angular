import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {


  // custom pipe
  public people = [
    { name: 'Alex', gender: 'male', age: 21 },
    { name: 'Sarah', gender: 'female', age: 22 },
    { name: 'Alice', gender: 'male', age: 22 }
  ];

}
