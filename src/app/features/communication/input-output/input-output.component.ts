import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  public name: string = 'Alex';
  public age: number = 22;

  public childMessage: any = '';

  reciveMessage(message: string) {
    this.childMessage = message;
  }
}
